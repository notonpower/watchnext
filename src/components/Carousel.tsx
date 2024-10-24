'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { Content } from '@/types';
import { useEffect, useState } from 'react';
import { getPlatformLogo, createShortId, getImagePath } from '@/utils/platform';
import Link from 'next/link';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import SkeletonCard from './SkeletonCard';

export const Carousel = ({ items, sectionId }: { items: Content[]; sectionId: string }) => {
  const [mounted, setMounted] = useState(false);
  const [isStart, setIsStart] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const sortedItems = [...items].sort((a, b) => b.powerValue - a.powerValue);

  useEffect(() => {
    setMounted(true);
    // コンテンツの読み込みを模擬的に表現
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (!mounted) {
    return (
      <div className="flex gap-6 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="relative group/section">
      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={'auto'}
        className="w-full"
        navigation={{
          nextEl: `.swiper-button-next-${sectionId}`,
          prevEl: `.swiper-button-prev-${sectionId}`,
        }}
        onSlideChange={(swiper) => {
          setIsStart(swiper.isBeginning);
        }}
        breakpoints={{
          320: { slidesPerView: 1.1 },
          640: { slidesPerView: 1.8 },
          1024: { slidesPerView: 2.8 },
        }}
      >
        {isLoading ? (
          [...Array(3)].map((_, i) => (
            <SwiperSlide key={`skeleton-${i}`} className="w-[450px]">
              <SkeletonCard />
            </SwiperSlide>
          ))
        ) : (
          sortedItems.map((item, index) => (
            // 既存のSwiperSlideの内容はそのまま
            <SwiperSlide key={item.title} className="w-[450px]">
<Link 
  href={`/${item.contentType}/${createShortId(item.title)}`}
  className="block"
>
              <div className="relative group cursor-pointer">
                <div className="absolute top-2 left-2 z-10">
                  <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-2xl font-bold text-white">#{index + 1}</span>
                  </div>
                </div>
                <Image
                  src={getImagePath(item.image)}
                  alt={item.title}
                  width={450}
                  height={253}
                  className="rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                  {item.platforms.map((platform, pIndex) => (
                    <div 
                      key={pIndex} 
                      className="flex items-center bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5"
                    >
                      <Image
                        src={getPlatformLogo(platform, 'square')}
                        alt={platform.name}
                        width={32}
                        height={32}
                        className="object-contain rounded-full"
                      />
                      <span className="text-white text-sm font-medium ml-2">
                        {'label' in platform && platform.label ? 'Only on' : `#${platform.rank}`}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-300">Power Value: {item.powerValue.toLocaleString()}</p>
                </div>
              </div>
            </Link>
            </SwiperSlide>
          ))
        )}
      </Swiper>
      
      {/* 左矢印 */}
      <div className={`absolute -left-6 top-1/2 -translate-y-1/2 z-10 transition-opacity duration-300 ${isStart ? 'opacity-0' : 'opacity-100'}`}>
        <div className={`swiper-button-prev-${sectionId} flex items-center justify-center w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 transform hover:scale-110 cursor-pointer`}>
          <ChevronLeftIcon className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* 右矢印 */}
      <div className="absolute -right-6 top-1/2 -translate-y-1/2 z-10">
        <div className={`swiper-button-next-${sectionId} flex items-center justify-center w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 transform hover:scale-110 cursor-pointer`}>
          <ChevronRightIcon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
};