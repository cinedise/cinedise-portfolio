import type { Metadata } from 'next';
import { getProjectsByCategory } from '@/data/projects';
import SocialMediaContent from './SocialMediaContent';
import { CDN_BASE } from '@/config/content';

export const metadata: Metadata = {
  title: 'Social Media | Cinedise Studio',
  description:
    'Social media content creation by Cinedise Studio - Engaging video content for your social platforms.',
  openGraph: {
    title: 'Social Media | Cinedise Studio',
    description: 'Social media content creation by Cinedise Studio.',
    images: [{ url: `${CDN_BASE}/social-media/header.jpg` }],
  },
};

export default async function SocialMediaPage() {
  const projects = await getProjectsByCategory('Social Media');
  return <SocialMediaContent projects={projects} />;
}
