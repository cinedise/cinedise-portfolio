'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { CDN_BASE } from '@/config/content';

export default function ColorContent() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const swiperInstance = useRef<any>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const initSlider = () => {
      if (
        typeof window !== 'undefined' &&
        (window as any).Swiper &&
        (window as any).gsap &&
        sliderRef.current
      ) {
        const $ = (window as any).$;
        const Swiper = (window as any).Swiper;
        const gsap = (window as any).gsap;
        const Power1 = (window as any).Power1;

        // Destroy existing instance if any
        if (swiperInstance.current) {
          swiperInstance.current.destroy(true, true);
        }

        const $slider = $(sliderRef.current);

        // Init Swiper
        swiperInstance.current = new Swiper($slider.find('.swiper')[0], {
          direction: 'horizontal',
          effect: 'slide',
          speed: 600,
          parallax: true,
          resistanceRatio: 0,
          longSwipesRatio: 0.02,
          preloadImages: false,
          preventInteractionOnTransition: true,
          mousewheel: true,
          keyboard: true,
          simulateTouch: true,
          grabCursor: true,

          breakpoints: {
            1025: {
              speed: 1000,
            },
          },

          lazy: {
            loadPrevNext: true,
            loadOnTransitionStart: true,
          },

          navigation: {
            nextEl: $slider.find('.tt-ps-nav-arrow-next')[0],
            prevEl: $slider.find('.tt-ps-nav-arrow-prev')[0],
            disabledClass: 'tt-ps-nav-arrow-disabled',
          },

          pagination: {
            el: $slider.find('.tt-ps-nav-pagination')[0],
            type: 'fraction',
            modifierClass: 'tt-ps-nav-pagination-',
            dynamicBullets: true,
            dynamicMainBullets: 1,
            clickable: true,
          },

          on: {
            init: function (swiper: any) {
              const $slideActive = $(swiper.slides[swiper.activeIndex]);

              // Play video on load
              $slideActive.find('video').each(function (this: HTMLVideoElement) {
                this.play().catch(() => {});
              });

              // Update caption
              $slider.find('.tt-ps-caption-title').text($slideActive.attr('data-title') || '');
              $slider
                .find('.tt-ps-caption-category')
                .text($slideActive.attr('data-category') || '');
            },

            transitionStart: function (swiper: any) {
              const $slideActive = $(swiper.slides[swiper.activeIndex]);

              // Play video
              $slideActive.find('video').each(function (this: HTMLVideoElement) {
                this.play().catch(() => {});
              });

              // Animate caption out
              gsap.fromTo(
                $slider.find('.tt-psc-elem'),
                { autoAlpha: 1, y: 0 },
                {
                  duration: 0.25,
                  autoAlpha: 0,
                  y: -30,
                  stagger: 0.15,
                  ease: Power1?.easeIn || 'power1.in',
                }
              );
            },

            transitionEnd: function (swiper: any) {
              const $slideActive = $(swiper.slides[swiper.activeIndex]);

              // Pause videos in non-active slides
              $slideActive
                .prevAll()
                .find('video')
                .each(function (this: HTMLVideoElement) {
                  this.pause();
                });
              $slideActive
                .nextAll()
                .find('video')
                .each(function (this: HTMLVideoElement) {
                  this.pause();
                });

              // Update caption
              $slider.find('.tt-ps-caption-title').text($slideActive.attr('data-title') || '');
              $slider
                .find('.tt-ps-caption-category')
                .text($slideActive.attr('data-category') || '');

              // Animate caption in
              gsap.fromTo(
                $slider.find('.tt-psc-elem'),
                { autoAlpha: 0, y: 30 },
                {
                  duration: 0.25,
                  autoAlpha: 1,
                  y: 0,
                  stagger: 0.15,
                  ease: Power1?.easeOut || 'power1.out',
                }
              );
            },
          },
        });
      } else {
        // Retry if dependencies not loaded
        timeoutId = setTimeout(initSlider, 100);
      }
    };

    timeoutId = setTimeout(initSlider, 200);

    return () => {
      clearTimeout(timeoutId);
      if (swiperInstance.current) {
        swiperInstance.current.destroy(true, true);
      }
    };
  }, []);

  return (
    <div id="work">
      <h1 className="sr-only">Color grading in Mumbai by Cinedise Studio</h1>
      <div
        ref={sliderRef}
        className="tt-portfolio-slider cursor-drag-mouse-down"
        data-speed="1000"
        data-mousewheel="true"
        data-keyboard="true"
        data-simulate-touch="true"
        data-grab-cursor="true"
        data-pagination-type="fraction"
        data-parallax-mouse-move="true"
      >
        {/* Begin swiper container */}
        <div className="swiper">
          {/* Begin swiper wrapper */}
          <div className="swiper-wrapper">
            {/* Slide 1: The Unequals */}
            <div className="swiper-slide" data-title="The Unequals | Color" data-category="Grading">
              <div className="tt-portfolio-slider-item cover-opacity-3" data-swiper-parallax="50%">
                <video className="tt-bg-video" loop muted playsInline preload="metadata">
                  <source src={`${CDN_BASE}/color/the-unequals.mp4`} type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Slide 2: Atomic Brew */}
            <div className="swiper-slide" data-title="Atomic Brew | Color" data-category="Grading">
              <div className="tt-portfolio-slider-item cover-opacity-3" data-swiper-parallax="50%">
                <video className="tt-bg-video" loop muted playsInline preload="metadata">
                  <source src={`${CDN_BASE}/color/atomic-brew.mp4`} type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Slide 3: Aminova 25 */}
            <div className="swiper-slide" data-title="Aminova 25 | Color" data-category="Grading">
              <div className="tt-portfolio-slider-item cover-opacity-3" data-swiper-parallax="50%">
                <video className="tt-bg-video" loop muted playsInline preload="metadata">
                  <source src={`${CDN_BASE}/color/aminova-25.mp4`} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          {/* End swiper wrapper */}
        </div>
        {/* End swiper container */}

        {/* Caption */}
        <div className="tt-portfolio-slider-caption psc-center">
          <div className="tt-ps-caption-inner">
            <h2 className="tt-psc-elem tt-ps-caption-title"></h2>
            <div className="tt-psc-elem tt-ps-caption-category"></div>
          </div>
        </div>

        {/* Navigation */}
        <div className="tt-portfolio-slider-navigation tt-swiper-nav">
          <div className="tt-ps-nav-prev">
            <div className="tt-ps-nav-arrow tt-ps-nav-arrow-prev magnetic-item"></div>
          </div>
          <div className="tt-ps-nav-next">
            <div className="tt-ps-nav-arrow tt-ps-nav-arrow-next magnetic-item"></div>
          </div>
          <div className="tt-ps-nav-pagination"></div>
        </div>
      </div>

      {/* Footer absolute for this page as per legacy */}
      <footer id="tt-footer" className="footer-absolute">
        <div className="tt-footer-inner">
          <div className="footer-col tt-align-center-left">
            <div className="footer-col-inner">
              <div className="tt-btn tt-btn-link">
                <Link href="/contact" data-hover="Get in Touch">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-col tt-align-center-right">
            <div className="footer-col-inner">
              <div className="footer-social">
                <div className="footer-social-text">
                  <span>Follow</span>
                  <i className="fas fa-share-alt"></i>
                </div>
                <div className="social-buttons">
                  <ul>
                    <li>
                      <a
                        href="https://www.instagram.com/cinedisestudio"
                        className="magnetic-item"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ig.
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://youtube.com/@cinedise?si=gV6O790ZKDjIDTj5"
                        className="magnetic-item"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Yt.
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
