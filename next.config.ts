import type { NextConfig } from 'next';
import path from 'path';
import { fileURLToPath } from 'url';
import { securityHeaders } from './src/lib/security-headers';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Keep tracing inside this package when other lockfiles exist under /workspace.
  outputFileTracingRoot: path.join(__dirname),
  // Code-side safety net: collapse www -> apex with a single permanent (308)
  // redirect, preserving the path. The authoritative www redirect is the Vercel
  // domain setting (owner/console item); this guarantees apex-canonical behaviour
  // even if the app receives a www host.
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.rogerdhillon.com' }],
        destination: 'https://rogerdhillon.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
