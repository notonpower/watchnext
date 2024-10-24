// utils/ranking.ts
import { Content, InputContent, PlatformData } from '@/types';
import { calculatePowerValue } from './powerValue';

function enrichContent(content: InputContent): Content {
  return {
    ...content,
    powerValue: calculatePowerValue(content.platforms),
    imageSource: content.imageSource || ""
  };
}

export function calculateOverallRankings(platformData: PlatformData) {
  // TV番組の総合ランキング計算
  const allTvShows = [
    ...platformData.netflix.tv_shows,
    ...platformData.primeVideo.tv_shows,
    ...platformData.unext.tv_shows
  ].map(enrichContent);  // ここでContentに変換
  
  // 映画の総合ランキング計算
  const allMovies = [
    ...platformData.netflix.movies,
    ...platformData.primeVideo.movies,
    ...platformData.unext.movies
  ].map(enrichContent);  // ここでContentに変換

  return {
    tv_shows: allTvShows.sort((a, b) => b.powerValue - a.powerValue).slice(0, 10),
    movies: allMovies.sort((a, b) => b.powerValue - a.powerValue).slice(0, 10)
  };
}