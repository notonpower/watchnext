import { Platform } from '@/types';

export function getPlatformLogo(platform: Platform, type: 'square' | 'full' = 'square') {
  const prefix = process.env.NODE_ENV === 'production' ? '/watchnext' : '';
  const suffix = type === 'square' ? '_square' : '_full';
  
  switch (platform.name) {
    case "Netflix":
      return `${prefix}/images/netflix${suffix}.webp`;
    case "Prime Video":
      return `${prefix}/images/primevideo${suffix}.webp`;
    case "U-NEXT":
      return `${prefix}/images/unext${suffix}.webp`;
    default:
      return "";
  }
}

export function createShortId(title: string): string {
  const str = title.toLowerCase();
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(36);
}

export function getImagePath(path: string) {
  const prefix = process.env.NODE_ENV === 'production' ? '/watchnext' : '';
  return `${prefix}${path}`;
}