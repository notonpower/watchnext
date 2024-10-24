import Image from 'next/image';
import Link from 'next/link';
import data from '@/data/data.json';
import { notFound } from 'next/navigation';
import { getPlatformLogo, createShortId, getImagePath } from '@/utils/platform';
import { Header } from '@/components/Header';

interface PageProps {
  params: { type: string; id: string };
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

function getPageContent(contentType: string, contentId: string) {
  const content = contentType === 'movie' 
    ? data.movies.overall.find(item => 
        createShortId(item.title) === contentId)
    : data.tv_shows.overall.find(item => 
        createShortId(item.title) === contentId);
  
  return content;
}

export default function Page(props: PageProps) {
  const contentType = props.params.type;
  const contentId = props.params.id;

  if (contentType !== 'movie' && contentType !== 'tv') {
    notFound();
  }

  const content = getPageContent(contentType, contentId);

  if (!content) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white pt-16">
        <div className="relative h-[70vh] w-full">
          <Image
            src={getImagePath(content.image)}
            alt={content.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-10">
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-5xl font-bold mb-4">{content.title}</h1>
              <p className="text-2xl text-gray-300">
                総合ランキング #{content.rank}位
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {content.platforms.map((platform, index) => (
                <div 
                  key={index}
                  className="bg-black/40 backdrop-blur-sm rounded-lg p-4 flex items-center gap-4 border border-gray-800"
                >
                  <Image
                    src={getPlatformLogo(platform, 'full')}
                    alt={platform.name}
                    width={140}
                    height={46}
                    className="object-contain"
                  />
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-sm">プラットフォーム内ランク</span>
                    <span className="text-2xl font-bold">
                      {'label' in platform && platform.label ? 'Only on' : `#${platform.rank}`}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-gray-800 mt-4">
              <h2 className="text-xl font-bold mb-2">Power Value</h2>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">{content.powerValue.toLocaleString()}</span>
                <span className="text-gray-400">points</span>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                ※ Power Valueは各プラットフォームの会員数とランキング順位から算出された指標です
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              {content.platforms.map((platform, index) => (
                <Link
                  key={index}
                  href="#"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 flex items-center gap-3 transition-colors"
                >
                  <Image
                    src={getPlatformLogo(platform, 'square')}
                    alt={platform.name}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                  <span>{platform.name}で視聴</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-12 pb-8">
          <p className="text-sm text-gray-500">
            データ更新日: {data.lastUpdated}
          </p>
        </div>
      </main>
    </>
  );
}