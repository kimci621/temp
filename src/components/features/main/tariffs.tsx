import { SectionTag } from '@/components/ui/section-tag';
import { TariffCard } from '@/components/ui/tariff-card';
import Typography from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import TypographyAnimated from '@/components/ui/typography-animated';
import dynamic from 'next/dynamic';

const DynamicDemoDialog = dynamic(() => import('../get-demo-dialog').then((c) => c.GetDemoDialog), {});

export function MainTariffs() {
  return (
    <section
      id={'tariffs-section'}
      className={'flex flex-col items-center w-full'}
    >
      <SectionTag
        emoji={'🤝'}
        name={'Адаптируемся под ваш запрос'}
        className={'mb-6'}
        isLight
      />

      <TypographyAnimated
        variant={'h1-medium'}
        className={'text-center text-(--text-light) mb-10 xl:mb-20'}
        animationAmount={0.2}
        animationDuration={0.75}
      >
        Удобные тарифы под ваши задачи
      </TypographyAnimated>

      <div className={'grid grid-cols-1 md:grid-cols-2 gap-4 w-full'}>
        <TariffCard type={'free'} />
        <TariffCard type={'business'} />
      </div>

      <div className={'mt-10 xl:mt-20 w-full'}>
        <div
          className={
            'relative overflow-hidden rounded-2xl p-6 xl:pl-10 bg-[--fill-light-bg] shadow-[0px_18px_80px_0px_rgba(0,0,0,0.06),0px_4.021px_17.869px_0px_rgba(0,0,0,0.04),0px_1.197px_5.32px_0px_rgba(0,0,0,0.02)] z-10'
          }
        >
          <Typography
            variant={'h3-medium'}
            className={'text-(--text-light) mb-6'}
          >
            Не уверены,
            <br /> какой тариф выбрать?
          </Typography>

          <Typography
            variant={'text'}
            className={'text-(--text-light) mb-10 w-[244px] md:w-[357px] xl:w-[603px]'}
          >
            Свяжитесь с нами — мы поможем подобрать оптимальный вариант. Huntlee адаптируется к бизнесу любого масштаба
            — от фрилансеров до крупных корпораций.
          </Typography>

          <DynamicDemoDialog
            triggerButton={
              <Button>
                <Typography variant={'button'}>Подробнее о тарифах</Typography>
              </Button>
            }
          />

          <Image
            src={'/images/matte-white-render-of-question-mark.webp'}
            alt={'matte-white-render-of-question-mark'}
            width={4032}
            height={4032}
            quality={100}
            className={
              'absolute -bottom-[55%] md:-bottom-[85%] xl:-bottom-[115%] -right-[25%] md:-right-[25%] xl:-right-[22%] -z-1 size-[492px] md:size-[720px] xl:size-[1056px] object-contain rotate-[52.77deg]'
            }
          />
        </div>
      </div>
    </section>
  );
}
