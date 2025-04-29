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
import { AnimationOpacity } from '../animation/opacity';

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

  const [bgOpacityStyle, setBgOpacityStyle] = useState<'opacity-[70%]' | 'opacity-[100%]'>('opacity-[70%]');

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
        className={'mb-20 text-center text-(--fill-white)'}
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
          onSlideChange: (currentSlide) => {
            setActiveTab(carouselItems[currentSlide].value);
          },
        }}
      >
        {carouselItems.map((c, idx) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={idx}
            className="flex w-[80vw] md:w-[30vw] xl:w-[25vw] shrink-0 items-center justify-center px-2"
          >
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <div
              onClick={() => handleTabChange(idx)}
              className={cn(
                activeTab !== c.value ? 'bg-(--fill-dark-fill)' : 'bg-(--active-dark)',
                'text-center px-6 py-2 rounded-lg cursor-pointer w-full',
              )}
            >
              <Typography
                variant={'button'}
                className={'break-words text-(--fill-white)'}
              >
                {c.label}
              </Typography>
            </div>
          </div>
        ))}
      </ReactSlider>

      <div className={'w-full container-inner mt-10 xl:mt-12'}>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
              'rounded-2xl border border-(--border-dark) bg-(--fill-dark-fill) p-1 relative overflow-hidden',
            )}
          >
            {tabImages.map(
              (i, idx) =>
                `/images/main-features-carousel-content/${activeTab}.png` === i.src && (
                  <AnimationOpacity
                    key={i.src}
                    duration={1}
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
                  </AnimationOpacity>
                ),
            )}

            {/* Blurred background image with lower z-index */}
            <div className="absolute bottom-0 left-0 w-[140%] md:w-full z-1">
              <Image
                src={'/images/mountains-without-bg.png'}
                alt="bg filtered image"
                width={1168}
                height={246}
                loading="lazy"
                quality={10}
                className={cn('w-full h-auto blur-[100px] transition-all ease-out duration-300', bgOpacityStyle)}
              />
            </div>

            {/* Background mountain image */}
            <div className="absolute bottom-0 left-0 w-[140%] md:w-full z-2">
              <Image
                src={'/images/mountains-without-bg.png'}
                alt="bg image"
                width={1168}
                height={246}
                loading="lazy"
                quality={100}
                className={cn('w-full h-auto transition-all ease-out duration-300', bgOpacityStyle)}
              />
            </div>

            <div className={'w-full flex flex-col items-center pb-[40px] md:pb-[80px] xl:pb-[140px] relative z-10'}>
              <SectionTag
                emoji={'🤖'}
                name={'Широкий инструментарий'}
                className={'mx-auto mt-10 md:mt-14 xl:mt-20'}
              />

              <TypographyAnimated
                variant={'h3-medium'}
                animationAmount={0.2}
                animationDuration={0.75}
                className={'mt-6 text-center text-(--fill-white)'}
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
                className={'mt-6 text-center text-(--fill-white)'}
              >
                Для успешной работы в системе достаточно ознакомиться с инструкцией
              </TypographyAnimated>

              <DynamicDemoDialog
                className={'mt-10 xl:mt-20'}
                triggerButton={
                  <div
                    onMouseEnter={(e) => {
                      setBgOpacityStyle('opacity-[100%]');
                    }}
                    onMouseLeave={(e) => {
                      setBgOpacityStyle('opacity-[70%]');
                    }}
                  >
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
                  </div>
                }
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
