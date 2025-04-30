import React from 'react';
import { SectionTag } from '../../section-tag';
import Typography from '../../typography';
import { AboutPageIntegrations } from '@/components/features/about/integrations';
import { AboutPageNews } from '@/components/features/about/news';

const AboutPageThirdSection = React.memo(function AboutPageThirdSection() {
  return (
    <section className={'w-full bg-(--fill-light-bg)'}>
      <div className={'container-inner mx-auto flex flex-col items-center'}>
        <SectionTag
          emoji="⛓️"
          name="Совместная эффективность"
          isLight
          className={'mt-[80px] xl:mt-[200px]'}
        />

        <Typography
          variant={'h1-medium'}
          className={'text-(--text-light) mt-[24px] md:mt-[10px] xl:mt-[24px]'}
        >
          Интеграции без границ
        </Typography>

        <Typography
          variant={'text'}
          className={'text-(--border-dark) mt-[24px] md:mt-[10px] xl:mt-[24px]'}
        >
          Подключите Huntlee к любимым инструментам
        </Typography>

        <AboutPageIntegrations className={'mt-[40px] md:mt-[80px]'} />

        <AboutPageNews className={'mt-[128px] xl:mt-[200px]'} />
      </div>
    </section>
  );
});

export { AboutPageThirdSection };
