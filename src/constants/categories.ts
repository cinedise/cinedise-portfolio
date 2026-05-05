import type { ProjectCategory, IsotopeCategory } from '@/types/project';
import { CDN_BASE } from '@/config/content';

/**
 * Category grid item for the homepage portfolio grid
 */
export interface CategoryGridItem {
  title: string;
  category: IsotopeCategory;
  link: string;
  image: string;
  external?: boolean;
  projectCategory?: ProjectCategory;
}

/**
 * Centralized category grid items to match isotope filtering
 * These correspond to the filtering categories used in theme.js
 */
export const CATEGORY_GRID_ITEMS: CategoryGridItem[] = [
  {
    title: 'Films',
    category: 'pages',
    projectCategory: 'Films',
    link: '/films',
    image: `${CDN_BASE}/category-thumbnails/category-1.jpg`,
  },
  {
    title: 'Commercial',
    category: 'portfolio',
    projectCategory: 'Commercial',
    link: '/commercials',
    image: `${CDN_BASE}/category-thumbnails/category-2.png`,
  },
  {
    title: 'Social Media Content',
    category: 'elements',
    projectCategory: 'Social Media',
    link: '/social-media',
    image: `${CDN_BASE}/category-thumbnails/category-3.png`,
  },
  {
    title: 'Events',
    category: 'portfolio',
    projectCategory: 'Events',
    link: '/events',
    image: `${CDN_BASE}/category-thumbnails/category-4.jpg`,
  },
  {
    title: 'Visual Effects',
    category: 'portfolio',
    projectCategory: 'VFX',
    link: '/vfx',
    image: `${CDN_BASE}/category-thumbnails/category-5.jpg`,
  },
  {
    title: 'Color',
    category: 'portfolio',
    projectCategory: 'Color',
    link: '/color',
    image: `${CDN_BASE}/category-thumbnails/category-6.jpg`,
  },
  {
    title: 'Motion Design',
    category: 'portfolio',
    projectCategory: 'Motion Design',
    link: 'https://brkn.me/motion',
    image: `${CDN_BASE}/category-thumbnails/category-7.jpg`,
    external: true,
  },
  {
    title: 'Graphic Design',
    category: 'portfolio',
    projectCategory: 'Graphic Design',
    link: '/graphic-design',
    image: `${CDN_BASE}/category-thumbnails/category-8.jpg`,
  },
  {
    title: 'UI/UX',
    category: 'portfolio',
    projectCategory: 'UI/UX',
    link: 'https://brkn.me/web',
    image: `${CDN_BASE}/category-thumbnails/category-9.jpg`,
    external: true,
  },
];
