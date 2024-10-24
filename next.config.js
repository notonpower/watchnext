/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/watchnext',
    assetPrefix: '/watchnext/',
    images: {
      unoptimized: true,
    },
  }
  
  module.exports = nextConfig