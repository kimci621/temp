import React from 'react';
import { SectionTag } from '../../section-tag';
import Typography from '../../typography';
import { MainRustore } from '@/components/features/main/rustore';

const AboutPageSecondSection = React.memo(function AboutPageSecondSection() {
  return (
    <div className={'w-full bg-(--fill-dark-bg) pb-[80px] md:pb-[130px] xl:pb-[200px] is-dark-bg'}>
      <div className={'container-inner mx-auto flex flex-col items-center'}>
        <SectionTag
          emoji="⛓️"
          name="Совместная эффективность"
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

      <div className={'container-inner mx-auto mt-[80px] md:mt-[128px] xl:mt-[200px]'}>
        <MainRustore />
      </div>
    </div>
  );
});

export { AboutPageSecondSection };
