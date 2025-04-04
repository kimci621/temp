import { SectionTag } from '@/components/ui/section-tag';
import { useApi } from '@/lib/hooks/use-api';
import { MainReviewCard } from './review-card';
import type { Review } from '@/types/review';
import { useEffect, useState } from 'react';
import type { CarouselApi } from '@/components/ui/carousel';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils/cn';
import TypographyAnimated from '@/components/ui/typography-animated';

export function MainNewLevel() {
  const response = useApi<Review[]>('/api/reviews');
  const [reviews, setReviews] = useState<Review[]>([]);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (response?.data) {
      setReviews(response.data);
    }
  }, [response]);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  function handleNext() {
    api?.scrollNext();
  }

  function handleReviewClick(index: number) {
    setCurrent(index + 1);
    api?.scrollTo(index);
  }

  return (
    <section className={'flex flex-col items-center w-full'}>
      <SectionTag
        emoji={'💬'}
        name={'Отзывы говорят за нас'}
        className={'mb-6'}
        isLight
      />
      <TypographyAnimated
        variant={'h1-medium'}
        className={'text-center text-(--text-light) mb-10 md:mb-20'}
        animationAmount={0.2}
        animationDuration={0.75}
      >
        С нами ваш найм
        <br />
        выйдет на новый уровень!
      </TypographyAnimated>

      <div className={'flex justify-center mb-10 xl:mb-20'}>
        <div className={'flex items-center gap-2'}>
          {reviews.map((review: Review, index: number) => (
            <Image
              key={index.toString()}
              src={review.logo}
              alt={review.company}
              width={48}
              height={48}
              className={cn(
                'size-11 border rounded-md cursor-pointer',
                index + 1 === current ? 'border-(--active-green)' : 'border-(--border-light)',
              )}
              onClick={() => handleReviewClick(index)}
            />
          ))}
        </div>

        <Button
          variant={'secondary'}
          onClick={handleNext}
          size={'icon'}
          className={'!w-[88px] hidden md:flex ml-6'}
        >
          <ArrowRightIcon className={'w-8 h-8'} />
        </Button>
      </div>

      {reviews && (
        <Carousel
          className={'w-full'}
          opts={{ loop: true }}
          setApi={setApi}
        >
          <CarouselContent className="gap-4 items-center">
            {reviews.map((review: Review, index: number) => (
              <CarouselItem
                key={index.toString()}
                className={'basis-[80%] w-[320px] md:basis-1/2 md:w-[463px] xl:basis-1/4 xl:w-[463px]'}
              >
                <MainReviewCard
                  review={review}
                  isActive={index + 1 === current}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      )}
    </section>
  );
}
