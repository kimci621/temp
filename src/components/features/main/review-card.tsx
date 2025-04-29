import Typography from '@/components/ui/typography';
import { cn } from '@/lib/utils/cn';
import type { Review } from '@/types/review';
import Image from 'next/image';
import React from 'react';

export const MainReviewCard = React.memo(function MainReviewCard({
  review,
  className,
  isActive = false,
}: {
  review: Review;
  className?: string;
  isActive: boolean;
}) {
  return (
    <div
      className={cn(
        'flex flex-col p-6 rounded-xl bg-(--fill-white) transition-all duration-300',
        !isActive && 'backdrop-blur-250px',
        className,
      )}
    >
      <Typography
        variant={'text'}
        className={cn('mb-6 md:mb-8 xl:mb-6', isActive ? 'text-(--text-light)' : 'text-(--text-light-gray)')}
      >
        {review.text}
      </Typography>

      <div className="flex gap-4 items-center justify-between">
        <article className="flex flex-col gap-1.5">
          <Typography
            variant={'h4-medium'}
            className={'text-(--text-light)'}
          >
            {review.name}
          </Typography>

          <Typography
            variant={'button'}
            className={'text-(--text-light-gray)'}
          >
            {`${review.position}, ${review.company}`}
          </Typography>
        </article>

        {review.logo && (
          <Image
            src={review.logo}
            alt={review.company}
            width={64}
            height={64}
            className={'size-16 rounded-lg'}
          />
        )}
      </div>
    </div>
  );
});
