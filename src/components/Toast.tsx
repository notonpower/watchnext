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
    <div className={`bg-green-600 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 whitespace-nowrap ${show ? 'animate-fade-in' : 'animate-fade-out'}`}>
      <CheckCircleIcon className="h-5 w-5 text-white" />
      <p className="text-sm">{message}</p>
    </div>
  );
}