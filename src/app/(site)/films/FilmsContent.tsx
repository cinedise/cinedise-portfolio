'use client';

import BodyClassToggler from '@/components/BodyClassToggler';
import ShareOverlay from '@/components/ShareOverlay';
import Link from 'next/link';
import NextCategoryNav from '@/components/NextCategoryNav';
import { CDN_BASE } from '@/config/content';

export default function FilmsContent() {
  return (
    <>
      <BodyClassToggler className="made-with-love-on" />
      <div
        id="page-header"
        className="ph-full ph-bg-image ph-image-shadow ph-image-cover-5 ph-content-parallax"
      >
        <div className="page-header-inner tt-wrap">
          <div className="ph-image">
            <div className="ph-image-inner">
              <video autoPlay muted loop playsInline className="ph-video">
                <source src={`${CDN_BASE}/films/background-video.mp4`} type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="ph-caption">
            <div className="ph-categories ph-appear">
              <div className="ph-category">Film</div>
            </div>
            <h2 className="ph-caption-title ph-appear">The Unequals</h2>
          </div>

          <div className="project-info-list anim-fadeinup margin-top-60">
            <ul>
              <li>
                <div className="pi-list-heading">Genre</div>
                <div className="pi-list-cont">Action</div>
              </li>
              <li>
                <div className="pi-list-heading">Year</div>
                <div className="pi-list-cont">2025</div>
              </li>
              <li>
                <div className="pi-list-heading">Runtime</div>
                <div className="pi-list-cont">24:13</div>
              </li>
              <li>
                <div className="pi-list-heading">Trailer</div>
                <div className="pi-list-cont">
                  <a
                    href="https://www.youtube.com/watch?v=ZXqEM8KaF7M"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch the trailer
                    <span className="pi-list-icon">
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </li>
            </ul>
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

        <div className="made-with-love ph-appear">
          <div className="mwl-inner">
            <div className="mwl-text">Made with</div>
            <div className="mwl-icon">
              <i className="far fa-heart"></i>
            </div>
          </div>
        </div>

        <ShareOverlay />
      </div>

      <div id="work" className="!bg-[#0a0a0a]">
        <div className="tt-section padding-top-xlg-180 padding-left-sm-3-p padding-right-sm-3-p">
          <div className="tt-section-inner tt-wrap">
            <div className="tt-row">
              <div className="tt-col-lg-12">
                <div className="tt-grid ttgr-layout-3 ttgr-gap-3">
                  <div className="tt-grid-items-wrap isotope-items-wrap">
                    {['batch-1.png', 'batch-2.png', 'batch-3.png'].map((img, i) => (
                      <div key={i} className="tt-grid-item isotope-item">
                        <div className="ttgr-item-inner">
                          <img
                            src={`${CDN_BASE}/films/${img}`}
                            alt={`Image ${i + 1}`}
                            className="anim-image-parallax"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tt-section">
          <div className="tt-section-inner">
            <div className="tt-image tti-fixed-height">
              <figure>
                <img
                  className="anim-image-parallax tt-lazy"
                  src={`${CDN_BASE}/films/parallax.png`}
                  alt="Parallax Image"
                />
              </figure>
            </div>
          </div>
        </div>

        <div className="tt-section padding-left-sm-3-p padding-right-sm-3-p">
          <div className="tt-section-inner tt-wrap">
            <div className="tt-row">
              <div className="tt-col-lg-8">
                <div className="tt-heading tt-heading-xsm anim-fadeinup">
                  <h2 className="tt-heading-title">About</h2>
                </div>
                <div className="anim-fadeinup text-gray">
                  <p>
                    The Unequals is an action-packed short film shot on Sony FX30 with cinematic
                    visuals and dynamic compositions. It features high-end VFX crafted by artists
                    over 500+ hours and is graded in Rec. 709 for theatre and Netflix standards.
                    With Dolby Atmos sound, it offers an immersive 360° audio experience for the
                    audience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tt-section no-padding-bottom">
          <div className="tt-section-inner tt-wrap max-width-1600">
            <div className="tt-gallery ttga-hover">
              <div className="tt-grid ttgr-layout-3 ttgr-not-cropped ttgr-shifted ttgr-gap-4">
                <div className="tt-grid-items-wrap isotope-items-wrap lightgallery">
                  {['poster-1.jpg', 'poster-2.png', 'poster-3.png'].map((img, i) => (
                    <div key={i} className="tt-grid-item isotope-item">
                      <div className="ttgr-item-inner">
                        <a
                          href={`${CDN_BASE}/films/${img}`}
                          className="tt-gallery-item lg-trigger"
                          data-cursor="View"
                        >
                          <div className="tt-gallery-item-inner">
                            <div className="tt-gallery-image-wrap anim-zoomin">
                              <figure className="tt-gallery-image ttgr-height">
                                <img src={`${CDN_BASE}/films/${img}`} alt="Poster" />
                              </figure>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <NextCategoryNav
          href="/commercials"
          categoryName="Commercials"
          thumbnailUrl={`${CDN_BASE}/category-thumbnails/category-2.png`}
        />
      </div>
    </>
  );
}
