import type { Metadata } from 'next';
import { pageMetadata } from '@/config/seo';
import GraphicDesignContent from './GraphicDesignContent';
import { CDN_BASE } from '@/config/content';

export const metadata: Metadata = pageMetadata({
  title: 'Graphic Design Studio in Mumbai | Cinedise Studio',
  description:
    'Graphic design by Cinedise Studio in Mumbai: posters, brand identity and visual design for brands and creators.',
  path: '/graphic-design',
  image: `${CDN_BASE}/category-thumbnails/category-8.jpg`,
});

export default function GraphicDesignPage() {
  return <GraphicDesignContent />;
}
