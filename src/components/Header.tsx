import Image from 'next/image';
import Link from 'next/link';
import { getImagePath } from '@/utils/platform';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex items-center justify-center">
          <Link href="/">
            <Image
              src={getImagePath('/images/logo_white.webp')}
              alt="Watch Next"
              width={160}
              height={53}
              className="object-contain"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};