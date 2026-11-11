import type { Metadata } from 'next';
import { pageMetadata } from '@/config/seo';
import ColorContent from './ColorContent';
import { CDN_BASE } from '@/config/content';

export const metadata: Metadata = pageMetadata({
  title: 'Color Grading Studio in Mumbai | Cinedise Studio',
  description:
    'Cinematic color grading in Mumbai by Cinedise Studio for films, commercials and events. See our grading work on The Unequals, Atomic Brew and Aminova 25.',
  path: '/color',
  image: `${CDN_BASE}/commercials/atomic-brew/thumbnail.jpg`,
});

export default function ColorPage() {
  return <ColorContent />;
}
