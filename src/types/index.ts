// src/types/index.ts
export interface Platform {
    name: string;
    rank: number;
    label?: string;
  }
  
  export interface Content {
    rank: number;
    title: string;
    powerValue: number;
    image: string;
    imageSource: string;
    platforms: Platform[];
  }
  
  export interface ContentSection {
    overall: Content[];
  }
  
  export interface ContentData {
    lastUpdated: string;
    nextUpdate: string;
    tv_shows: ContentSection;
    movies: ContentSection;
  }