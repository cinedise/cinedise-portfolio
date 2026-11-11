import { brandingAssets } from '@/config/content';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import Script from 'next/script';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <main id="body-inner">
      {/* Page transition */}
      <div id="page-transition">
        <div className="ptr-overlay"></div>
        <div className="ptr-preloader">
          <div className="ptr-prel-content">
            <img
              src={brandingAssets.preloaderLogo}
              className="ptr-prel-image tt-logo-light"
              alt="Cinedise Studio"
            />
          </div>
        </div>
      </div>

      {/* Magic cursor */}
      <div id="magic-cursor">
        <div id="ball"></div>
      </div>

      {/* Noise background */}
      <div className="bg-noise"></div>

      <div id="scroll-container">
        <Header />
        <PageTransition>
          <div id="content-wrap">
            {children}
            <Footer />
          </div>
        </PageTransition>
      </div>

      {/* Legacy Scripts - Loaded lazily or after interactive */}
      {/* jQuery is required for many legacy plugins. We load it before others. */}
      {/* Legacy Scripts */}
      <Script src="/assets/vendor/jquery/jquery.min.js" strategy="beforeInteractive" />
      <Script src="/assets/vendor/gsap/gsap.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/gsap/ScrollToPlugin.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/gsap/ScrollTrigger.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/smooth-scrollbar.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/swiper/js/swiper-bundle.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/isotope/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/isotope/isotope.pkgd.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/isotope/packery-mode.pkgd.min.js" strategy="afterInteractive" />
      <Script
        src="/assets/vendor/lightgallery/js/lightgallery-all.min.js"
        strategy="afterInteractive"
      />
      <Script src="/assets/vendor/jquery.mousewheel.min.js" strategy="afterInteractive" />

      {/* Theme JS - Must be loaded last */}
      <Script src="/assets/js/theme.js" strategy="lazyOnload" />
    </main>
  );
}
