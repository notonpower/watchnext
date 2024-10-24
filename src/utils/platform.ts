import { Platform } from '@/types';

export function getPlatformLogo(platform: Platform, type: 'square' | 'full') {
  if (platform.name === 'Netflix') {
    return type === 'square' ? '/netflix-square.webp' : '/netflix.webp';
  }
  if (platform.name === 'Prime Video') {
    return type === 'square' ? '/amazon-square.webp' : '/amazon.webp';
  }
  if (platform.name === 'U-NEXT') {
    return type === 'square' ? '/unext-square.webp' : '/unext.webp';
  }
  return '';
}

export function getImagePath(imageFileName: string) {
  return imageFileName;
}

export function createShortId(title: string) {
  // すでにdata.tsで定義されているIDをそのまま返す
  return title;
}