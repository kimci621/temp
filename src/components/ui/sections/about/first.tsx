import { AboutPresentation } from '@/components/features/about/presentation';
import React from 'react';
import { AboutPageGrids } from '@/components/features/about/grids/slider';
import { AboutPageFirstSectionBackground } from './bg';

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
