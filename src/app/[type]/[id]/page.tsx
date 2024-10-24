import { PageClient } from './PageClient';
import data from '@/data/data';  // .jsonを削除
import { createShortId } from '@/utils/platform';
import { Content } from '@/types';

interface PageProps {
  params: { type: string; id: string };
}

export function generateMetadata({ params }: PageProps) {
  const content = getPageContent(params.type, params.id);
  if (!content) {
    return {
      title: 'Not Found - Watch Next',
      description: 'Content not found',
    };
  }

  return {
    title: `${content.title} - Watch Next`,
    description: `${content.title}の視聴情報・ランキング - Power Value: ${content.powerValue}`,
  };
}

export function generateStaticParams() {
  const moviePaths = data.movies.overall.map((movie) => ({
    type: 'movie',
    id: createShortId(movie.title),
  }));

  const tvPaths = data.tv_shows.overall.map((show) => ({
    type: 'tv',
    id: createShortId(show.title),
  }));

  return [...moviePaths, ...tvPaths];
}

function getPageContent(contentType: string, contentId: string) {
  const content = contentType === 'movie' 
    ? data.movies.overall.find(item => 
        createShortId(item.title) === contentId)
    : data.tv_shows.overall.find(item => 
        createShortId(item.title) === contentId);
  
  return content;
}

export default function Page({ params }: PageProps) {
  const content = getPageContent(params.type, params.id);
  if (!content) return null;

  return <PageClient content={content} />;
}