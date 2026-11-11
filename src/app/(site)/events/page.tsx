import type { Metadata } from 'next';
import { pageMetadata } from '@/config/seo';
import { getProjectsByCategory } from '@/data/projects';
import EventsContent from './EventsContent';
import { CDN_BASE } from '@/config/content';

export const metadata: Metadata = pageMetadata({
  title: 'Event Videography in Mumbai | Cinedise Studio',
  description:
    'Event coverage and videography in Mumbai by Cinedise Studio, capturing fashion weeks, auto expos, college fests and brand events across India.',
  path: '/events',
  image: `${CDN_BASE}/events/header.jpg`,
});

export default async function EventsPage() {
  const projects = await getProjectsByCategory('Events');
  return <EventsContent projects={projects} />;
}
