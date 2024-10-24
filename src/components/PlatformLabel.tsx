// components/PlatformLabel.tsx
'use client';

import Image from 'next/image';
import { Platform } from '@/types';
import { motion } from 'framer-motion';
import { getPlatformLogo } from '@/utils/platform';  // このインポートが正しく動作するはずです

export function PlatformLabel({ platform }: { platform: Platform }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="flex items-center bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5 
                 border border-white/10 hover:border-white/20 transition-colors"
    >
      <Image
        src={getPlatformLogo(platform, 'square')}
        alt={platform.name}
        width={32}
        height={32}
        className="object-contain rounded-full"
      />
      <span className="text-white text-sm font-medium ml-2">
        {platform.label 
          ? <span className="text-yellow-400">Only on {platform.name}</span>
          : `#${platform.rank}`
        }
      </span>
    </motion.div>
  );
}