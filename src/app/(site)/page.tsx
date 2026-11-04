import ProjectGrid from '@/components/ProjectGrid';
import TeamGrid from '@/components/TeamGrid';
import Brands from '@/components/Brands';
import ContactCTA from '@/components/ContactCTA';
import { CDN_BASE } from '@/config/content';

export default function Home() {
  return (
    <>
      {/* Page Header - Video */}
      <div
        id="page-header"
        className="ph-full ph-bg-image ph-image-shadow ph-image-cover-5 ph-content-parallax"
        style={{ height: '100vh' }}
      >
        <div className="page-header-inner tt-wrap" style={{ height: '100%' }}>
          <div className="ph-image">
            <div className="ph-image-inner">
              <video autoPlay muted loop playsInline className="ph-video" preload="metadata">
                <source src={`${CDN_BASE}/web.mp4`} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      <div id="work" className="work-section">
        {/* Works Section */}
        <div
          id="work"
          className="tt-section padding-top-xlg-150"
          style={{ scrollMarginTop: '100px' }}
          data-offset="100"
        >
          <div className="tt-section-inner tt-wrap max-width-1700">
            <div className="tt-heading tt-heading-lg tt-heading-center margin-bottom-7-p anim-fadeinup">
              <h3 className="tt-heading-subtitle text-gray">Latest Projects</h3>
              <h2 className="tt-heading-title">Works</h2>
            </div>

            <ProjectGrid />
          </div>
        </div>

        {/* Team Section */}
        <div id="team" className="tt-section padding-top-xlg-150 padding-bottom-xlg-200">
          <div className="tt-section-inner tt-wrap max-width-1700">
            <div className="tt-heading tt-heading-lg tt-heading-center margin-bottom-7-p anim-fadeinup">
              <h2 className="tt-heading-title">THE OG FIVE</h2>
              <h3 className="tt-heading-subtitle text-gray">FIVE MINDS. ONE VISION.</h3>
            </div>

            <TeamGrid />
          </div>
        </div>

        {/* Brands Section */}
        {/* <Brands /> */}

        {/* Contact CTA */}
        <ContactCTA />
      </div>
    </>
  );
}
