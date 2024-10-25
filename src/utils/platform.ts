import { Platform } from '@/types';

export function getPlatformLogo(platform: Platform, type: 'square' | 'full') {
  if (platform.name === 'Netflix') {
    return type === 'full' ? '/images/netflix_full.webp' : '/images/netflix_square.webp';
  }
  if (platform.name === 'Prime Video') {
    return type === 'full' ? '/images/primevideo_full.webp' : '/images/primevideo_square.webp';
  }
  if (platform.name === 'U-NEXT') {
    return type === 'full' ? '/images/unext_full.webp' : '/images/unext_square.webp';
  }
  return '';
}

export function getImagePath(image: string) {
  if (!image) return '';
  if (image.startsWith('/images/')) {
    return image;
  }
  return `/images${image}`;
}

export function createShortId(title: string) {
  return title;
}