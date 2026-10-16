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

          <div
            className="explore-section"
            style={{
              position: 'absolute',
              top: '80%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              zIndex: 2,
              display: 'none',
            }}
          >
            <h1
              className="explore-text"
              style={{
                color: 'white',
                fontSize: '48px',
                marginBottom: '20px',
                fontWeight: 300,
              }}
            >
              Explore
            </h1>
            <a
              href="#work"
              className="scroll-down-btn"
              aria-label="Scroll to work section"
              style={{
                color: 'white',
                fontSize: '24px',
                textDecoration: 'none',
              }}
            >
              <i className="fas fa-chevron-down" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <a
          href="#work"
          className="scroll-down-circle"
          data-offset="30"
          aria-label="Scroll to work section"
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
              <text dy="30" style={{ fontSize: '40px' }}>
                <textPath xlinkHref="#textcircle">View Works - View Works -</textPath>
              </text>
            </svg>
          </div>
        </a>
      </div>

      {/* Page Header - Caption */}
      {/* Note: Original used duplicate id="page-header". Changed to class or just div to avoid ID conflict, though keeping classes for legacy JS. 
          Assuming legacy JS targets #page-header, having two might confuse it. 
          L330 in original was just another section. I'll use a unique ID but same classes. */}
      <div
        id="page-header-2"
        className="ph-full ph-cap-xlg ph-image-cover-2 ph-content-parallax bg-[#0a0a0a]"
      >
        <div className="page-header-inner tt-wrap">
          <div className="ph-caption">
            <h1
              className="ph-caption-title ph-appear max-width-1000"
              data-animate="fadeInUp"
              data-animate-delay="0.2"
            >
              We design everything you think of.
            </h1>
          </div>
        </div>
      </div>

      <div id="work" className="work-section">
        {/* Works Section */}
        <div
          id="work"
          className="tt-section bg-white-accent-3 padding-top-xlg-150 !bg-[#121212]"
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
        <div
          id="team"
          className="tt-section bg-white-accent-3 padding-top-xlg-150 padding-bottom-xlg-200 !bg-[#121212]"
        >
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
