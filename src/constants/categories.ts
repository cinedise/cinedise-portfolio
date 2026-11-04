import type { IsotopeCategory } from '@/types/project';
import { CDN_BASE } from '@/config/content';

/**
 * A destination within a category grid item
 */
export interface CategoryGridLink {
  label: string;
  href: string;
  external?: boolean;
}

/**
 * Category grid item for the homepage portfolio grid
 * Items with two links/images combine two categories into one card
 */
export interface CategoryGridItem {
  category: IsotopeCategory;
  links: CategoryGridLink[];
  images: string[];
}

/**
 * Centralized category grid items to match isotope filtering
 * These correspond to the filtering categories used in theme.js
 */
export const CATEGORY_GRID_ITEMS: CategoryGridItem[] = [
  {
    category: 'pages',
    links: [
      { label: 'Films', href: '/films' },
      { label: 'Commercials', href: '/commercials' },
    ],
    images: [
      `${CDN_BASE}/category-thumbnails/category-1.jpg`,
      `${CDN_BASE}/category-thumbnails/category-2.png`,
    ],
  },
  {
    category: 'portfolio',
    links: [{ label: 'Visual Effects', href: '/vfx' }],
    images: [`${CDN_BASE}/category-thumbnails/category-5.jpg`],
  },
  {
    category: 'portfolio',
    links: [{ label: 'Color', href: '/color' }],
    images: [`${CDN_BASE}/category-thumbnails/category-6.jpg`],
  },
  {
    category: 'portfolio',
    links: [
      { label: 'Motion Design', href: 'https://brkn.me/motion', external: true },
      { label: 'UI/UX', href: 'https://brkn.me/web', external: true },
    ],
    images: [
      `${CDN_BASE}/category-thumbnails/category-7.jpg`,
      `${CDN_BASE}/category-thumbnails/category-9.jpg`,
    ],
  },
];
