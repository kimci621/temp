import { AboutPresentation } from '@/components/features/about/presentation';
import React from 'react';
import Image from 'next/image';
import { AboutPageGrids } from '@/components/features/about/grids/slider';

const AboutPageFirstSectionBackground = React.memo(function AboutPageFirstSectionBackground() {
  return (
    <Image
      alt="liquid background"
      src="/images/optimized/blue-liquid/3d-abstract-light-blue-matte-shape-wavy-3.webp"
      width={1680}
      height={1380}
      quality={100}
      priority
      style={{
        objectFit: 'cover',
        zIndex: '-12',
      }}
      className={'absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 w-full h-[820px] md:h-[780px] xl:h-[888px]'}
    />
  );
});

const AboutPageFirstSection = React.memo(function AboutPageFirstSection() {
  return (
    <div className="relative">
      <AboutPageFirstSectionBackground />

      <div className={'w-full mt-[40px] md:mt-[64px] xl:mt-[92px] pb-[64px] md:pb-[80px] xl:pb-[100px]'}>
        <AboutPresentation className={'mb-10 md:mb-16 xl:mb-30 container-inner mx-auto'} />

        <AboutPageGrids className={'container-inner mx-auto'} />
      </div>
    </div>
  );
});

export { AboutPageFirstSection };
