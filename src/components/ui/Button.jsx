import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const PULSE_TRANSITION = { duration: 2.6, repeat: Infinity, ease: 'easeInOut' };
const PULSE_ANIMATE = {
  scale: [1, 1.03, 1],
  boxShadow: [
    '0 4px 24px rgba(233,30,140,0.25)',
    '0 4px 32px rgba(233,30,140,0.55)',
    '0 4px 24px rgba(233,30,140,0.25)',
  ],
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  pulse = false,
  ...props
}) {
  const prefersReducedMotion = useReducedMotion();
  const shouldPulse = pulse && !prefersReducedMotion;

  const baseStyles = "inline-flex items-center justify-center font-bold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-brand-magenta text-white hover:bg-[#c02055] focus:ring-brand-magenta shadow-md hover:shadow-lg",
    secondary: "bg-brand-dark text-white hover:bg-gray-800 focus:ring-brand-dark shadow-md",
    outline: "border-2 border-brand-dark text-brand-dark hover:bg-gray-50 focus:ring-brand-dark",
    ghost: "text-brand-dark hover:bg-gray-100 focus:ring-gray-200"
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
      animate={shouldPulse ? PULSE_ANIMATE : undefined}
      transition={shouldPulse ? PULSE_TRANSITION : undefined}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
