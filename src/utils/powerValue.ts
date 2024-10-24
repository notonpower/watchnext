// utils/powerValue.ts
import { Platform, PlatformName } from '@/types';

export const PLATFORM_WEIGHTS: Record<PlatformName, number> = {
  'Netflix': 21.7,
  'U-NEXT': 15.0,
  'Prime Video': 12.9
};

export const RANK_WEIGHTS: Record<number, number> = {
  1: 100,
  2: 85,
  3: 72,
  4: 61,
  5: 52,
  6: 44,
  7: 37,
  8: 31,
  9: 26,
  10: 22
};

export function calculatePowerValue(platforms: Platform[]): number {
  return Math.round(
    platforms.reduce((total, platform) => {
      const platformScore = PLATFORM_WEIGHTS[platform.name];
      const rankScore = RANK_WEIGHTS[platform.rank];
      return total + (platformScore * rankScore);
    }, 0)
  );
}