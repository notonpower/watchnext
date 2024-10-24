// data/data.ts
import { Content, InputContent, ContentData, PlatformData } from '@/types';
import { netflixData } from './netflix';
import { primeVideoData } from './primevideo';
import { unextData } from './unext';
import { calculatePowerValue } from '@/utils/powerValue';

// 入力データを完全なContentに変換する関数
function enrichContent(content: InputContent): Content {
  const powerValue = calculatePowerValue(content.platforms);
  return {
    ...content,
    powerValue,
    imageSource: ""
  };
}

// 各プラットフォームデータの変換と型付け
const enrichedPlatformData = {
  netflix: {
    tv_shows: netflixData.tv_shows.map(enrichContent),
    movies: netflixData.movies.map(enrichContent)
  },
  primeVideo: {
    tv_shows: primeVideoData.tv_shows.map(enrichContent),
    movies: primeVideoData.movies.map(enrichContent)
  },
  unext: {
    tv_shows: unextData.tv_shows.map(enrichContent),
    movies: unextData.movies.map(enrichContent)
  }
};

// 総合ランキングの計算
function calculateOverallRankingsWithMerge() {
  function mergeContents(contents: Content[]): Map<string, Content> {
    const contentMap = new Map<string, Content>();

    contents.forEach(content => {
      if (contentMap.has(content.title)) {
        const existing = contentMap.get(content.title)!;
        const mergedPlatforms = [...existing.platforms, ...content.platforms];
        const newPowerValue = calculatePowerValue(mergedPlatforms);
        
        contentMap.set(content.title, {
          ...existing,
          platforms: mergedPlatforms,
          powerValue: newPowerValue
        });
      } else {
        contentMap.set(content.title, content);
      }
    });

    return contentMap;
  }

  // TV番組の総合ランキング
  const allTvShows = [
    ...enrichedPlatformData.netflix.tv_shows,
    ...enrichedPlatformData.primeVideo.tv_shows,
    ...enrichedPlatformData.unext.tv_shows
  ];
  const mergedTvShows = Array.from(mergeContents(allTvShows).values())
    .sort((a, b) => b.powerValue - a.powerValue)
    .slice(0, 10)
    .map((content, index) => ({
      ...content,
      rank: index + 1
    }));

  // 映画の総合ランキング
  const allMovies = [
    ...enrichedPlatformData.netflix.movies,
    ...enrichedPlatformData.primeVideo.movies,
    ...enrichedPlatformData.unext.movies
  ];
  const mergedMovies = Array.from(mergeContents(allMovies).values())
    .sort((a, b) => b.powerValue - a.powerValue)
    .slice(0, 10)
    .map((content, index) => ({
      ...content,
      rank: index + 1
    }));

  return {
    tv_shows: mergedTvShows,
    movies: mergedMovies
  };
}

const rankings = calculateOverallRankingsWithMerge();

// 最終的なデータ構造の構築
const data: ContentData = {
  lastUpdated: "2024-10-14",
  nextUpdate: "2024-10-21",
  tv_shows: {
    overall: rankings.tv_shows,
    netflix: enrichedPlatformData.netflix.tv_shows,
    primeVideo: enrichedPlatformData.primeVideo.tv_shows,
    unext: enrichedPlatformData.unext.tv_shows
  },
  movies: {
    overall: rankings.movies,
    netflix: enrichedPlatformData.netflix.movies,
    primeVideo: enrichedPlatformData.primeVideo.movies,
    unext: enrichedPlatformData.unext.movies
  }
};

// デバッグ用：総合ランキングの確認
console.log('TV Shows Overall Ranking:');
rankings.tv_shows.forEach(show => {
  console.log(`${show.rank}. ${show.title} (Power: ${show.powerValue})`);
  console.log('Platforms:', show.platforms.map(p => `${p.name}(#${p.rank})`).join(', '));
});

console.log('\nMovies Overall Ranking:');
rankings.movies.forEach(movie => {
  console.log(`${movie.rank}. ${movie.title} (Power: ${movie.powerValue})`);
  console.log('Platforms:', movie.platforms.map(p => `${p.name}(#${p.rank})`).join(', '));
});

export default data;