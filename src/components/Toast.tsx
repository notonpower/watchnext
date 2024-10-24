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
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-green-900/90 backdrop-blur-sm text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-fade-in-up">
        <CheckCircleIcon className="h-6 w-6 text-green-400" />
        <p>{message}</p>
      </div>
    </div>
  );
}