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
      fixed transform 
      bg-green-600 backdrop-blur-sm 
      text-white px-4 py-2 
      rounded-lg shadow-lg 
      flex items-center gap-2 
      whitespace-nowrap
      z-50
      transition-all duration-300
      ${show ? 'opacity-100' : 'opacity-0'}
      ${className}
    `}>
      <CheckCircleIcon className="h-5 w-5 text-white" />
      <p className="text-sm">{message}</p>
    </div>
  );
}