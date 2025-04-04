'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

interface PulseBackgroundProps {
  children: React.ReactNode;
  scaleStates?: [number, number, number];
  opacityStates?: [number, number, number];
  duration?: number;
  className?: string;
  bgColor?: string;
}

const PulseBackground = ({
  children,
  className,
  scaleStates = [0.9, 1.25, 0.9],
  opacityStates = [0.3, 0.1, 0.3],
  duration = 1,
  bgColor = 'bg-red-500',
}: PulseBackgroundProps) => {
  return (
    <div className={cn('relative', className)}>
      <motion.div
        className={cn('absolute inset-0 rounded-full blur-[25px]', bgColor)}
        animate={{
          scale: scaleStates,
          opacity: opacityStates,
        }}
        transition={{
          duration: duration,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeOut',
        }}
      />
      {children}
    </div>
  );
};

export default PulseBackground;
