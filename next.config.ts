import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Hosts that may load the dev server (`preview portfolio` on the studio server).
  allowedDevOrigins: ['preview.cinedise.com', 'cinedise.persian-elnath.ts.net'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cinedise-video.s3.eu-north-1.amazonaws.com',
        pathname: '/public/**',
      },
    ],
  },
};

export default nextConfig;
