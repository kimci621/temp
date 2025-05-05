import React from 'react';
import { SectionTag } from '../../section-tag';
import Typography from '../../typography';
import { MainRustore } from '@/components/features/main/rustore';
import { AboutPageSlides } from '@/components/features/about/slides/slides';

const AboutPageSecondSection = React.memo(function AboutPageSecondSection() {
  return (
    <div className={'w-full bg-(--fill-dark-bg) pb-[80px] md:pb-[130px] xl:pb-[200px] is-dark-bg'}>
      <div className={'container-inner mx-auto flex flex-col items-center mb-10 md:mb-16 xl:mb-25'}>
        <SectionTag
          emoji="🔗"
          name="Надежность каждого звена"
          className={'mt-[80px] xl:mt-[200px]'}
        />

        <Typography
          variant={'h1-medium'}
          className={'text-center text-(--fill-white) mt-[24px]'}
        >
          Главные функции
          <br />
          CRM для HR Huntlee
        </Typography>
      </div>

      <AboutPageSlides />

      <div className={'container-inner mx-auto mt-[80px] md:mt-[128px] xl:mt-[200px]'}>
        <MainRustore />
      </div>
    </div>
  );
});

export { AboutPageSecondSection };
