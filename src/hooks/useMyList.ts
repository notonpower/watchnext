// src/hooks/useMyList.ts
'use client';

import { useState, useEffect } from 'react';
import type { Content } from '@/types';
import { createShortId } from '@/utils/platform';

export function useMyList() {
  const [myList, setMyList] = useState<Content[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('myList');
    if (stored) {
      setMyList(JSON.parse(stored));
    }
  }, []);

  const addToMyList = (content: Content) => {
    const newList = [...myList, content];
    setMyList(newList);
    localStorage.setItem('myList', JSON.stringify(newList));
  };

  const removeFromMyList = (contentId: string) => {
    const newList = myList.filter(item => createShortId(item.title) !== contentId);
    setMyList(newList);
    localStorage.setItem('myList', JSON.stringify(newList));
  };

  const isInMyList = (contentId: string) => {
    return myList.some(item => createShortId(item.title) === contentId);
  };

  return { myList, addToMyList, removeFromMyList, isInMyList };
}