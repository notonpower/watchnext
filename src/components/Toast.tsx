// components/Toast.tsx
'use client';

import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

export function Toast({ 
  show, 
  message
}: { 
  show: boolean; 
  message: string;
}) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50
                     flex items-center gap-2 
                     bg-green-600/90 backdrop-blur-sm 
                     text-white px-4 py-2 
                     rounded-lg shadow-lg"
        >
          <CheckCircleIcon className="h-5 w-5" />
          <p className="text-sm whitespace-nowrap">{message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}