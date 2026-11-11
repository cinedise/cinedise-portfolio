'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import type { Project } from '@/types/project';

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const watchNowButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLDivElement>(null);
  const videoPopupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVideoOpen) {
      document.body.classList.add('video-open');
      // Focus close button when modal opens
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);
    } else {
      document.body.classList.remove('video-open');
    }
    return () => {
      document.body.classList.remove('video-open');
    };
  }, [isVideoOpen]);

  const handleVideoOpen = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsVideoOpen(true);
  };

  const handleVideoClose = () => {
    setIsVideoOpen(false);
    // Restore focus to Watch Now button
    setTimeout(() => {
      watchNowButtonRef.current?.focus();
    }, 100);
  };

  // Handle Escape key to close video modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVideoOpen) {
        handleVideoClose();
      }
    };

    if (isVideoOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isVideoOpen]);

  // Focus trap for video modal
  useEffect(() => {
    if (!isVideoOpen || !videoPopupRef.current) return;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const focusableElements = videoPopupRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusableElements || focusableElements.length === 0) return;

      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTab);
    return () => {
      document.removeEventListener('keydown', handleTab);
    };
  }, [isVideoOpen]);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => {
          setCopySuccess(true);
          setTimeout(() => setCopySuccess(false), 2000);
        })
        .catch((err) => {
          console.error('Failed to copy:', err);
        });
    }
  };

  // Determine video source
  const videoSrc = project.videoYoutubeId
    ? `https://www.youtube.com/embed/${project.videoYoutubeId}?autoplay=1`
    : project.videoEmbedUrl;

  return (
    <>
      {/* Page Header */}
      <div
        id="page-header"
        className="ph-full ph-center ph-bg-image ph-image-shadow ph-image-cover-5 ph-content-parallax"
      >
        <div className="page-header-inner tt-wrap">
          <div className="ph-image">
            <div className="ph-image-inner">
              <img src={project.headerImage} alt={`${project.title} by Cinedise Studio`} />
            </div>
          </div>

          <div className="ph-caption">
            <div className="ph-categories ph-appear">
              <div className="ph-category">{project.category}</div>
            </div>

            <h1 className="ph-caption-title ph-appear">{project.title}</h1>
          </div>

          <div className="project-info-list anim-fadeinup">
            <ul>
              <li>
                <div className="pi-list-heading">Year</div>
                <div className="pi-list-cont">{project.year}</div>
              </li>
              <li>
                <div className="tt-btn tt-btn-primary">
                  <button
                    ref={watchNowButtonRef}
                    type="button"
                    className="video-trigger"
                    data-hover="Watch Now"
                    data-cursor="Watch Now"
                    aria-label="Open video player"
                    onClick={handleVideoOpen}
                  >
                    Watch Now
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <a
          href="#work"
          className="scroll-down-circle"
          data-offset="30"
          aria-label="Scroll to project details"
        >
          <div className="sdc-inner ph-appear">
            <div className="sdc-icon">
              <i className="fas fa-chevron-down" aria-hidden="true"></i>
            </div>
            <svg viewBox="0 0 500 500" aria-hidden="true">
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

        <div className="ph-share">
          <div className="ph-share-trigger ph-appear">
            <div className="ph-share-text">Share</div>
            <div className="ph-share-icon magnetic-item">
              <i className="fas fa-share-alt"></i>
            </div>
          </div>

          <div className="ph-share-content">
            <div className="ph-share-close cursor-close">
              <div className="bg-noise"></div>
            </div>
            <div className="ph-share-inner">
              <h2 className="ph-share-title ph-share-appear">Spread the Word!</h2>
              <div className="ph-share-subtitle ph-share-appear">
                Share this project with your friends
              </div>
              <div className="social-buttons ph-share-appear">
                <ul>
                  <li>
                    <button
                      type="button"
                      className="magnetic-item copy-link-btn"
                      aria-label="Copy project link"
                      onClick={handleCopyLink}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0,
                      }}
                    >
                      <i className="fas fa-link" aria-hidden="true"></i>
                      {copySuccess && <span className="visually-hidden">Link copied!</span>}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="ph-share-ghost ph-share-appear">Share</div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div id="work">
        {/* Video Popup Overlay */}
        {/* Using a simplified version of the popup logic for React */}
        {isVideoOpen && (
          <div
            ref={videoPopupRef}
            className="video-popup-overlay"
            style={{ display: 'block' }}
            onClick={handleVideoClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-modal-title"
          >
            <div className="video-popup-content" onClick={(e) => e.stopPropagation()}>
              <h2 id="video-modal-title" className="visually-hidden">
                {project.title} Video
              </h2>
              <div
                ref={closeButtonRef}
                className="video-popup-close"
                onClick={handleVideoClose}
                role="button"
                tabIndex={0}
                aria-label="Close video player"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleVideoClose();
                  }
                }}
              >
                <i className="fas fa-times"></i>
              </div>
              <div className="video-wrapper">
                {videoSrc &&
                  (videoSrc.toLowerCase().endsWith('.mp4') ? (
                    <video
                      width="100%"
                      height="100%"
                      controls
                      autoPlay
                      src={videoSrc}
                      style={{ position: 'absolute', top: 0, left: 0, objectFit: 'contain' }}
                    />
                  ) : (
                    <iframe
                      width="100%"
                      height="600"
                      src={videoSrc}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ))}
              </div>
            </div>
          </div>
        )}
        <style jsx global>{`
          .video-popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.8);
            z-index: 9999;
            display: none;
            overflow: hidden;
          }
          .video-popup-content {
            position: fixed;
            top: 50vh;
            left: 50vw;
            transform: translate(-50%, -50%);
            width: 90%;
            max-width: 1200px;
            background: #000;
            padding: 20px;
            border-radius: 8px;
          }
          .video-popup-close {
            position: absolute;
            top: 20px;
            right: 20px;
            color: #fff;
            font-size: 20px;
            cursor: pointer;
            z-index: 1;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: transparent;
            transition: all 0.3s ease;
          }
          .video-popup-close:hover {
            background: rgba(255, 255, 255, 0.1);
            transform: rotate(90deg);
          }
          .video-wrapper {
            position: relative;
            padding-bottom: 56.25%;
            height: 0;
            overflow: hidden;
          }
          .video-wrapper iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
          body.video-open {
            overflow: hidden;
          }
          /* Gallery Video Styles */
          .tt-gallery-image video {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          /* Screen reader only content */
          .visually-hidden {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border-width: 0;
          }
        `}</style>

        {/* Description Section */}
        <div className="tt-section padding-left-sm-3-p padding-right-sm-3-p">
          <div className="tt-section-inner tt-wrap max-width-1000">
            <div className="anim-fadeinup text-xxlg text-center">
              <p>{project.description}</p>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        {project.galleryImages.length > 0 && (
          <div className="tt-section">
            <div className="tt-section-inner max-width-3000">
              <div className="tt-gallery ttga-hover">
                <div className="tt-grid ttgr-layout-2 ttgr-not-cropped ttgr-gap-1">
                  <div className="tt-grid-items-wrap isotope-items-wrap lightgallery">
                    {project.galleryImages.map((image, index) => {
                      const isVideo = image.toLowerCase().endsWith('.mp4');
                      return (
                        <div key={index} className="tt-grid-item isotope-item">
                          <div className="ttgr-item-inner">
                            <a
                              href={image}
                              className="tt-gallery-item lg-trigger"
                              data-cursor="View"
                            >
                              <div className="tt-gallery-item-inner">
                                <div className="tt-gallery-image-wrap anim-zoomin">
                                  <figure className="tt-gallery-image ttgr-height">
                                    {isVideo ? (
                                      <video autoPlay loop muted playsInline>
                                        <source src={image} type="video/mp4" />
                                      </video>
                                    ) : (
                                      <img
                                        src={image}
                                        alt={`${project.title}, still ${index + 1}`}
                                      />
                                    )}
                                  </figure>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Next Project Section */}
        {project.nextProject && (
          <div className="tt-section padding-top-xlg-150 padding-bottom-xlg-150">
            <div className="tt-section-inner tt-wrap">
              <div className="tt-page-nav tt-pn-scroll">
                <Link href={`/${project.nextProject.slug}`} className="tt-pn-link anim-fadeinup">
                  <div className="tt-pn-title">Next Project</div>
                  <div className="tt-pn-hover-title">{project.nextProject.title}</div>
                </Link>
                <div className="tt-pn-subtitle anim-fadeinup">Explore More</div>
                <div className="tt-pn-image">
                  <img src={project.nextProject.thumbnail} alt={project.nextProject.title} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
