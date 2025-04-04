'use client';

import type React from 'react';
import { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './button';
import { XIcon } from 'lucide-react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  position?: 'left' | 'right' | 'top' | 'bottom';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full' | '90%';
  children: React.ReactNode;
  title?: string;
  titleJsx?: React.ReactNode;
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  className?: string;
}

const DRAWER_POSITIONS = {
  left: 'left-0 top-0 bottom-0 h-full',
  right: 'right-0 top-0 bottom-0 h-full',
  top: 'top-0 left-0 right-0 w-full',
  bottom: 'bottom-0 left-0 right-0 w-full',
};

const DRAWER_ANIMATIONS = {
  left: {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
  },
  right: {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '100%', opacity: 0 },
  },
  top: {
    initial: { y: '-100%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: '-100%', opacity: 0 },
  },
  bottom: {
    initial: { y: '100%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: '100%', opacity: 0 },
  },
};

export function Drawer({
  isOpen,
  onClose,
  position = 'right',
  size = 'md',
  children,
  title,
  titleJsx,
  showCloseButton = true,
  closeOnOverlayClick = true,
  className = '',
}: DrawerProps) {
  //   const [isPending, startTransition] = useTransition();
  const drawerRef = useRef<HTMLDivElement | null>(null);

  // Handle drawer size
  const getSizeClass = () => {
    if (position === 'left' || position === 'right') {
      switch (size) {
        case 'sm':
          return 'w-64';
        case 'md':
          return 'w-80';
        case 'lg':
          return 'w-96';
        case 'xl':
          return 'w-1/3';
        case 'full':
          return 'w-full';
        case '90%':
          return 'w-[90vw]';
        default:
          return 'w-80';
      }
    }
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!e?.target) {
        return;
      }

      if (closeOnOverlayClick && drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        // startTransition(() => {
        onClose();
        // });
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, closeOnOverlayClick]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Drawer */}
          <motion.div
            ref={drawerRef}
            className={`fixed ${DRAWER_POSITIONS[position]} shadow-lg z-100 ${getSizeClass()} ${className}`}
            initial={DRAWER_ANIMATIONS[position].initial}
            animate={DRAWER_ANIMATIONS[position].animate}
            exit={DRAWER_ANIMATIONS[position].exit}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            <aside className="flex flex-col h-full overflow-hidden">
              {/* Header */}
              {(title || showCloseButton) && (
                <div className="flex items-center justify-between px-6 py-4">
                  {titleJsx && titleJsx}
                  {title && <h2 className="text-lg font-semibold text-text-light">{title}</h2>}
                  {showCloseButton && (
                    <Button
                      variant={'white'}
                      onClick={() => onClose()}
                      className={'text-(--text-light)'}
                      size={'icon'}
                    >
                      <XIcon />
                    </Button>
                  )}
                </div>
              )}

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">{children}</div>
            </aside>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Drawer;
