import { Button } from '@/components/ui/button';
import Typography from '@/components/ui/typography';
import { cn } from '@/lib/utils/cn';
import Image from 'next/image';
import { CircularProgress } from '@/components/ui/circular-progress';
import { AnimatePresence, motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const DynamicDemoDialog = dynamic(() => import('../../get-demo-dialog').then((c) => c.GetDemoDialog), {});

interface CustomTabContentProps {
  title: string;
  label?: string;
  progress: number;
  imgPath: string;
  bgStyle: string;
  link: string;
  list: string[];
  activeTab: string;
}

export function MainHelpsSectionTabContent({
  title,
  progress,
  imgPath,
  bgStyle,
  label,
  list,
  activeTab,
}: CustomTabContentProps) {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressValue(progressValue + 1);
    }, 40);
    return () => clearInterval(interval);
  });
  return (
    <div className="grid w-full">
      <div className={cn(bgStyle, 'transition-all relative overflow-hidden hidden xl:block')}>
        <div className={'relative z-10 px-10 py-6 flex flex-col gap-10'}>
          <Typography
            variant={'h3-medium'}
            className={'max-w-[546px] text-(--fill-white)'}
          >
            {title}
          </Typography>

          <div className={'w-[678px] h-[56px]'} />

          <AnimatePresence mode="wait">
            <motion.div
              key={`text-block-${progress}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <ul className={'flex flex-col gap-6'}>
                {list.map((item, index) => (
                  <li
                    key={index.toString()}
                    className={'grid grid-cols-[auto_1fr] items-center gap-6'}
                  >
                    <Typography
                      variant={'h3-medium'}
                      className={'w-[50px] text-(--fill-white)'}
                    >
                      {`0${index + 1}`}
                    </Typography>

                    <Typography
                      variant={'text'}
                      className={'max-w-[546px] text-(--fill-white)'}
                    >
                      {item}
                    </Typography>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          <DynamicDemoDialog
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
                  Узнать больше
                </Typography>
              </Button>
            }
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`img-block-${progress}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={imgPath}
              alt={'carousel liquid'}
              className={'absolute -top-[150px] -right-[350px] z-0 hidden xl:block transition'}
              width={1000}
              height={1000}
              priority
            />
          </motion.div>
        </AnimatePresence>

        <div className={'absolute top-[24px] right-[36px]'}>
          <CircularProgress
            key={activeTab}
            value={progressValue}
            size={52}
            strokeWidth={5}
            labelClassName="text-xl font-bold"
            className="stroke-[transparent]"
            progressClassName="stroke-[#1D5D5F]/75"
          />
        </div>
      </div>

      <div className={cn(bgStyle, 'block xl:hidden relative overflow-hidden h-450px p-2 !shadow-none')}>
        {label && (
          <article className="py-2 md:py-3 px-4 rounded-md bg-[#FFFFFF99] mb-2">
            <Typography
              variant={'h4-medium'}
              className={'text-center text-(--text-light)'}
            >
              {label}
            </Typography>
          </article>
        )}

        <ul className={'flex flex-col gap-6 p-2'}>
          {list.map((item, index) => (
            <li
              key={index.toString()}
              className={'grid grid-cols-[auto_1fr] items-start gap-2 text-(--fill-white)'}
            >
              <Typography variant={'h4-medium'}>{`0${index + 1}`}</Typography>

              <Typography variant={'text'}>{item}</Typography>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
