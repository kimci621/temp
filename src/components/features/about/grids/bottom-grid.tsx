import { cn } from '@/lib/utils';
import { memo } from 'react';
import type { BusinessCase } from '@/lib/consts/businessCases';
import Image from 'next/image';
import Typography from '@/components/ui/typography';
import RevealFromDirection from '../../animation/reveal-from-direction';

export const AboutPageGridsBottom = memo(function AboutPageGridsBottom({
  content,
  className,
}: { content: BusinessCase; className?: string }) {
  return (
    <div
      className={cn(
        'GridsBottomGradientElement',
        'w-full min-h-[126px] md:min-h-[118px] xl:min-h-[168px] h-fit',
        'relative py-3 px-3 md:py-4 md:px-4 xl:py-6 xl:px-10 rounded-[8px] xl:rounded-[10px] transition-all duration-300 ease-out',
        className,
      )}
    >
      <div
        key={content.id}
        className={'overflow-hidden flex flex-col gap-2 xl:gap-4 max-w-full md:max-w-[500px] xl:max-w-[800px]'}
      >
        <Typography
          variant={'h3-medium'}
          className={'text-(--fill-white)'}
        >
          {content.descriptionTitle}
        </Typography>

        <RevealFromDirection
          direction={'bottom'}
          delay={0}
          duration={0.3}
          isOnce={false}
        >
          <Typography
            variant={'text'}
            className={'text-(--fill-white)'}
          >
            {content.description}
          </Typography>
        </RevealFromDirection>
      </div>

      <Image
        src={'/images/green-3d-render-of-triangle.png'}
        alt={content.description}
        width={'352'}
        height={'257'}
        quality={100}
        className={
          'absolute top-0 -right-[130px] md:-right-[40px] xl:right-[20px] h-[50px] md:h-[180px] xl:h-[260px] z-1 object-contain'
        }
      />
    </div>
  );
});
