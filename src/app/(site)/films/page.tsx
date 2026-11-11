import type { Metadata } from 'next';
import { pageMetadata } from '@/config/seo';
import FilmsContent from './FilmsContent';
import { CDN_BASE } from '@/config/content';

export const metadata: Metadata = pageMetadata({
  title: 'Films | Cinedise Studio, Mumbai',
  description:
    'Short film production by Mumbai-based Cinedise Studio. Watch The Unequals, an action short film with high-end VFX and Dolby Atmos sound.',
  path: '/films',
  image: `${CDN_BASE}/films/parallax.png`,
});

export default function FilmsPage() {
  return <FilmsContent />;
}
