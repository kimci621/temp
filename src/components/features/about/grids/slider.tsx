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
import { AnimationOpacity } from '../../animation/opacity';
import Typography from '@/components/ui/typography';

const AboutPageGrids = memo(function AboutPageGrids({ className }: { className?: string }) {
  const [activeCase, setActiveCase] = useState<BusinessCase>(businessCases[0]);
  const setAboutPageBgPath = useUiStore((state) => state.setAboutPageBgPath);
  const tumbler = {
    'small-case': 'translate-x-[0%]',
    'medium-case': 'translate-x-[100%]',
    'large-case': 'translate-x-[calc(200%-12px)]',
  };
  const gradientClasses = {
    'small-case': 'about-slides-tumbler-gradient-1',
    'medium-case': 'about-slides-tumbler-gradient-2',
    'large-case': 'about-slides-tumbler-gradient-3',
  };

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
          'relative hidden md:grid grid-cols-3 gap-1 xl:gap-2 p-1 xl:p-1.5 w-full',
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

        <div
          className={cn(
            'w-1/3 h-[calc(100%-12px)] absolute -translate-y-1/2 rounded-[10px] xl:rounded-[10px] p-2 xl:p-4 flex items-center justify-center transition-all duration-500 ease-out border border-[#309E66]',
            'text-(--fill-white) text-[18px] font-[500] leading-[24px] md:text-[20px] md:font-[600] xl:text-[24px] xl:leading-[32px] text-center',
            'left-[6px] top-1/2',
            tumbler[activeCase.id],
            gradientClasses[activeCase.id],
          )}
        >
          <Typography variant={'h4-medium'}>{activeCase.title}</Typography>
        </div>
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
            <AnimationOpacity
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
            </AnimationOpacity>
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
