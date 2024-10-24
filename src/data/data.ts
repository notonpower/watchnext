// data/data.ts
import { Content, InputContent, ContentData, PlatformData, ContentSection } from '@/types';
import { netflixData } from './netflix';
import { primeVideoData } from './primevideo';
import { unextData } from './unext';
import { calculatePowerValue } from '@/utils/powerValue';
import { calculateOverallRankings } from '@/utils/ranking';

// 入力データを完全なContentに変換する関数
function enrichContent(content: InputContent): Content {
  return {
    ...content,
    powerValue: calculatePowerValue(content.platforms),
    imageSource: content.imageSource || ""
  };
}

const platformData: PlatformData = {
  netflix: netflixData,
  primeVideo: primeVideoData,
  unext: unextData
};

const metadata = {
  lastUpdated: "2024-10-14",
  nextUpdate: "2024-10-21"
};

const rankings = calculateOverallRankings(platformData);

const data: ContentData = {
  lastUpdated: metadata.lastUpdated,
  nextUpdate: metadata.nextUpdate,
  tv_shows: {
    overall: rankings.tv_shows,
    netflix: platformData.netflix.tv_shows.map(enrichContent),
    primeVideo: platformData.primeVideo.tv_shows.map(enrichContent),
    unext: platformData.unext.tv_shows.map(enrichContent)
  },
  movies: {
    overall: rankings.movies,
    netflix: platformData.netflix.movies.map(enrichContent),
    primeVideo: platformData.primeVideo.movies.map(enrichContent),
    unext: platformData.unext.movies.map(enrichContent)
  }
};

export default data;