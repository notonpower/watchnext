'use client';

import { Fragment } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export function Toast({ 
  show, 
  message
}: { 
  show: boolean; 
  message: string;
}) {
  if (!show) return null;

  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-green-600/90 backdrop-blur-sm text-white px-8 py-4 rounded-lg shadow-lg flex items-center gap-4 animate-slide-in">
        <CheckCircleIcon className="h-8 w-8 text-white animate-bounce" />
        <p className="text-lg font-medium">{message}</p>
      </div>
    </div>
  );
}