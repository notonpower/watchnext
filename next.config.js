/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/watchnext',
    assetPrefix: '/watchnext',
    images: {
      unoptimized: true,
    },
    // スタイル関連の設定を追加
    compiler: {
      removeConsole: process.env.NODE_ENV === 'production',
    },
    // Swiper用の設定
    webpack: (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': require('path').resolve(__dirname, 'src/'),
      };
      return config;
    },
  }
  
  module.exports = nextConfig