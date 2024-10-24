// src/components/Carousel.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { Content } from '@/types';
import { useEffect, useState } from 'react';
import { getPlatformLogo, createShortId } from '@/utils/platform';
import Link from 'next/link';

export const Carousel = ({ items }: { items: Content[] }) => {
  const [mounted, setMounted] = useState(false);
  const sortedItems = [...items].sort((a, b) => b.powerValue - a.powerValue);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={'auto'}
      className="w-full"
      breakpoints={{
        320: { slidesPerView: 1.1 },
        640: { slidesPerView: 1.8 },
        1024: { slidesPerView: 2.8 },
      }}
    >
      {sortedItems.map((item, index) => (
        <SwiperSlide key={item.title} className="w-[450px]">
          <Link 
            href={`/${item.platforms.some(p => p.name === 'Netflix') ? 'tv' : 'movie'}/${createShortId(item.title)}`}
            className="block"
          >
            <div className="relative group cursor-pointer">
              <div className="absolute top-2 left-2 z-10">
                <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-2xl font-bold text-white">#{index + 1}</span>
                </div>
              </div>
              <Image
                src={item.image}
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
      ))}
    </Swiper>
  );
};