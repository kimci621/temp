'use client';

import { aboutPageSlides } from '@/lib/db/about-slides';
import { cn } from '@/lib/utils';
import { AboutPageSlide } from './slide';
import { useEffect } from 'react';
import Lenis from 'lenis';

interface AboutPageSlidesProps {
  className?: string;
}

export function AboutPageSlides({ className = '' }: AboutPageSlidesProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lenis = new Lenis({
        autoRaf: true,
        lerp: 0.1,
        duration: 1.4,
        prevent: (node) => node.hasAttribute('data-lenis-prevent'),
      });

      return () => {
        lenis.destroy();
      };
    }
  }, []);
  return (
    <section className={cn('overflow-hidden', className)}>
      <div className={'container-inner mx-auto flex flex-col gap-20 xl:gap-25'}>
        {aboutPageSlides.map((slide, idx) => (
          <AboutPageSlide
            key={idx.toString()}
            slide={slide}
            className={'py-10 md:py-16 xl:py-25'}
          />
        ))}
      </div>
    </section>
  );
}
