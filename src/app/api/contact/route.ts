import { NextResponse } from 'next/server';
import { siteConfig } from '@/config/site';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, option, message } = body;

    const templateParams = {
      to_email: siteConfig.contact.email,
      subject: subject,
      option: option,
      name: name,
      time: new Date().toLocaleString(),
      message: message,
      from_email: email,
      reply_to: email,
    };

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        accessToken: process.env.EMAILJS_PRIVATE_KEY,
        template_params: templateParams,
      }),
    });

    if (response.ok) {
      return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } else {
      const errorText = await response.text();
      console.error('EmailJS Error:', errorText);
      return NextResponse.json(
        { message: 'Failed to send email', details: errorText },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
