// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',  // 静的エクスポート用
  basePath: '/watchnext',  // GitHubリポジトリ名
  images: {
    unoptimized: true,  // GitHub Pages用の設定
  },
}

export default nextConfig