'use client';

import { motion } from 'framer-motion';

const AnimationBlur = ({
  children,
  delay,
  duration,
  isOnce,
  amount,
}: {
  children?: React.ReactNode;
  delay?: number;
  duration?: number;
  isOnce?: boolean;
  amount?: number;
}) => {
  const animationVariants = {
    hidden: { opacity: 0, filter: 'blur(20px)' },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: duration || 0.5,
        delay: delay || 0.5,
        ease: 'easeOut',
      },
    },
  } as const;

  const currentVisibleVariant = {
    ...animationVariants.visible,
    transition: {
      duration: duration || 1,
      ease: 'easeOut',
    },
  };

  return (
    <motion.div
      variants={{ ...animationVariants, visible: currentVisibleVariant }}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: isOnce ?? false,
        amount: amount || 0.1,
      }}
    >
      <div>{children}</div>
    </motion.div>
  );
};

export default AnimationBlur;
