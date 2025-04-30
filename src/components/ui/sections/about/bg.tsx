'use client';

import AnimationBlur from '@/components/features/animation/blur';
import { businessCases } from '@/lib/consts/businessCases';
import { useUiStore } from '@/lib/store/ui';
import React from 'react';
import Image from 'next/image';

export const AboutPageFirstSectionBackground = React.memo(function AboutPageFirstSectionBackground() {
  const aboutPageBgPath = useUiStore((state) => state.aboutPageBgPath);

  return (
    <div className={'absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 w-full'}>
      {businessCases.map(
        (i, idx) =>
          i.bgPath === aboutPageBgPath && (
            <AnimationBlur
              key={idx.toString()}
              isOnce
              duration={0.3}
            >
              <Image
                alt="liquid background"
                src={`/images/optimized/about-background/${i.bgPath}.webp`}
                width={1680}
                height={1380}
                quality={100}
                priority
                style={{
                  objectFit: 'cover',
                  zIndex: '-12',
                }}
                className={'w-full h-full'}
              />
            </AnimationBlur>
          ),
      )}
    </div>
  );
});
