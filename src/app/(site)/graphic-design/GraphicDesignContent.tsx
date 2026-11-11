'use client';

import NextCategoryNav from '@/components/NextCategoryNav';
import { CDN_BASE } from '@/config/content';

export default function GraphicDesignContent() {
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
                src={`${CDN_BASE}/category-thumbnails/category-8.jpg`}
                alt="Graphic design by Cinedise Studio"
              />
            </div>
          </div>

          <div className="ph-caption">
            <h1 className="ph-caption-title ph-appear">Graphic Design</h1>
            <div className="ph-caption-title-ghost ph-appear">Graphic</div>
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
                  {/* Item 1: BPF */}
                  <div className="tt-grid-item isotope-item creative">
                    <div className="ttgr-item-inner">
                      <div className="portfolio-grid-item">
                        <a
                          href={`${CDN_BASE}/graphic/bpf.png`}
                          target="_blank"
                          className="pgi-image-wrap"
                          data-cursor="View<br>Project"
                        >
                          <div className="pgi-image-holder cover-opacity-2">
                            <div className="pgi-image-inner anim-zoomin">
                              <figure className="pgi-image ttgr-height">
                                <img src={`${CDN_BASE}/graphic/bpf.png`} alt="BPF" />
                              </figure>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Item 2: Broken Brand */}
                  <div className="tt-grid-item isotope-item creative">
                    <div className="ttgr-item-inner">
                      <div className="portfolio-grid-item">
                        <a
                          href={`${CDN_BASE}/graphic/broken-brand.png`}
                          target="_blank"
                          className="pgi-image-wrap"
                          data-cursor="View<br>Project"
                        >
                          <div className="pgi-image-holder cover-opacity-2">
                            <div className="pgi-image-inner anim-zoomin">
                              <figure className="pgi-image ttgr-height">
                                <img
                                  src={`${CDN_BASE}/graphic/broken-brand.png`}
                                  alt="Broken Brand"
                                />
                              </figure>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Item 3: Caminus */}
                  <div className="tt-grid-item isotope-item people">
                    <div className="ttgr-item-inner">
                      <div className="portfolio-grid-item">
                        <a
                          href={`${CDN_BASE}/graphic/caminus.png`}
                          target="_blank"
                          className="pgi-image-wrap"
                          data-cursor="View<br>Project"
                        >
                          <div className="pgi-image-holder cover-opacity-2">
                            <div className="pgi-image-inner anim-zoomin">
                              <figure className="pgi-image ttgr-height">
                                <img src={`${CDN_BASE}/graphic/caminus.png`} alt="Caminus" />
                              </figure>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Item 4: Cinedise Live 2 */}
                  <div className="tt-grid-item isotope-item creative">
                    <div className="ttgr-item-inner">
                      <div className="portfolio-grid-item">
                        <a
                          href={`${CDN_BASE}/graphic/cinedise-live-2.png`}
                          target="_blank"
                          className="pgi-image-wrap"
                          data-cursor="View<br>Project"
                        >
                          <div className="pgi-image-holder cover-opacity-2">
                            <div className="pgi-image-inner anim-zoomin">
                              <figure className="pgi-image ttgr-height">
                                <img
                                  src={`${CDN_BASE}/graphic/cinedise-live-2.png`}
                                  alt="Cinedise Live 2"
                                />
                              </figure>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Item 5: Cinedise Live */}
                  <div className="tt-grid-item isotope-item people">
                    <div className="ttgr-item-inner">
                      <div className="portfolio-grid-item">
                        <a
                          href={`${CDN_BASE}/graphic/cinedise-live.png`}
                          target="_blank"
                          className="pgi-image-wrap"
                          data-cursor="View<br>Project"
                        >
                          <div className="pgi-image-holder cover-opacity-2">
                            <div className="pgi-image-inner anim-zoomin">
                              <figure className="pgi-image ttgr-height">
                                <img
                                  src={`${CDN_BASE}/graphic/cinedise-live.png`}
                                  alt="Cinedise Live"
                                />
                              </figure>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Item 6: Infatuated */}
                  <div className="tt-grid-item isotope-item creative">
                    <div className="ttgr-item-inner">
                      <div className="portfolio-grid-item">
                        <a
                          href={`${CDN_BASE}/graphic/infatuated.png`}
                          target="_blank"
                          className="pgi-image-wrap"
                          data-cursor="View<br>Project"
                        >
                          <div className="pgi-image-holder cover-opacity-2">
                            <div className="pgi-image-inner anim-zoomin">
                              <figure className="pgi-image ttgr-height">
                                <img src={`${CDN_BASE}/graphic/infatuated.png`} alt="Infatuated" />
                              </figure>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Item 7: Interlude */}
                  <div className="tt-grid-item isotope-item people">
                    <div className="ttgr-item-inner">
                      <div className="portfolio-grid-item">
                        <a
                          href={`${CDN_BASE}/graphic/interlude.jpg`}
                          target="_blank"
                          className="pgi-image-wrap"
                          data-cursor="View<br>Project"
                        >
                          <div className="pgi-image-holder cover-opacity-2">
                            <div className="pgi-image-inner anim-zoomin">
                              <figure className="pgi-image ttgr-height">
                                <img src={`${CDN_BASE}/graphic/interlude.jpg`} alt="Interlude" />
                              </figure>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Item 8: Paper Cuts */}
                  <div className="tt-grid-item isotope-item creative">
                    <div className="ttgr-item-inner">
                      <div className="portfolio-grid-item">
                        <a
                          href={`${CDN_BASE}/graphic/paper-cuts.png`}
                          target="_blank"
                          className="pgi-image-wrap"
                          data-cursor="View<br>Project"
                        >
                          <div className="pgi-image-holder cover-opacity-2">
                            <div className="pgi-image-inner anim-zoomin">
                              <figure className="pgi-image ttgr-height">
                                <img src={`${CDN_BASE}/graphic/paper-cuts.png`} alt="Paper Cuts" />
                              </figure>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Item 9: Saras Mercer */}
                  <div className="tt-grid-item isotope-item people">
                    <div className="ttgr-item-inner">
                      <div className="portfolio-grid-item">
                        <a
                          href={`${CDN_BASE}/graphic/saras-mercer.jpg`}
                          target="_blank"
                          className="pgi-image-wrap"
                          data-cursor="View<br>Project"
                        >
                          <div className="pgi-image-holder cover-opacity-2">
                            <div className="pgi-image-inner anim-zoomin">
                              <figure className="pgi-image ttgr-height">
                                <img
                                  src={`${CDN_BASE}/graphic/saras-mercer.jpg`}
                                  alt="Saras Mercer"
                                />
                              </figure>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Item 10: Send Noods */}
                  <div className="tt-grid-item isotope-item creative">
                    <div className="ttgr-item-inner">
                      <div className="portfolio-grid-item">
                        <a
                          href={`${CDN_BASE}/graphic/send-noods.png`}
                          target="_blank"
                          className="pgi-image-wrap"
                          data-cursor="View<br>Project"
                        >
                          <div className="pgi-image-holder cover-opacity-2">
                            <div className="pgi-image-inner anim-zoomin">
                              <figure className="pgi-image ttgr-height">
                                <img src={`${CDN_BASE}/graphic/send-noods.png`} alt="Send Noods" />
                              </figure>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Item 11: Synx */}
                  <div className="tt-grid-item isotope-item people">
                    <div className="ttgr-item-inner">
                      <div className="portfolio-grid-item">
                        <a
                          href={`${CDN_BASE}/graphic/synx.png`}
                          target="_blank"
                          className="pgi-image-wrap"
                          data-cursor="View<br>Project"
                        >
                          <div className="pgi-image-holder cover-opacity-2">
                            <div className="pgi-image-inner anim-zoomin">
                              <figure className="pgi-image ttgr-height">
                                <img src={`${CDN_BASE}/graphic/synx.png`} alt="Synx" />
                              </figure>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Item 12: Unequals Red */}
                  <div className="tt-grid-item isotope-item creative">
                    <div className="ttgr-item-inner">
                      <div className="portfolio-grid-item">
                        <a
                          href={`${CDN_BASE}/graphic/unequals-red.png`}
                          target="_blank"
                          className="pgi-image-wrap"
                          data-cursor="View<br>Project"
                        >
                          <div className="pgi-image-holder cover-opacity-2">
                            <div className="pgi-image-inner anim-zoomin">
                              <figure className="pgi-image ttgr-height">
                                <img
                                  src={`${CDN_BASE}/graphic/unequals-red.png`}
                                  alt="Unequals Red"
                                />
                              </figure>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <NextCategoryNav
          href="https://brkn.me/web"
          categoryName="UI/UX"
          thumbnailUrl={`${CDN_BASE}/category-thumbnails/category-9.jpg`}
        />
      </div>
    </>
  );
}
