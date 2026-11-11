import ProjectGrid from '@/components/ProjectGrid';
import TeamGrid from '@/components/TeamGrid';
// import Brands from '@/components/Brands';
import ContactCTA from '@/components/ContactCTA';
import { CDN_BASE } from '@/config/content';
import './HomeHero.css';
import type { Metadata } from 'next';
import { pageMetadata, SITE_DESCRIPTION } from '@/config/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Cinedise Studio | Film, VFX & Video Production in Mumbai',
  description: SITE_DESCRIPTION,
  path: '/',
  image: `${CDN_BASE}/category-thumbnails/category-1.jpg`,
});

export default function Home() {
  return (
    <>
      {/* Page Header - Video */}
      <h1 className="sr-only">Cinedise Studio: film, VFX and video production in Mumbai</h1>
      <div
        id="page-header"
        className="home-hero ph-full ph-bg-image ph-image-shadow ph-image-cover-5 ph-content-parallax"
        style={{ height: '100vh' }}
      >
        <div className="page-header-inner tt-wrap" style={{ height: '100%' }}>
          <div className="ph-image">
            <div className="ph-image-inner">
              <video autoPlay muted loop playsInline className="ph-video" preload="metadata">
                <source src={`${CDN_BASE}/web.mp4`} type="video/mp4" />
              </video>
              <div className="home-hero-wordmark" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </div>

      <div id="work" className="work-section">
        {/* Works Section */}
        <div className="tt-section padding-top-xlg-150">
          <div className="tt-section-inner tt-wrap max-width-1700">
            <div className="tt-heading tt-heading-lg tt-heading-center margin-bottom-7-p anim-fadeinup">
              <h3 className="tt-heading-subtitle text-gray">Latest Projects</h3>
              <h2 className="tt-heading-title">Works</h2>
            </div>

            <ProjectGrid />
          </div>
        </div>

        {/* Team Section */}
        <div id="team" className="tt-section padding-top-xlg-150 padding-bottom-xlg-80">
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
