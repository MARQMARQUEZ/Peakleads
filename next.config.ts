import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'peakleads.online',
        pathname: '/wp-content/uploads/**',
      },
    ],
  }
};

export default nextConfig;
