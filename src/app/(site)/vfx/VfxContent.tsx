'use client';

import Link from 'next/link';
import type { Project } from '@/types/project';
import { useEffect, useRef } from 'react';

interface Props {
  projects: Project[];
}

export default function VfxContent({ projects }: Props) {
  const vfxProjects = projects;
  const carouselRef = useRef<HTMLDivElement>(null);
  const swiperInstance = useRef<any>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const initCarousel = () => {
      if (typeof window !== 'undefined' && (window as any).Swiper && carouselRef.current) {
        const $ = (window as any).$;
        const Swiper = (window as any).Swiper;

        // Destroy existing instance if any
        if (swiperInstance.current) {
          swiperInstance.current.destroy(true, true);
        }

        const $carousel = $(carouselRef.current);

        // Initialize Swiper
        swiperInstance.current = new Swiper($carousel.find('.swiper')[0], {
          direction: 'horizontal',
          slidesPerView: 'auto',
          spaceBetween: 0,
          resistanceRatio: 0.85,
          longSwipesRatio: 0.3,
          shortSwipes: true,
          centeredSlides: true,
          preloadImages: false,
          watchSlidesProgress: true,
          preventInteractionOnTransition: false,
          speed: 900,
          keyboard: true,
          mousewheel: true,
          simulateTouch: true,
          grabCursor: true,

          lazy: {
            loadPrevNext: true,
            loadOnTransitionStart: true,
          },

          breakpoints: {
            1025: {
              speed: 1200,
              lazy: {
                loadPrevNextAmount: 3,
              },
            },
          },

          navigation: {
            nextEl: $carousel.find('.tt-pc-arrow-next')[0],
            prevEl: $carousel.find('.tt-pc-arrow-prev')[0],
            disabledClass: 'tt-pc-arrow-disabled',
          },

          pagination: {
            el: $carousel.find('.tt-pc-pagination')[0],
            type: 'fraction',
            modifierClass: 'tt-pc-pagination-',
            dynamicBullets: true,
            dynamicMainBullets: 1,
            clickable: true,
          },

          on: {
            lazyImageReady: function () {
              swiperInstance.current?.update();
            },

            init: function (swiper: any) {
              const slideActive = $(swiper.slides[swiper.activeIndex]);
              slideActive.addClass('tt-slide-active');
              slideActive.prevAll().addClass('tt-pcs-disabled');
              slideActive.nextAll().addClass('tt-pcs-disabled');

              // Play video in active slide
              slideActive.find('video').each(function (this: HTMLVideoElement) {
                this.play().catch(() => {});
              });
            },

            transitionStart: function (swiper: any) {
              const slideActive = $(swiper.slides[swiper.activeIndex]);
              slideActive.addClass('tt-slide-active');
              slideActive.prev().addClass('tt-slide-active-start');
              slideActive.next().addClass('tt-slide-active-start');
              slideActive.prevAll().addClass('tt-pcs-disabled');
              slideActive.removeClass('tt-pcs-disabled');
              slideActive.nextAll().addClass('tt-pcs-disabled');

              // Play video in active slide
              $('.swiper-slide-active')
                .find('video')
                .each(function (this: HTMLVideoElement) {
                  this.play().catch(() => {});
                });

              $('.tt-pc-arrow').addClass('tt-pc-arrow-disabled');
            },

            transitionEnd: function (swiper: any) {
              const slideActive = $(swiper.slides[swiper.activeIndex]);
              slideActive.prevAll().removeClass('tt-slide-active');
              slideActive.nextAll().removeClass('tt-slide-active');
              slideActive.prev().removeClass('tt-slide-active-start');
              slideActive.next().removeClass('tt-slide-active-start');

              // Pause videos in non-active slides
              $('.swiper-slide-prev')
                .find('video')
                .each(function (this: HTMLVideoElement) {
                  this.pause();
                });
              $('.swiper-slide-next')
                .find('video')
                .each(function (this: HTMLVideoElement) {
                  this.pause();
                });

              $('.tt-pc-arrow').removeClass('tt-pc-arrow-disabled');
            },
          },
        });

        // Scale down animation on carousel click
        $carousel.find('.swiper').on('mousedown touchstart pointerdown', function (e: any) {
          if (e.which === 1) {
            if (typeof window !== 'undefined' && (window as any).gsap) {
              (window as any).gsap.to($carousel.find('.swiper-slide'), {
                duration: 0.7,
                scale: 0.9,
              });
            }
          }
        });

        $('body').on('mouseup touchend pointerup mouseleave', function () {
          if (typeof window !== 'undefined' && (window as any).gsap) {
            (window as any).gsap.to($carousel.find('.swiper-slide'), {
              duration: 0.7,
              scale: 1,
              clearProps: 'scale',
            });
          }
        });
      } else {
        // Retry if dependencies not loaded
        timeoutId = setTimeout(initCarousel, 100);
      }
    };

    timeoutId = setTimeout(initCarousel, 200);

    return () => {
      clearTimeout(timeoutId);
      if (swiperInstance.current) {
        swiperInstance.current.destroy(true, true);
      }
    };
  }, []);

  return (
    <div id="work">
      <h1 className="sr-only">VFX studio in Mumbai: visual effects by Cinedise Studio</h1>
      <div
        ref={carouselRef}
        className="tt-portfolio-carousel pci-caption-center cursor-drag-mouse-down pc-scale-down"
        data-simulate-touch="true"
        data-mousewheel="true"
        data-keyboard="true"
        data-grab-cursor="true"
        data-pagination-type="fraction"
      >
        {/* Begin swiper container */}
        <div className="swiper">
          {/* Begin swiper wrapper */}
          <div className="swiper-wrapper">
            {vfxProjects.map((project, index) => {
              // Find the first mp4 in galleryImages to use as preview video, if any
              const previewVideo = project.galleryImages.find((img) => img.endsWith('.mp4'));

              return (
                <div key={project.slug} className="swiper-slide">
                  <Link
                    href={`/${project.slug}`}
                    className="tt-portfolio-carousel-item"
                    data-cursor="View<br>Project"
                  >
                    <figure className="tt-pci-image-wrap cover-opacity-3">
                      {/* Check for video or image */}
                      {previewVideo ? (
                        <video
                          className="tt-pci-video"
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          suppressHydrationWarning
                        >
                          <source src={previewVideo} type="video/mp4" />
                        </video>
                      ) : (
                        <img
                          className="tt-pci-image swiper-lazy"
                          src={project.headerImage}
                          data-src={project.headerImage}
                          alt={project.title}
                        />
                      )}
                    </figure>
                    <div className="tt-pci-caption-front">
                      <div className="tt-pci-caption">
                        <div className="tt-pci-caption-inner">
                          <h2 className="tt-pci-title">{project.title}</h2>
                          <div className="tt-pci-categories">
                            <div className="tt-pci-category">{project.category}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tt-pci-caption tt-pci-caption-back">
                      <div className="tt-pci-caption-inner">
                        <h2 className="tt-pci-title">{project.title}</h2>
                        <div className="tt-pci-categories">
                          <div className="tt-pci-category">{project.category}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          {/* End swiper wrapper */}
        </div>
        {/* End swiper containers */}

        {/* Navigation */}
        <div className="tt-pc-navigation tt-swiper-nav">
          <div className="tt-pc-nav-prev">
            <div className="tt-pc-arrow tt-pc-arrow-prev magnetic-item"></div>
          </div>
          <div className="tt-pc-nav-next">
            <div className="tt-pc-arrow tt-pc-arrow-next magnetic-item"></div>
          </div>
          <div className="tt-pc-pagination"></div>
        </div>
      </div>
    </div>
  );
}
