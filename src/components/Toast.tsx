// components/Toast.tsx
'use client';

import { CheckCircleIcon } from '@heroicons/react/24/outline';

export function Toast({ 
  show, 
  message,
  className = ""
}: { 
  show: boolean; 
  message: string;
  className?: string;
}) {
  if (!show) return null;

  return (
    <div className={`
      flex items-center gap-2 
      bg-green-600 backdrop-blur-sm 
      text-white px-4 py-2 
      rounded-lg shadow-lg 
      whitespace-nowrap
      transition-all duration-300 ease-in-out
      ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}
      ${className}
    `}>
      <CheckCircleIcon className="h-5 w-5 text-white" />
      <p className="text-sm">{message}</p>
    </div>
  );
}