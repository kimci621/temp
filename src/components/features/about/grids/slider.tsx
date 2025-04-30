'use client';

import { type BusinessCase, businessCases } from '@/lib/consts/businessCases';
import { cn } from '@/lib/utils';
import { memo, useState, useRef, useEffect } from 'react';
import AnimationBlur from '../../animation/blur';
import { SliderItem } from './item';
import { SliderContentItem } from './content';
import { AboutPageGridsBottom } from './bottom-grid';
import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useUiStore } from '@/lib/store/ui';

const AboutPageGrids = memo(function AboutPageGrids({ className }: { className?: string }) {
  const [activeCase, setActiveCase] = useState<BusinessCase>(businessCases[0]);
  const setAboutPageBgPath = useUiStore((state) => state.setAboutPageBgPath);

  const [api, setApi] = useState<CarouselApi>();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (activeCase) {
      setAboutPageBgPath({ path: activeCase.bgPath });
    }
  }, [activeCase]);
  return (
    <div className={cn('flex flex-col gap-6 xl:gap-10 justify-center items-center', className)}>
      <div
        className={cn(
          'hidden md:grid grid-cols-3 gap-1 xl:gap-2 p-1 xl:p-1.5 w-full',
          'rounded-[12px] xl:rounded-[16px] border border-(--border-light) bg-(--fill-white) ',
        )}
      >
        {businessCases.map((i) => (
          <SliderItem
            key={i.id}
            title={i.title}
            id={i.id}
            isActive={i.id === activeCase.id}
            className={'top-slider-item w-[220px] md:w-full h-[88px] md:h-full xl:h-[96px] shrink-0'}
            onClick={() => {
              setActiveCase(i);
            }}
          />
        ))}
      </div>

      <Carousel
        className={'md:hidden w-full bg-(--fill-white) p-1 rounded-[12px]'}
        opts={{ loop: false }}
        setApi={setApi}
      >
        <CarouselContent className="items-center gap-0">
          {businessCases.map((i, idx: number) => (
            <CarouselItem
              key={idx.toString()}
              className={'basis-[75%] h-full'}
            >
              <SliderItem
                key={i.id}
                title={i.title}
                id={i.id}
                isActive={i.id === activeCase.id}
                className={'h-[64px]'}
                onClick={() => {
                  setActiveCase(i);
                  api?.scrollTo(idx);
                }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div>
        {businessCases.map((i, idx) =>
          i.id === activeCase.id ? (
            <AnimationBlur
              key={i.id}
              duration={0.3}
              isOnce={true}
            >
              {
                <SliderContentItem
                  key={idx.toString()}
                  content={i}
                />
              }
            </AnimationBlur>
          ) : (
            <span key={i.id} />
          ),
        )}
      </div>

      <div className="w-full">
        <AnimationBlur
          duration={0.3}
          isOnce={true}
        >
          <AboutPageGridsBottom content={activeCase} />
        </AnimationBlur>
      </div>
    </div>
  );
});

export { AboutPageGrids };
