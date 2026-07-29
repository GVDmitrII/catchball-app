import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function GoldMedal({ children }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <span className="inline-flex items-center justify-center w-10 h-10 rounded-full">{children}</span>;
  }

  return (
    <motion.span
      className="inline-flex items-center justify-center w-10 h-10 rounded-full"
      animate={{
        boxShadow: [
          '0 0 0px 0px rgba(245,166,35,0)',
          '0 0 16px 6px rgba(245,166,35,0.55)',
          '0 0 0px 0px rgba(245,166,35,0)',
        ],
      }}
      transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.span>
  );
}
