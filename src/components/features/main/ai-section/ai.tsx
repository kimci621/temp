import { SectionTag } from '@/components/ui/section-tag';
import Image from 'next/image';
import Typography from '@/components/ui/typography';
import { cn } from '@/lib/utils/cn';
import { AiLabels } from './ai-label';
import TypographyAnimated from '@/components/ui/typography-animated';
import PulseBackground from '@/components/features/animation/pulse-background';

export function MainAi() {
  return (
    <section className={'overflow-hidden flex flex-col gap-6 items-center py-10'}>
      <SectionTag
        emoji={'⚡️'}
        name={'Быстро. Качественно. Дешево. '}
        className={'mt-[64px] md:mt-[80px] xl:mt-[200px]'}
        isLight
      />

      <TypographyAnimated
        variant={'h1-medium'}
        className={'text-center text-(--text-light)'}
        animationAmount={0.2}
        animationDuration={0.75}
      >
        Наши ИИ-технологии <br />
        для вашего успеха
      </TypographyAnimated>

      <div className={cn('relative w-full flex justify-center mt-26 mb-16 md:mt-0 md:mb-0')}>
        <PulseBackground
          bgColor={'bg-[#CFD4D6]'}
          scaleStates={[0.65, 0.8, 0.65]}
          opacityStates={[0.9, 0.1, 0.9]}
          duration={3}
        >
          <Image
            src={'/images/warm-white-abstract-wavy-shape-toned.png'}
            alt="bg image"
            width={4032}
            height={4032}
            loading="lazy"
            quality={100}
            className={cn('w-full xl:max-w-[945px] scale-160 md:scale-100')}
          />
        </PulseBackground>

        <div className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'}>
          <PulseBackground
            bgColor={'bg-[#fff]'}
            scaleStates={[0.65, 1, 0.65]}
            opacityStates={[0.5, 0.1, 0.5]}
            duration={3}
          >
            <Image
              src={'/huntlee-logo-white.svg'}
              alt="bg image"
              width={106}
              height={106}
              loading="lazy"
              quality={100}
              className={cn('size-[120px]')}
            />
          </PulseBackground>
        </div>

        <div className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full xl:max-w-[945px]'}>
          <AiLabels />
        </div>
      </div>
    </section>
  );
}
