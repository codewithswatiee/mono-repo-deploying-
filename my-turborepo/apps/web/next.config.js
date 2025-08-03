/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
    turbo: {
      resolveExtensions: ['.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
    },
  },
  transpilePackages: ['@repo/ui', '@repo/db'],
};

export default nextConfig;
