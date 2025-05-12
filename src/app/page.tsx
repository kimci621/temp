'use client';

import { MainPresentation } from '@/components/features/main/presentation';
import { MainHelps } from '@/components/features/main/helps-section/helps';
import { MainFeatures } from '@/components/features/main/features';
import { MainRustore } from '@/components/features/main/rustore';
import { MainAi } from '@/components/features/main/ai-section/ai';
import { MainTariffs } from '@/components/features/main/tariffs';
import { MainNewLevel } from '@/components/features/main/new-level';
import { MainPartners } from '@/components/features/main/partners';
import Lenis from 'lenis';
import { useEffect, useRef } from 'react';

export default function Home() {
  const homePage = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && homePage.current) {
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
    <div
      className="w-full"
      ref={homePage}
    >
      <div className="container-full mx-auto">
        <div className={'w-full flex justify-center mt-[40px] md:mt-[64px] xl:mt-[92px]'}>
          <MainPresentation />
        </div>

        <div className={'bg-(--fill-dark-bg) py-[80px] xl:py-[200px] flex flex-col items-center is-dark-bg'}>
          <div className={'container-inner'}>
            <MainHelps />
          </div>

          <div className={'mt-[80px] xl:mt-[200px]'}>
            <MainFeatures />
          </div>

          <div className={'container-inner mx-auto md:px-4 mt-[80px] xl:mt-[200px]'}>
            <MainRustore />
          </div>
        </div>

        <div className={'mb-[40px] xl:mb-[80px]'}>
          <MainAi />
        </div>

        <div className={'container-inner mx-auto mb-[80px] md:mb-[140px] xl:mb-[200px]'}>
          <MainTariffs />
        </div>

        <div className={'mb-[40px] md:mb-[100px]'}>
          <MainNewLevel />
        </div>

        <div className={'mb-[40px] md:mb-[100px]'}>
          <MainPartners />
        </div>
      </div>
    </div>
  );
}
