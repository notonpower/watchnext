// src/utils/platform.ts
import { Platform } from '@/types';

export const getPlatformLogo = (platform: Platform, type: 'square' | 'full' = 'square') => {
  const suffix = type === 'square' ? '_square' : '_full';
  
  switch (platform.name) {
    case "Netflix":
      return `/images/netflix${suffix}.webp`;
    case "Prime Video":
      return `/images/primevideo${suffix}.webp`;
    case "U-NEXT":
      return `/images/unext${suffix}.webp`;
    default:
      return "";
  }
};