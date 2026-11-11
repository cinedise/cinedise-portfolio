import type { Metadata } from 'next';
import { pageMetadata } from '@/config/seo';
import { getProjectsByCategory } from '@/data/projects';
import SocialMediaContent from './SocialMediaContent';
import { CDN_BASE } from '@/config/content';

export const metadata: Metadata = pageMetadata({
  title: 'Social Media Video Production in Mumbai | Cinedise Studio',
  description:
    'Reels, short-form video and social media content production in Mumbai by Cinedise Studio, made to engage audiences for brands across India.',
  path: '/social-media',
  image: `${CDN_BASE}/social-media/header.jpg`,
});

export default async function SocialMediaPage() {
  const projects = await getProjectsByCategory('Social Media');
  return <SocialMediaContent projects={projects} />;
}
