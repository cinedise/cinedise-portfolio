import type { Metadata } from 'next';
import { pageMetadata } from '@/config/seo';
import { getProjectsByCategory } from '@/data/projects';
import CommercialsContent from './CommercialsContent';
import { CDN_BASE } from '@/config/content';

export const metadata: Metadata = pageMetadata({
  title: 'Commercial Video Production in Mumbai | Cinedise Studio',
  description:
    'Ad film and commercial video production in Mumbai by Cinedise Studio. High-impact commercials for brands across India, from concept to final cut.',
  path: '/commercials',
  image: `${CDN_BASE}/commercials/header.png`,
});

export default async function CommercialsPage() {
  const projects = await getProjectsByCategory('Commercial');
  return <CommercialsContent projects={projects} />;
}
