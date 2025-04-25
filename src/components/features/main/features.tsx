import { SectionTag } from '@/components/ui/section-tag';
import Typography from '@/components/ui/typography';
import { cn } from '@/lib/utils/cn';
import { useRef, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import TypographyAnimated from '@/components/ui/typography-animated';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactSlider, type ReactSliderRef } from '../react-slider';

const DynamicDemoDialog = dynamic(() => import('../get-demo-dialog').then((c) => c.GetDemoDialog), {});

export function MainFeatures() {
  const carouselItems = [
    {
      label: 'Публикация вакансий и сбор откликов с работных сайтов в один клик',
      value: 'job-posting-and-responses',
      maxWidth: 391,
    },
    {
      label: 'Хранение кандидатов со всей историей взаимодействия с ними',
      value: 'candidate-history',
      maxWidth: 346,
    },
    {
      label: 'Автоматическое распознавание дублей',
      value: 'duplicate-detection',
      maxWidth: 252,
    },
    {
      label: 'Интеграции с почтой и мессенджерами',
      value: 'email-messenger-integration',
      maxWidth: 239,
    },
    {
      label: 'Личный кабинет заказчика для заявок на подбор и оставления ОС по кандидатам',
      value: 'client-portal',
      maxWidth: 426,
    },
    {
      label: 'Аналитика: конверсии, причины отказа, источники, KPI отдела подбора',
      value: 'recruitment-analytics',
      maxWidth: 405,
    },
    {
      label: 'Настраиваемые воронки по вакансиям',
      value: 'customizable-funnels',
      maxWidth: 271,
    },
    {
      label: 'Гибкая настройка системы: этапы, метки, доступы, шаблоны, источники',
      value: 'system-configuration',
      maxWidth: 376,
    },
    {
      label: 'Интерактивная канбан-доска с кандидатами',
      value: 'kanban-board',
      maxWidth: 314,
    },
    {
      label: 'Автоматические действия с кандидатами при их движении по воронке',
      value: 'automated-actions',
      maxWidth: 420,
    },
    {
      label: 'Работа по 152-ФЗ, автоматический запрос согласия на ОПД и безопасное хранение данных',
      value: 'data-protection',
      maxWidth: 509,
    },
  ];
  const [activeTab, setActiveTab] = useState(carouselItems[0].value);
  const tabImages = carouselItems.map((i) => ({
    src: `/images/main-features-carousel-content/${i.value}.png`,
    alt: i.label,
  }));
  const slider = useRef<ReactSliderRef | null>(null);

  const handleTabChange = (idx: number) => {
    slider?.current?.goToIndex(idx);
    // setActiveTab(value);
  };

  return (
    <div className={'flex flex-col items-center'}>
      <SectionTag
        emoji={'🤖'}
        name={'Широкий инструментарий'}
        className={'mb-6'}
      />

      <TypographyAnimated
        variant={'h1-medium'}
        animationAmount={0.2}
        animationDuration={0.75}
        className={'mb-20 text-center'}
      >
        Весь необходимый функционал <br />
        для работы и даже больше
      </TypographyAnimated>

      <ul className={'mb-10'}>
        {carouselItems.map((c, idx) => (
          // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
          <li
            key={idx.toString()}
            className="inline-block mx-1 cursor-pointer"
            onClick={() => {
              handleTabChange(idx);
            }}
          >
            <div
              className={cn(
                'w-2 h-2 rounded-full transition-all duration-300',
                activeTab === c.value ? 'bg-(--active-dark)' : 'bg-(--fill-dark-fill)',
              )}
            />
          </li>
        ))}
      </ul>

      <ReactSlider
        ref={slider}
        config={{
          infinite: true,
          snap: true,
          onSlideChange: (currentSlide) => {
            setActiveTab(carouselItems[currentSlide].value);
          },
        }}
      >
        {carouselItems.map((c, idx) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={idx}
            className={'flex items-center justify-center w-[80vw] md:w-[320px] xl:w-[400px] shrink-0 px-2'}
          >
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <div
              onClick={() => handleTabChange(idx)}
              className={cn(
                activeTab !== c.value ? 'bg-(--fill-dark-fill)' : 'bg-(--active-dark)',
                'text-center px-6 py-2 rounded-lg cursor-pointer',
              )}
            >
              <Typography
                variant={'button'}
                className={'w-full break-words'}
              >
                {c.label}
              </Typography>
            </div>
          </div>
        ))}
      </ReactSlider>

      <div className={'w-full container-inner mt-10 xl:mt-12'}>
        <AnimatePresence mode="wait">
          {tabImages.map(
            (i, idx) =>
              `/images/main-features-carousel-content/${activeTab}.png` === i.src && (
                <motion.div
                  key={idx.toString()}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    'rounded-2xl border border-(--border-dark) bg-(--fill-dark-fill) p-1 relative overflow-hidden',
                  )}
                >
                  <Image
                    src={i.src}
                    alt={i.alt}
                    width={1680}
                    height={960}
                    priority={true}
                    quality={100}
                    className={cn('w-full h-full object-contain rounded-xl')}
                  />

                  {/* Blurred background image with lower z-index */}
                  <div className="absolute bottom-[-80px] left-0 w-full h-[300px] z-1">
                    <Image
                      src={'/images/mountains-without-bg.png'}
                      alt="bg filtered image"
                      width={1678}
                      height={620}
                      loading="lazy"
                      quality={10}
                      className={cn('w-full h-full object-cover blur-[100px]')}
                    />
                  </div>

                  {/* Background mountain image */}
                  <div className="absolute bottom-0 left-0 w-full z-2">
                    <Image
                      src={'/images/mountains-without-bg.png'}
                      alt="bg image"
                      width={1678}
                      height={620}
                      loading="lazy"
                      quality={100}
                      className={cn('w-full h-auto')}
                    />
                  </div>

                  <div className={'w-full flex flex-col items-center pb-20 relative z-10 h-[410px] xl:h-[620px]'}>
                    <SectionTag
                      emoji={'🤖'}
                      name={'Широкий инструментарий'}
                      className={'mx-auto mt-10 md:mt-14 xl:mt-20'}
                    />

                    <TypographyAnimated
                      variant={'h3-medium'}
                      animationAmount={0.2}
                      animationDuration={0.75}
                      className={'mt-6 text-center'}
                    >
                      Huntlee – это не просто оптимизация затрат,
                      <br />а инструмент для достижения долгосрочных
                      <br />
                      бизнес-целей
                    </TypographyAnimated>

                    <TypographyAnimated
                      variant={'text'}
                      animationAmount={0.2}
                      animationDuration={0.75}
                      className={'mt-6 text-center'}
                    >
                      Для успешной работы в системе достаточно ознакомиться с инструкцией
                    </TypographyAnimated>

                    <DynamicDemoDialog
                      className={'mt-20'}
                      triggerButton={
                        <Button
                          variant={'secondary'}
                          className={'w-fit'}
                          asChild
                        >
                          <Typography
                            variant={'button'}
                            className={'text-(--text-light)'}
                          >
                            <span className={'hidden md:inline'}>Ознакомиться со всем функционалом</span>
                            <span className={'inline md:hidden'}>Весь функционал</span>
                          </Typography>
                        </Button>
                      }
                    />
                  </div>
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
