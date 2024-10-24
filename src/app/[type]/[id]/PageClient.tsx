'use client';

import Image from 'next/image';
import Link from 'next/link';  // この行を追加
import { useRouter } from 'next/navigation';
import { getPlatformLogo, getImagePath } from '@/utils/platform';
import { Header } from '@/components/Header';
import { ChevronLeftIcon, BookmarkIcon as BookmarkOutline } from '@heroicons/react/24/outline';
import { BookmarkIcon as BookmarkSolid } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';
import { Content } from '@/types';
import { Toast } from '@/components/Toast';
import data from '@/data/data.json';
interface PageClientProps {
  content: Content;
}

export function PageClient({ content }: PageClientProps) {
  const router = useRouter();
  const [isInMyList, setIsInMyList] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const myList = JSON.parse(localStorage.getItem('myList') || '[]');
    setIsInMyList(myList.some((item: Content) => item.title === content.title));
  }, [content.title]);

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    router.back();
  };

  const toggleMyList = () => {
    const myList = JSON.parse(localStorage.getItem('myList') || '[]');
    if (isInMyList) {
      const newList = myList.filter((item: Content) => item.title !== content.title);
      localStorage.setItem('myList', JSON.stringify(newList));
      setIsInMyList(false);
    } else {
      myList.push(content);
      localStorage.setItem('myList', JSON.stringify(myList));
      setIsInMyList(true);
    }
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white pt-16">
        <div className="absolute top-20 left-4 z-20">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors"
          >
            <ChevronLeftIcon className="w-5 h-5" />
            <span>Back</span>
          </button>
        </div>

        <div className="relative h-[70vh] w-full transition-all duration-700">
  <Image
    src={getImagePath(content.image)}
    alt={content.title}
    fill
    priority
    className="object-cover transition-transform duration-700 hover:scale-105"
  />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-10">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <h1 className="text-5xl font-bold mb-4">{content.title}</h1>
              <button
                onClick={toggleMyList}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                title={isInMyList ? "マイリストから削除" : "マイリストに追加"}
              >
                {isInMyList ? (
                  <BookmarkSolid className="w-6 h-6 text-yellow-500" />
                ) : (
                  <BookmarkOutline className="w-6 h-6" />
                )}
              </button>
            </div>
            <p className="text-2xl text-gray-300">
              総合ランキング #{content.rank}位
            </p>

            <div className="flex flex-wrap gap-4">
              {content.platforms.map((platform, index) => (
                <div 
                key={index}
                className="bg-black/40 backdrop-blur-sm rounded-lg p-4 flex items-center gap-4 border border-gray-800 transition-all duration-300 hover:bg-black/60 hover:border-gray-700"
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
  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 flex items-center gap-3 transition-all duration-300 hover:transform hover:scale-105"
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

      <Toast 
        show={showToast} 
        message={isInMyList ? "マイリストに追加しました" : "マイリストから削除しました"} 
      />
    </>
  );
}