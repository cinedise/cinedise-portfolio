import { Fragment } from 'react';
import Link from 'next/link';
import { CATEGORY_GRID_ITEMS } from '@/constants/categories';
import './ProjectGrid.css';

export default function ProjectGrid() {
  return (
    <div id="portfolio-grid">
      <div className="tt-grid ttgr-layout-2 ttgr-gap-2 ttgr-not-cropped">
        <div className="tt-grid-items-wrap isotope-items-wrap">
          {CATEGORY_GRID_ITEMS.map((project, index) => {
            const [primaryLink] = project.links;
            const [primaryImage, crossfadeImage] = project.images;
            const title = project.links.map((link) => link.label).join(' & ');

            return (
              <div key={index} className={`tt-grid-item isotope-item ${project.category}`}>
                <div className="ttgr-item-inner">
                  <div className="portfolio-grid-item">
                    <Link
                      href={primaryLink.href}
                      className="pgi-image-wrap"
                      rel="noopener"
                      aria-label={primaryLink.label}
                      data-cursor="View<br>Work"
                      target={primaryLink.external ? '_blank' : '_self'}
                    >
                      <div className="pgi-image-holder">
                        <div className="pgi-image-inner anim-zoomin">
                          <figure className="pgi-image ttgr-height">
                            <img src={primaryImage} alt={title} />
                            {crossfadeImage && (
                              <img className="pgi-image-crossfade" src={crossfadeImage} alt="" />
                            )}
                          </figure>
                        </div>
                      </div>
                    </Link>
                    <div className="pgi-caption">
                      <div className="pgi-caption-inner">
                        <h2 className="pgi-title">
                          {project.links.map((link, linkIndex) => (
                            <Fragment key={link.href}>
                              {linkIndex > 0 && ' & '}
                              <Link
                                href={link.href}
                                rel="noopener"
                                target={link.external ? '_blank' : '_self'}
                              >
                                {link.label}
                              </Link>
                            </Fragment>
                          ))}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
