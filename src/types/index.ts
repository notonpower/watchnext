// types/index.ts
export type ContentType = 'movie' | 'tv';

export type PlatformName = 'Netflix' | 'Prime Video' | 'U-NEXT';

export interface Platform {
  name: PlatformName;
  rank: number;
  label?: string;
}

// ベースとなるコンテンツの型
export interface BaseContent {
  title: string;
  image: string;
  rank: number;
  contentType: ContentType;
  platforms: Platform[];
}

// 完全なコンテンツの型
export interface Content extends BaseContent {
  powerValue: number;
  imageSource: string;
}

// データ入力用のコンテンツ型
export interface InputContent extends BaseContent {
  powerValue?: number;
  imageSource?: string;
}

// プラットフォームデータの型を追加
export interface PlatformData {
  netflix: {
    tv_shows: InputContent[];
    movies: InputContent[];
  };
  primeVideo: {
    tv_shows: InputContent[];
    movies: InputContent[];
  };
  unext: {
    tv_shows: InputContent[];
    movies: InputContent[];
  };
}

// 各セクションのデータ構造
export interface ContentSection {
  overall: Content[];
  netflix: Content[];
  primeVideo: Content[];
  unext: Content[];
}

// 最終的なデータ構造
export interface ContentData {
  lastUpdated: string;
  nextUpdate: string;
  tv_shows: ContentSection;
  movies: ContentSection;
}