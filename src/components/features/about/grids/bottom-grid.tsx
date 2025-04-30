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
        'rounded-[16px]',
        'w-full min-h-[126px] md:min-h-[118px] xl:min-h-[168px] h-fit',
        'relative rounded-[8px] xl:rounded-[10px] transition-all duration-300 ease-out',
        className,
      )}
      style={{
        ...content.descriptionStyles,
      }}
    >
      <div
        key={content.id}
        className={
          'overflow-hidden flex flex-col gap-2 xl:gap-4 py-3 px-3 md:py-4 md:px-4 xl:py-6 xl:px-10 max-w-[550px]'
        }
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
        src={`/images/${content.descriptionBgPath}.png`}
        alt={content.description}
        width={'628'}
        height={'168'}
        quality={100}
        className={'hidden xl:block absolute top-0 right-0 h-full z-1 rounded-tr-[10px] rounded-br-[10px]'}
      />
    </div>
  );
});
