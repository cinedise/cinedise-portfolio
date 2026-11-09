import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';
import type { Project } from '@/types/project';
import { CDN_BASE } from '@/config/content';

const reader = createReader(process.cwd(), keystaticConfig);

// Keystatic uploads are committed to public/assets/projects/{header,gallery}, then the
// "Sync media to CDN" GitHub Action moves them to S3. Serve them from the CDN.
function uploadUrl(file: string, type: 'header' | 'gallery'): string {
  return `${CDN_BASE}/projects/${type}/${file}`;
}

// Helper to resolve image paths (handles string legacy, string values, and object discriminants)
function resolveImage(
  img: string | { discriminant: 'upload' | 'url'; value: string } | null,
  type: 'header' | 'gallery'
): string {
  if (!img) return '';
  if (typeof img === 'string') {
    if (img.startsWith('http')) return img;
    // Legacy migration: assume upload
    return uploadUrl(img, type);
  }
  const val = img as any;
  if (val.discriminant === 'url') return val.value || '';
  if (val.discriminant === 'upload') {
     if (!val.value) return '';
     return uploadUrl(val.value, type);
  }
  return '';
}

/**
 * Get a project by its slug
 * @param slug - The project slug to search for
 * @returns The project if found, undefined otherwise
 */
export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  const project = await reader.collections.projects.read(slug);
  if (!project) return undefined;

  let nextProjectData = undefined;
  if (project.nextProject) {
    const nextP = await reader.collections.projects.read(project.nextProject);
    if (nextP) {
      nextProjectData = {
        slug: project.nextProject,
        title: nextP.title,
        thumbnail: resolveImage(nextP.headerImage as any, 'header'),
      };
    }
  }

  return {
    slug,
    title: project.title,
    category: project.category as Project['category'],
    year: project.year,
    headerImage: resolveImage(project.headerImage as any, 'header'),
    description: project.description,
    videoYoutubeId: project.videoYoutubeId || undefined,
    videoEmbedUrl: project.videoEmbedUrl || undefined,
    galleryImages: (project.gallery || []).map((img) => resolveImage(img as any, 'gallery')),
    nextProject: nextProjectData,
  };
}

/**
 * Get all project slugs for static generation
 * @returns Array of all project slugs
 */
export async function getAllProjectSlugs(): Promise<string[]> {
  const projects = await reader.collections.projects.list();
  return projects;
}

/**
 * Get all projects in a specific category
 * @param category - The category to filter by
 * @returns Array of projects in the specified category
 */
export async function getProjectsByCategory(category: Project['category']): Promise<Project[]> {
  const allProjects = await reader.collections.projects.all();
  
  const filtered = allProjects.filter((entry) => entry.entry.category === category);
  
  // Map to Project type (we only need basic info for lists usually, but we'll map fully)
  return filtered.map((item) => ({
    slug: item.slug,
    title: item.entry.title,
    category: item.entry.category as Project['category'],
    year: item.entry.year,
    headerImage: resolveImage(item.entry.headerImage as any, 'header'),
    description: item.entry.description,
    videoYoutubeId: item.entry.videoYoutubeId || undefined,
    videoEmbedUrl: item.entry.videoEmbedUrl || undefined,
    galleryImages: (item.entry.gallery || []).map((img) => resolveImage(img as any, 'gallery')),
    nextProject: undefined, // Lists don't usually need nextProject
  }));
}

/**
 * Get all unique categories from projects
 * @returns Array of unique category names
 */
export async function getAllCategories(): Promise<Project['category'][]> {
  const allProjects = await reader.collections.projects.all();
  const categories = new Set(allProjects.map((p) => p.entry.category));
  return Array.from(categories) as Project['category'][];
}
