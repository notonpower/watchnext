'use client';

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
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50">
      <div className={`bg-green-600 backdrop-blur-sm text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 ${show ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <CheckCircleIcon className="h-6 w-6 text-white" />
        <p>{message}</p>
      </div>
    </div>
  );
}