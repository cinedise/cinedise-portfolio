import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Hosts that may load the dev server (`preview portfolio` on the studio server).
  allowedDevOrigins: ['preview.cinedise.com', 'cinedise.persian-elnath.ts.net'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd2sujfb6uz40q4.cloudfront.net',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
