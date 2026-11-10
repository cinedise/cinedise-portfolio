import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const FORM_RECIPIENT = 'cinedisestudio@gmail.com';
// Must be an address on a domain verified in Resend. RESEND_EMAIL_DOMAIN is set by
// the Vercel Resend integration; CONTACT_FROM_EMAIL overrides it if needed.
const FORM_SENDER =
  process.env.CONTACT_FROM_EMAIL ??
  (process.env.RESEND_EMAIL_DOMAIN
    ? `Cinedise Website <contact@${process.env.RESEND_EMAIL_DOMAIN}>`
    : 'Cinedise Website <onboarding@resend.dev>');

const MAX_LENGTH = { name: 200, email: 320, subject: 300, option: 50, message: 10000 };

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: 'Invalid request' }, { status: 400 });
  }

  const fields = {} as Record<keyof typeof MAX_LENGTH, string>;
  for (const key of Object.keys(MAX_LENGTH) as (keyof typeof MAX_LENGTH)[]) {
    const value = typeof body[key] === 'string' ? (body[key] as string).trim() : '';
    if (!value || value.length > MAX_LENGTH[key]) {
      return NextResponse.json({ message: `Invalid field: ${key}` }, { status: 400 });
    }
    fields[key] = value;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    return NextResponse.json({ message: 'Invalid field: email' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('Contact form: RESEND_API_KEY is not set');
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }

  const { name, email, subject, option, message } = fields;
  const time = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Option: ${option}`,
    `Received: ${time}`,
    '',
    message,
  ].join('\n');

  const html = `
    <p><strong>Name:</strong> ${escapeHtml(name)}<br />
    <strong>Email:</strong> ${escapeHtml(email)}<br />
    <strong>Option:</strong> ${escapeHtml(option)}<br />
    <strong>Received:</strong> ${escapeHtml(time)}</p>
    <p style="white-space: pre-wrap">${escapeHtml(message)}</p>
  `;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FORM_SENDER,
      to: [FORM_RECIPIENT],
      replyTo: email,
      subject: `[${option}] ${subject}`,
      text,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Contact form server error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
