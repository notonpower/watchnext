// utils/platform.ts
import { Platform } from '@/types';

type LogoType = 'square' | 'full';

// プラットフォームのロゴ取得関数
export function getPlatformLogo(platform: Platform, type: LogoType): string {
  const basePath = '/images/platforms';
  
  switch (platform.name) {
    case 'Netflix':
      return `${basePath}/netflix-${type}.webp`;
    case 'Prime Video':
      return `${basePath}/prime-video-${type}.webp`;
    case 'U-NEXT':
      return `${basePath}/u-next-${type}.webp`;
    default:
      return `${basePath}/default-${type}.webp`;
  }
}

// 画像パス取得関数 - 修正
export function getImagePath(path: string): string {
  // もともとのパスをそのまま返す
  return path;
}

// タイトルからURLフレンドリーなIDを生成する関数
export function createShortId(title: string): string {
  return title
    .toLowerCase()
    .replace(/　/g, ' ')
    .replace(/[：:/]/g, '-')
    .replace(/[』』」］】｣）)/]/g, '')
    .replace(/[『『「［【｢（(]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[&,+()$~%.'":*?<>{}]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}