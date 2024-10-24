// components/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Toast } from './Toast';

export function Header() {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleMyListClick = () => {
    // マイリストの処理
    setToastMessage('マイリストを確認します');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Watch Next
        </Link>
        <nav>
          <button
            onClick={handleMyListClick}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            マイリスト
          </button>
        </nav>
      </div>
      <Toast show={showToast} message={toastMessage} />
    </header>
  );
}