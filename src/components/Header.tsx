// src/components/Header.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex items-center justify-center"> {/* 高さを16に設定 */}
          <Link href="/">
          <Image
  src="/images/logo_white.webp"
  alt="Watch Next"
  width={160}  // サイズを160pxに拡大
  height={53}  // アスペクト比を維持
  className="object-contain"
/>
          </Link>
        </div>
      </div>
    </header>
  );
};