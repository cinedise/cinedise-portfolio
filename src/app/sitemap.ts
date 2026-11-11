import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { getAllProjectSlugs } from '@/data/projects';

const STATIC_PATHS = [
  '/',
  '/films',
  '/commercials',
  '/vfx',
  '/color',
  '/events',
  '/social-media',
  '/graphic-design',
  '/contact',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.company.url;
  const slugs = await getAllProjectSlugs();

  return [
    ...STATIC_PATHS.map((path) => ({
      url: `${base}${path === '/' ? '' : path}`,
      changeFrequency: 'monthly' as const,
      priority: path === '/' ? 1 : 0.8,
    })),
    ...slugs.map((slug) => ({
      url: `${base}/${slug}`,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ];
}
