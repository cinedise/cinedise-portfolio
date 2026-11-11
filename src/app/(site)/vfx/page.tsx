import type { Metadata } from 'next';
import { pageMetadata } from '@/config/seo';
import { getProjectsByCategory } from '@/data/projects';
import VfxContent from './VfxContent';
import { CDN_BASE } from '@/config/content';

export const metadata: Metadata = pageMetadata({
  title: 'VFX Studio in Mumbai | Cinedise Studio',
  description:
    'Visual effects studio in Mumbai. Cinedise Studio delivers compositing, CGI and 3D animation for commercials and films across India.',
  path: '/vfx',
  image: `${CDN_BASE}/vfx/atomic-brew/thumbnail.png`,
});

export default async function VfxPage() {
  const projects = await getProjectsByCategory('VFX');
  return <VfxContent projects={projects} />;
}
