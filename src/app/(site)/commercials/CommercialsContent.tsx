'use client';

import Link from 'next/link';
import type { Project } from '@/types/project';
import NextCategoryNav from '@/components/NextCategoryNav';
import { CDN_BASE } from '@/config/content';

interface Props {
  projects: Project[];
}

export default function CommercialsContent({ projects }: Props) {
  const commercialProjects = projects;

  return (
    <>
      {/* Page Header */}
      <div
        id="page-header"
        className="ph-full ph-cap-xxlg ph-image-cropped ph-image-cover-2 ph-content-parallax"
      >
        <div className="page-header-inner tt-wrap">
          <div className="ph-image">
            <div className="ph-image-inner">
              <img src={`${CDN_BASE}/commercials/header.png`} alt="Image" />
            </div>
          </div>

          <div className="ph-caption">
            <h1 className="ph-caption-title ph-appear">Commercial</h1>
            <div className="ph-caption-title-ghost ph-appear">Commercial</div>
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
        <div id="sdc-target" className="tt-section padding-top-xlg-150 padding-bottom-150">
          <div className="tt-section-inner">
            <div className="portfolio-list pli-cropped pl-compact pli-hover">
              {commercialProjects.map((project, index) => (
                <div key={project.slug} className="portfolio-list-item">
                  <div className="pli-inner">
                    <div className="pli-image-col">
                      <Link
                        href={`/${project.slug}`}
                        className="pli-image-link"
                        data-cursor="View<br>Project"
                      >
                        <div className="pli-image-holder">
                          <figure className="pli-image">
                            <img
                              className="anim-image-parallax tt-lazy"
                              src={project.headerImage}
                              data-src={project.headerImage}
                              alt={project.title}
                            />
                          </figure>
                        </div>
                        <div className="pli-info-col pli-info-inner">
                          <div className="pli-info">
                            <h2 className="pli-title">{project.title}</h2>
                            <div className="pli-categories-wrap">
                              <div className="pli-category">{project.category}</div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="pli-info-col pli-info-outer">
                      <div className="pli-info">
                        <div className="pli-counter"></div>
                        <h2 className="pli-title">
                          <Link href={`/${project.slug}`}>{project.title}</Link>
                        </h2>
                        <div className="pli-categories-wrap">
                          <div className="pli-category">{project.category}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <NextCategoryNav
          href="/social-media"
          categoryName="Social Media"
          thumbnailUrl={`${CDN_BASE}/category-thumbnails/category-3.png`}
        />
      </div>
    </>
  );
}
