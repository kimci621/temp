'use client';

import TypographyAnimated from '@/components/ui/typography-animated';
import type { aboutPageSlides } from '@/lib/db/about-slides';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import AnimationBlur from '../../animation/blur';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { AboutPageSlidePreferences } from './preferences';
import { useMediaQuery } from '@/lib/hooks/use-media-query';

interface AboutPageSlideProps {
  slide: (typeof aboutPageSlides)[number];
  className?: string;
}

export function AboutPageSlide({ className = '', slide }: AboutPageSlideProps) {
  const el = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLImageElement>(null);
  const bgText = useRef<HTMLSpanElement>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  let slideScroller: any = undefined;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  let bgTextScroller: any = undefined;

  gsap.registerPlugin(ScrollTrigger);

  const setScrollTrigger = () => {
    if (!el.current || !img.current || isMobile) return;

    // Основной скроллер для контента
    slideScroller = ScrollTrigger.create({
      trigger: `.about-slide-${slide.order}`,
      pin: true,
      start: 'center center',
      end: `+=${el.current.offsetHeight - img.current.offsetHeight}`,
      markers: false,
    });

    // Скроллер для фонового текста с эффектом параллакса
    if (bgText.current) {
      bgTextScroller = ScrollTrigger.create({
        trigger: `.about-slide-${slide.order}`,
        start: 'center center',
        end: `+=${el.current.offsetHeight - img.current.offsetHeight}`,
        markers: false,
        onUpdate: (self) => {
          // Замедляем движение фонового текста
          gsap.to(bgText.current, {
            y: self.progress * 100 * -5,
            overwrite: true,
          });
        },
      });
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (isMobile) {
      if (slideScroller) slideScroller.kill();
      if (bgTextScroller) bgTextScroller.kill();
    } else {
      setScrollTrigger();
    }

    return () => {
      if (slideScroller) slideScroller.kill();
      if (bgTextScroller) bgTextScroller.kill();
    };
  }, [isMobile]);

  return (
    <article className={cn('flex flex-col gap-6 md:gap-8 xl:gap-11 relative', className)}>
      <TypographyAnimated
        variant={'h3-medium'}
        className={'text-[#DEDEDE] z-10'}
      >
        {slide.title}
      </TypographyAnimated>

      <div className={'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 xl:gap-20 w-full relative z-3'}>
        <div className={cn('w-full h-fit', `about-slide-${slide.order}`)}>
          <span
            ref={bgText}
            className={cn(
              'absolute right-0 md:left-[0] xl:left-[-168px] top-[300px] md:top-[50px] xl:top-[140px] -z-1',
              `about-bg-text about-bg-text-${slide.order}`,
            )}
          >
            0{slide.order}
          </span>

          <AnimationBlur isOnce>
            <Image
              ref={img}
              src={`/images/about-page-slides/${slide.image}`}
              alt={slide.title}
              width={600}
              height={344}
              quality={100}
              className={cn(
                'rounded-1 xl:rounded-2 object-contain w-full md:w-[344px] xl:w-[600px] h-fit md:h-[196px] xl:h-[344px]',
                'transition-all ease-in-out duration-500',
              )}
            />
          </AnimationBlur>
        </div>

        <div
          ref={el}
          className={'grid h-fit z-2'}
        >
          {slide.firstItemsTitle && (
            <TypographyAnimated
              variant={'h3-medium'}
              className={'text-[#8F8F8F] mb-3 md:mb-4 xl:mb-6'}
            >
              {slide.firstItemsTitle}
            </TypographyAnimated>
          )}

          {slide?.firstItems?.length && (
            <AboutPageSlidePreferences
              slideItems={slide.firstItems}
              numberColor={slide.numberColor}
            />
          )}

          {slide.secondItemsTitle && (
            <TypographyAnimated
              variant={'h3-medium'}
              className={'text-[#8F8F8F] mb-3 md:mb-4 xl:mb-6'}
            >
              {slide.secondItemsTitle}
            </TypographyAnimated>
          )}

          {slide?.secondItems?.length && (
            <AboutPageSlidePreferences
              slideItems={slide.secondItems}
              numberColor={slide.numberColor}
            />
          )}
        </div>
      </div>

      <div
        className={cn(
          'z-0 absolute -left-1/2 top-[150%] -translate-y-1/2 -translate-x-[25%] ',
          'about-ellipse-bg',
          `about-ellipse-bg-${slide.order}`,
        )}
      />
    </article>
  );
}
