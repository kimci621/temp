'use client';

import { motion } from 'framer-motion';

const RevealFromDirection = ({
  children,
  isOnce,
  delay,
  duration,
  direction,
  amount,
  slideDistance,
}: {
  children: React.ReactNode;
  isOnce?: boolean;
  delay?: number;
  amount?: number;
  duration?: number;
  direction: 'left' | 'right' | 'top' | 'bottom';
  slideDistance?: number;
}) => {
  const distance = slideDistance || 100;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: direction === 'top' ? -distance : direction === 'bottom' ? distance : 0,
        x: direction === 'left' ? -distance : direction === 'right' ? distance : 0,
      }}
      animate={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      transition={{
        duration: duration || 0.5,
        delay: delay || 0,
        ease: 'easeOut',
      }}
      viewport={{
        once: isOnce ?? false,
        amount: amount || 0.1,
      }}
    >
      {children}
    </motion.div>
  );
};

export default RevealFromDirection;
