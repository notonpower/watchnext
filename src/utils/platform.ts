import { Platform } from '@/types';

export function getPlatformLogo(platform: Platform, type: 'square' | 'full') {
  if (platform.name === 'Netflix') {
    return `/images/netflix-${type}.webp`;
  }
  if (platform.name === 'Prime Video') {
    return `/images/prime-video-${type}.webp`;
  }
  if (platform.name === 'U-NEXT') {
    return `/images/unext-${type}.webp`;
  }
  return '';
}

export function getImagePath(image: string) {
  return image;
}

export function createShortId(title: string) {
  return title;
}