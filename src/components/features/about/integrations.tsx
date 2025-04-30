'use client';

import Typography from '@/components/ui/typography';
import { cn } from '@/lib/utils/cn';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import dynamic from 'next/dynamic';
const DynamicDemoDialog = dynamic(
  () => import('@/components/features/get-demo-dialog').then((c) => c.GetDemoDialog),
  {},
);

interface IntegrationsProps {
  className?: string;
}

interface CaseProps {
  className?: string;
  children: React.ReactNode;
}

const Case = ({ children, className = '' }: CaseProps) => {
  return (
    <div
      className={cn(
        'relative flex flex-col gap-2 xl:gap-6 px-4 py-4 md:px-10 md:py-6 xl:px-20 xl:py-10 rounded-[16px] overflow-hidden',
        className,
      )}
    >
      {children}
    </div>
  );
};

export const AboutPageIntegrations = ({ className = '' }: IntegrationsProps) => {
  return (
    <div className={cn('w-full flex flex-col gap-1 md:gap-2 xl:gap-4', className)}>
      <Case className={'bg-[#2772FD]'}>
        <Typography
          variant="h3-medium"
          className={'text-(--fill-white) z-4'}
        >
          Polina AI
        </Typography>

        <Typography
          variant="text"
          className={'text-(--fill-white) z-4 w-[calc(100%-100px)] md:w-full md:max-w-[384px] xl:max-w-[603px]'}
        >
          ИИ-помощник для рекрутинга, который решает задачу автоматизации поиска, оценки и отбора кандидатов. Сокращает
          время на подбор в 8 раз
        </Typography>

        <Image
          src={'/images/polina-ai.png'}
          alt={'Polina AI'}
          width={'200'}
          height={'264'}
          quality={100}
          className={'absolute z-3 object-contain right-[-60px] md:right-[125px] bottom-0 h-[calc(100%)]'}
        />

        <Image
          src={'/images/polina-ai-square.png'}
          alt={'Polina AI рамка'}
          width={'193'}
          height={'194'}
          quality={100}
          className={
            'absolute z-2 object-contain right-[-70px] md:right-[125px] top-1/2 -translate-y-1/2 h-[calc(100%-32px)]'
          }
        />

        <Image
          src={'/images/polina-ai-bg.png'}
          alt={'Polina AI - фон'}
          width={'1168'}
          height={'656'}
          quality={100}
          className={'absolute z-1 object-cover left-0 top-0 h-full w-full'}
        />
      </Case>

      <Case className={'bg-[#1C1B28]'}>
        <Typography
          variant="h3-medium"
          className={'text-(--fill-white) z-3'}
        >
          Livedigital
        </Typography>

        <Typography
          variant="text"
          className={'text-(--fill-white) z-3 w-[calc(100%-150px)] md:w-full md:max-w-[330px] xl:max-w-[503px]'}
        >
          Сервис аналитики и видеосвязи для онлайн-школ и корпоративного обучения
        </Typography>

        <Image
          src={'/images/livedigital.png'}
          alt={'Livedigital - Сервис аналитики и видеосвязи для онлайн-школ и корпоративного обучения'}
          width={'292'}
          height={'224'}
          quality={100}
          className={
            'absolute z-1 object-contain right-[-120px] md:right-[70px] top-1/2 md:top-[48%] -translate-y-1/2 h-[calc(100%-32px)] md:h-full'
          }
        />
      </Case>

      <Case className={'bg-[#E6EDFD]'}>
        <Typography
          variant="h3-medium"
          className={'text-(--text-light) z-3'}
        >
          Pact
        </Typography>

        <Typography
          variant="text"
          className={'text-(--text-light) z-3 w-[calc(100%-150px)] md:w-full md:max-w-[303px] xl:max-w-[450px]'}
        >
          Агрегатор мессенджеров и соцсетей для общения с клиентами и продаж
        </Typography>

        <Image
          src={'/images/pact.png'}
          alt={'Pac - Агрегатор мессенджеров и соцсетей для общения с клиентами и продаж'}
          width={'310'}
          height={'222'}
          quality={100}
          className={
            'absolute z-1 object-contain right-[-120px] md:right-[65px] top-1/2 -translate-y-1/2 h-[calc(100%-32px)] md:h-full'
          }
        />
      </Case>

      <DynamicDemoDialog
        className={'mt-6 xl:mt-10 w-full flex items-center'}
        triggerButton={
          <Button
            variant={'secondary'}
            className={'w-fit'}
            asChild
          >
            <Typography variant={'button'}>Cобрать свою идеальную АТS</Typography>
          </Button>
        }
      />
    </div>
  );
};
