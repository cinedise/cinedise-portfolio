'use client';

import Link from 'next/link';
import type { Project } from '@/types/project';
import NextCategoryNav from '@/components/NextCategoryNav';
import { CDN_BASE } from '@/config/content';

interface Props {
  projects: Project[];
}

export default function SocialMediaContent({ projects }: Props) {
  const socialProjects = projects;

  return (
    <>
      {/* Page Header */}
      <div
        id="page-header"
        className="ph-full ph-cap-xxlg ph-center ph-image-cropped ph-image-cover-2 ph-content-parallax"
      >
        <div className="page-header-inner tt-wrap">
          <div className="ph-image">
            <div className="ph-image-inner">
              <img src={`${CDN_BASE}/social-media/header.jpg`} alt="Image" />
            </div>
          </div>

          <div className="ph-caption">
            <h1 className="ph-caption-title ph-appear">Social Media</h1>
            <div className="ph-caption-title-ghost ph-appear">Content</div>
            <div className="ph-caption-subtitle ph-appear">Selected Works</div>
          </div>
        </div>

        <a href="#work" className="scroll-down-circle" data-offset="30">
          <div className="sdc-inner ph-appear">
            <div className="sdc-icon">
              <i className="fas fa-chevron-down"></i>
            </div>
            <svg viewBox="0 0 500 500">
              <defs>
                <path
                  d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
                  id="textcircle"
                ></path>
              </defs>
              <text dy="30">
                <textPath xlinkHref="#textcircle">Scroll down - Scroll down -</textPath>
              </text>
            </svg>
          </div>
        </a>
      </div>

      {/* Page Content */}
      <div id="work">
        <div className="tt-section padding-top-xlg-150 padding-bottom-xlg-150">
          <div className="tt-section-inner tt-wrap max-width-1400">
            <div className="portfolio-interactive pi-borders pi-compact pi-force-scroll">
              {socialProjects.map((project, index) => (
                <div
                  key={project.slug}
                  className="portfolio-interactive-item anim-skewinup"
                  data-scroll-speed={index % 2 === 0 ? '3' : '2'}
                >
                  <Link href={`/${project.slug}`} className="pi-item-title-link">
                    <h2 className="pi-item-title">{project.title}</h2>
                    <div className="pi-item-hover-title">{project.title}</div>
                  </Link>
                  <div className="pi-item-category-wrap">
                    <div className="pi-item-category">{project.category}</div>
                  </div>
                  <figure className="pi-item-image cover-opacity-2">
                    {/* Check if the first gallery item is a video or image, or use headerImage if available */}
                    {project.galleryImages && project.galleryImages[0]?.endsWith('.mp4') ? (
                      <video autoPlay muted loop playsInline className="ph-video">
                        <source src={project.galleryImages[0]} type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        src={project.headerImage || project.galleryImages[0]}
                        alt={project.title}
                      />
                    )}
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>

        <NextCategoryNav
          href="/events"
          categoryName="Events"
          thumbnailUrl={`${CDN_BASE}/category-thumbnails/category-4.jpg`}
        />
      </div>
    </>
  );
}
