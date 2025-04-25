import React from 'react';
import { MainPagePromoBackground } from '@/components/ui/main-page-promo-background';
import { SectionTag } from '@/components/ui/section-tag';
import TypographyAnimated from '@/components/ui/typography-animated';
import RevealFromDirection from '../animation/reveal-from-direction';
import { cn } from '@/lib/utils/cn';

const AboutPresentation = React.memo(function AboutPresentation({ className }: { className?: string }) {
  return (
    <div className={cn('w-full flex flex-col gap-6 xl:gap-10 justify-center items-center relative', className)}>
      <RevealFromDirection
        direction={'top'}
        delay={0.5}
        duration={0.5}
        isOnce={true}
      >
        <SectionTag
          emoji={'🔥'}
          name={'Быстро. Качественно. Дешево.'}
          isLight
        />
      </RevealFromDirection>

      <TypographyAnimated
        variant={'h1-bold'}
        animationAmount={0.2}
        animationDuration={0.75}
      >
        <p className={'text-(--active-green) text-center'}>Huntlee:</p>
        <p className={'text-(--active-dark) text-center'}>
          CRM система для HR, <br />
          которую вы искали
        </p>
      </TypographyAnimated>

      <TypographyAnimated
        variant={'h4-medium'}
        animationAmount={0.2}
        animationDuration={0.75}
        className={'text-(--text-light) text-center'}
      >
        Простота, доступная цена и экономия времени
      </TypographyAnimated>
    </div>
  );
});

export { AboutPresentation };
