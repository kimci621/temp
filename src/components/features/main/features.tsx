import { SectionTag } from '@/components/ui/section-tag';
import Typography from '@/components/ui/typography';
import { cn } from '@/lib/utils/cn';
import { useState } from 'react';
import Image from 'next/image';
import { GetDemoDialog } from '../get-demo-dialog';
import { Button } from '@/components/ui/button';
import TypographyAnimated from '@/components/ui/typography-animated';
import { motion, AnimatePresence } from 'framer-motion';

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

  const handleTabChange = (value: string) => {
    setActiveTab(value);

    const button = document.querySelector(`[data-btn-value="${value}"]`) as HTMLElement;
    const wrapper = document.querySelector('#btn-features-carousel-wrapper') as HTMLElement;

    if (button && wrapper) {
      const buttonCenter = button.offsetLeft + button.offsetWidth / 2;
      const wrapperCenter = wrapper.offsetLeft + wrapper.offsetWidth / 2;
      const scrollLeft = buttonCenter - wrapperCenter;

      wrapper.scrollTo({
        left: scrollLeft,
        behavior: 'smooth',
      });
    }
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
              handleTabChange(c.value);
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

      <div
        id={'btn-features-carousel-wrapper'}
        className={'flex flex-row flex-nowrap gap-2 w-[100vw] px-1 hidden-x-scrollbar'}
      >
        {carouselItems.map((c, idx) => (
          // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
          <div
            key={idx.toString()}
            onClick={() => handleTabChange(c.value)}
            className={cn(
              activeTab !== c.value ? 'bg-(--fill-dark-fill)' : 'bg-(--active-dark)',
              'text-center px-6 py-2 rounded-lg cursor-pointer transition',
            )}
            data-btn-value={c.value}
            style={{
              width: `${c.maxWidth}px`,
              minWidth: `${c.maxWidth}px`,
            }}
          >
            <Typography
              variant={'button'}
              className={'w-full break-words'}
            >
              {c.label}
            </Typography>
          </div>
        ))}
      </div>

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
                    loading="lazy"
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

                    <GetDemoDialog
                      className={'mt-20'}
                      triggerButton={
                        <Button
                          variant={'white'}
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
