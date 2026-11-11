import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const SITE_DESCRIPTION =
  'Cinedise Studio is a Mumbai-based film and video production studio creating commercials, short films, VFX, color grading, event films and social media content for brands across India.';

interface PageMetadataInput {
  title: string;
  description: string;
  /** Path of the page, starting with "/". Used for the canonical URL. */
  path: string;
  image?: string;
}

/**
 * Builds page metadata with a canonical URL and consistent Open Graph / Twitter tags.
 * A page's `openGraph` replaces the root layout's entirely, so shared fields live here.
 */
export function pageMetadata({ title, description, path, image }: PageMetadataInput): Metadata {
  const images = image ? [{ url: image }] : undefined;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.company.name,
      locale: 'en_IN',
      type: 'website',
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}
