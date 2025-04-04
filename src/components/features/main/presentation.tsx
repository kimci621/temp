import Autoplay from 'embla-carousel-autoplay';
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Typography from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { LazyVideo } from '@/components/ui/lazy-video';
import Image from 'next/image';
import { MainPagePromoBackground } from '@/components/ui/main-page-promo-background';
import Link from 'next/link';
import { SectionTag } from '@/components/ui/section-tag';
import TypographyAnimated from '@/components/ui/typography-animated';
import RevealFromDirection from '../animation/reveal-from-direction';

export function MainPresentation() {
  const carouselItems = [
    {
      emoji: '🔥',
      text: 'До 30% быстрее закрытие вакансий',
    },
    {
      emoji: '📊',
      text: 'Аналитика и отчёты в пару кликов',
    },
    {
      emoji: '🤝',
      text: 'Идеально для малого и среднего бизнеса',
    },
  ];
  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <div className={'flex flex-col justify-center items-center overflow-hidden relative'}>
      <RevealFromDirection
        direction={'top'}
        delay={0.5}
        duration={0.5}
        isOnce={true}
      >
        <Carousel plugins={[plugin.current]}>
          <CarouselContent className={'w-[306px] xl:w-[400px]'}>
            {carouselItems.map((c, idx) => (
              <CarouselItem
                key={idx.toString()}
                className={'w-[306px] xl:w-[400px] flex items-center justify-center'}
              >
                <SectionTag
                  emoji={c.emoji}
                  name={c.text}
                  isLight
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </RevealFromDirection>

      <div className={'flex flex-col gap-10 max-w-[660px] mt-6 xl:mt-10'}>
        <TypographyAnimated
          variant={'h1-bold'}
          animationAmount={0.2}
          animationDuration={0.75}
        >
          <p className={'text-(--active-green) text-center'}>Новый стандарт</p>
          <p className={'text-(--active-dark) text-center'}>автоматизации подбора персонала</p>
        </TypographyAnimated>

        <TypographyAnimated
          variant={'h4-medium'}
          animationAmount={0.2}
          animationDuration={0.75}
          className={'text-(--text-light) text-center'}
        >
          ИИ технологии и гибкие настройки:
          <br />
          <span className={'text-(--active-dark)'}>находите лучших</span> быстро и с меньшими затратами
        </TypographyAnimated>
      </div>

      <Link
        href={'https://t.me/Huntlee_your_bot?start=start'}
        className={'mt-10 '}
      >
        <RevealFromDirection
          direction={'bottom'}
          delay={0.5}
          duration={0.5}
          isOnce={true}
        >
          <Button
            variant={'secondary'}
            className={'!pl-0.5'}
          >
            <Typography
              variant={'button'}
              className={'text-(--active-dark)'}
            >
              <article className={'flex items-center gap-3'}>
                <div className={'tg-bg-color rounded-lg w-8 xl:w-10 h-8 xl:h-10 flex items-center justify-center'}>
                  <Image
                    src={'/tg-icon.svg'}
                    alt={'telegram icon'}
                    width={40}
                    height={40}
                  />
                </div>

                <span>Получить подарок и ускорить найм</span>
              </article>
            </Typography>
          </Button>
        </RevealFromDirection>
      </Link>

      <div className={'mt-20 xl:mt-32 w-[calc(100%-30px)] md:w-[calc(100%-70px)] xl:w-[calc(100%-520px)]'}>
        <RevealFromDirection
          direction={'bottom'}
          delay={0.1}
          duration={2}
          isOnce={true}
          slideDistance={200}
        >
          <div className={'bg-(--fill-white) px-2 pt-2 rounded-tl-xl rounded-tr-xl'}>
            <LazyVideo
              src="/videos/demo-video.mp4"
              type="video/mp4"
              width="640"
              height="360"
              autoPlay={true}
              loop={true}
              className={'w-full rounded-tl-xl rounded-tr-xl border border-(--fill-white)'}
            />
          </div>
        </RevealFromDirection>
      </div>

      <MainPagePromoBackground />
    </div>
  );
}
