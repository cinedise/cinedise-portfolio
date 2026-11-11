'use client';

import Link from 'next/link';
import type { Project } from '@/types/project';
import NextCategoryNav from '@/components/NextCategoryNav';
import { CDN_BASE } from '@/config/content';

interface Props {
  projects: Project[];
}

export default function EventsContent({ projects }: Props) {
  const eventProjects = projects;

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
              <img
                src={`${CDN_BASE}/events/header.jpg`}
                alt="Event videography by Cinedise Studio"
              />
            </div>
          </div>

          <div className="ph-caption">
            <h1 className="ph-caption-title ph-appear">Events</h1>
            <div className="ph-caption-title-ghost ph-appear">Events</div>
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
        <div className="tt-section padding-top-xlg-150">
          <div className="tt-section-inner">
            <div id="portfolio-grid" className="pgi-cap-inside pgi-cap-hover">
              <div className="tt-grid ttgr-layout-1-2 ttgr-gap-4">
                <div className="tt-grid-items-wrap isotope-items-wrap">
                  {eventProjects.map((project, index) => (
                    <div
                      key={project.slug}
                      className={`tt-grid-item isotope-item ${index % 2 === 0 ? 'people' : 'creative'}`}
                    >
                      <div className="ttgr-item-inner">
                        <div className="portfolio-grid-item">
                          <Link
                            href={`/${project.slug}`}
                            className="pgi-image-wrap"
                            data-cursor="View<br>Project"
                          >
                            <div className="pgi-image-holder cover-opacity-2">
                              <div className="pgi-image-inner anim-zoomin">
                                <figure className="pgi-image ttgr-height">
                                  <img src={project.headerImage} alt={project.title} />
                                </figure>
                              </div>
                            </div>
                          </Link>

                          <div className="pgi-caption">
                            <div className="pgi-caption-inner">
                              <h2 className="pgi-title">{project.title}</h2>
                              <div className="pgi-categories-wrap">
                                <div className="pgi-category">{project.category}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <NextCategoryNav
          href="/vfx"
          categoryName="VFX"
          thumbnailUrl={`${CDN_BASE}/category-thumbnails/category-5.jpg`}
        />
      </div>
    </>
  );
}
