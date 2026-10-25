import type { NextConfig } from 'next';
import path from 'path';
import { fileURLToPath } from 'url';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Keep tracing inside this package when other lockfiles exist under /workspace.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
