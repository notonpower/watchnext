// src/components/Header.tsx
import Image from 'next/image';
import Link from 'next/link';
import { getImagePath } from '@/utils/platform';
import { BookmarkIcon as BookmarkOutline } from '@heroicons/react/24/outline';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link href="/">
            <Image
              src={getImagePath('/images/logo_white.webp')}
              alt="Watch Next"
              width={160}
              height={53}
              className="object-contain"
            />
          </Link>
          <Link
            href="/mylist"
            className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <BookmarkOutline className="w-5 h-5" />
            <span>My List</span>
          </Link>
        </div>
      </div>
    </header>
  );
};