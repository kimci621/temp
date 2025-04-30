'use client';
import { Button } from '@/components/ui/button';
import { SectionTag } from '@/components/ui/section-tag';
import { Skeleton } from '@/components/ui/skeleton';
import Typography from '@/components/ui/typography';
import { useApi } from '@/lib/hooks/use-api';
import { cn } from '@/lib/utils';
import type { NewsType } from '@/types/news';
import { useState, useEffect } from 'react';

interface AboutPageNewsProps {
  className?: string;
}

export const AboutPageNews = ({ className = '' }: AboutPageNewsProps) => {
  const response = useApi<NewsType[]>('/api/changelogs');
  const [news, setNews] = useState<NewsType[] | undefined>(undefined);

  useEffect(() => {
    if (response?.data) {
      setNews(response.data);
    }
  }, [response]);

  return (
    <section className={cn('flex flex-col items-center container-inner mx-auto', className)}>
      <SectionTag
        emoji="🔁"
        name="История обновлений"
        isLight
      />

      <Typography
        variant={'h1-medium'}
        className={'text-(--text-light) mt-[24px] md:mt-[10px] xl:mt-[24px] text-center'}
      >
        Узнайте, какие обновления мы добавили
      </Typography>

      {!news && (
        <div className={'flex flex-col w-full gap-1 md:gap-2 mt-10 xl:mt-20 mb-6 xl:mb-10'}>
          {Array.from({ length: 5 }).map((_, idx) => (
            <Skeleton
              key={idx.toString()}
              className="w-full h-[120px] rounded-xl"
            />
          ))}
        </div>
      )}

      {news && Array.isArray(news) && (
        <div className={'flex flex-col w-full gap-1 md:gap-2 mt-10 xl:mt-20 mb-6 xl:mb-10'}>
          {news.map((_, idx) => (
            <div
              key={_.id}
              className="w-full bg-(--fill-white) rounded-[12px] xl:rounded-[16px] px-4 py-2 xl:px-8 xl:py-4 flex flex-col gap-2 xl:gap-4"
            >
              <div className={'grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2 md:gap-10 xl:gap-20'}>
                <Typography
                  variant={'button'}
                  className={'text-[#606266] md:order-2'}
                >
                  {_.published_at.replaceAll('-', '.').split('.').reverse().join('.')}
                </Typography>

                <Typography
                  variant={'h4-medium'}
                  className={'text-[#303133] md:order-1'}
                >
                  {_.title}
                </Typography>
              </div>
              <Typography
                variant={'text'}
                className={'text-[#606266] line-clamp-2'}
              >
                {_.summary}
              </Typography>
            </div>
          ))}
        </div>
      )}

      <a
        href="https://huntlee.ru/main/static/faq"
        target="_blank"
        rel="noreferrer"
      >
        <Button
          variant={'secondary'}
          rel="noreferrer"
          className={'w-fit'}
        >
          Посмотреть все обновления
        </Button>
      </a>
    </section>
  );
};
