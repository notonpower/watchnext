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

// 画像パス取得関数
export function getImagePath(path: string): string {
  if (path.startsWith('http')) {
    return path;
  }
  return path;
}

// タイトルからURLフレンドリーなIDを生成する関数
export function createShortId(title: string): string {
  return title
    .toLowerCase()
    // 全角スペースを半角に
    .replace(/　/g, ' ')
    // 特殊文字を削除または変換
    .replace(/[：:/]/g, '-')
    .replace(/[』』」］】｣）)/]/g, '')
    .replace(/[『『「［【｢（(]/g, '')
    // 空白をハイフンに
    .replace(/\s+/g, '-')
    // 日本語をローマ字に変換する必要がある場合は、別途ライブラリを使用
    // 不要な記号を削除
    .replace(/[&,+()$~%.'":*?<>{}]/g, '')
    // 複数のハイフンを1つに
    .replace(/-+/g, '-')
    // 先頭と末尾のハイフンを削除
    .replace(/^-+|-+$/g, '');
}