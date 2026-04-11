import React from 'react';
import { motion } from 'framer-motion';

export function Card({ children, className = '', hoverable = false, ...props }) {
  const baseStyles = "bg-white rounded-btn-lg shadow-sm border border-gray-100 overflow-hidden";
  
  if (hoverable) {
    return (
      <motion.div
        whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
        className={`${baseStyles} transition-all duration-300 ${className}`}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={`${baseStyles} ${className}`} {...props}>
      {children}
    </div>
  );
}
