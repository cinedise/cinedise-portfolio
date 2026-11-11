import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllProjectSlugs, getProjectBySlug } from '@/data/projects';
import ProjectDetail from '@/components/ProjectDetail';
import { pageMetadata } from '@/config/seo';

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return undefined;

  const description =
    project.description.length > 160
      ? project.description.substring(0, 157) + '...'
      : project.description;

  return pageMetadata({
    title: `${project.title} | Cinedise Studio`,
    description,
    path: `/${slug}`,
    image: project.headerImage || undefined,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
