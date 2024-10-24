/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/watchnext',
    assetPrefix: '/watchnext/',
    images: {
      unoptimized: true,
    },
    // distDir: 'dist', // 必要に応じて
  }
  
  if (process.env.NODE_ENV === 'production') {
    nextConfig.output = 'export';
  }
  
  module.exports = nextConfig