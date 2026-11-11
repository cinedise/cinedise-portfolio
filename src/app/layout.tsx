import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { brandingAssets } from '@/config/content';
import Script from 'next/script';
import { siteConfig } from '@/config/site';
import { SITE_DESCRIPTION } from '@/config/seo';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.company.url),
  title: 'Cinedise Studio | Film, VFX & Video Production in Mumbai',
  description: SITE_DESCRIPTION,
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Legacy CSS */}
        <link rel="stylesheet" href="/assets/vendor/normalize/normalize.min.css" />
        <link rel="stylesheet" href="/assets/vendor/fontawesome/css/fontawesome-all.min.css" />
        <link rel="stylesheet" href="/assets/vendor/swiper/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/vendor/lightgallery/css/lightgallery.min.css" />
        <link rel="stylesheet" href="/assets/css/helper.css" />
        <link rel="stylesheet" href="/assets/css/theme.css" />
      </head>
      <body
        id="body"
        className={`${spaceGrotesk.className} tt-transition tt-boxed tt-smooth-scroll tt-magic-cursor`}
        data-react-menu="true"
      >
        {children}
      </body>
    </html>
  );
}
