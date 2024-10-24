'use client';

import { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import { getImagePath, createShortId } from '@/utils/platform';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import type { Content } from '@/types';

export default function MyListPage() {
  const [myList, setMyList] = useState<Content[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('myList');
    if (stored) {
      setMyList(JSON.parse(stored));
    }
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white pt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <Link 
              href="/"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeftIcon className="w-5 h-5" />
              <span>Back</span>
            </Link>
            <h1 className="text-3xl font-bold">マイリスト</h1>
          </div>

          {myList.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-gray-400">
              <p className="text-xl mb-4">マイリストは空です</p>
              <Link 
                href="/"
                className="text-sm hover:text-white transition-colors"
              >
                コンテンツを探す
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {myList.map((item) => (
                <Link
                  key={item.title}
                  href={`/${item.platforms.some(p => p.name === 'Netflix') ? 'tv' : 'movie'}/${createShortId(item.title)}`}
                  className="group"
                >
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={getImagePath(item.image)}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-lg font-bold">{item.title}</h3>
                        <p className="text-sm text-gray-300">Power Value: {item.powerValue.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}