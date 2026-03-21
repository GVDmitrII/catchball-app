import React from 'react';
import { motion } from 'framer-motion';

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-fuchsia-accent text-white hover:bg-[#c02055] focus:ring-fuchsia-accent shadow-md hover:shadow-lg",
    secondary: "bg-deep-navy text-white hover:bg-gray-800 focus:ring-deep-navy shadow-md",
    outline: "border-2 border-deep-navy text-deep-navy hover:bg-gray-50 focus:ring-deep-navy",
    ghost: "text-deep-navy hover:bg-gray-100 focus:ring-gray-200"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base min-h-[48px]", // Touch-friendly target size
    lg: "px-8 py-4 text-lg min-h-[56px]"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
