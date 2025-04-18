import { Button } from '@/components/ui/button';
import Typography from '@/components/ui/typography';
import { cn } from '@/lib/utils/cn';
import Image from 'next/image';
import { GetDemoDialog } from '../../get-demo-dialog';
import { CircularProgress } from '@/components/ui/circular-progress';
import { AnimatePresence, motion } from 'framer-motion';

interface CustomTabContentProps {
  title: string;
  label?: string;
  progress: number;
  imgPath: string;
  bgStyle: string;
  link: string;
  list: string[];
  tabsJsx?: React.ReactNode;
}

export function MainHelpsSectionTabContent({
  title,
  progress,
  imgPath,
  bgStyle,
  label,
  list,
  tabsJsx,
}: CustomTabContentProps) {
  const progressValue = {
    0: 1,
    25: 33,
    50: 66,
    100: 100,
  };

  return (
    <div className="grid w-full">
      <div className={cn(bgStyle, 'transition-all relative overflow-hidden hidden xl:block')}>
        <div className={'relative z-10 px-10 py-6 flex flex-col gap-10'}>
          <Typography
            variant={'h3-medium'}
            className={'max-w-[546px]'}
          >
            {title}
          </Typography>

          {tabsJsx && tabsJsx}

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
                      className={'w-[50px]'}
                    >{`0${index + 1}`}</Typography>

                    <Typography
                      variant={'text'}
                      className={'max-w-[546px]'}
                    >
                      {item}
                    </Typography>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          <GetDemoDialog
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
            value={progressValue[progress as keyof typeof progressValue]}
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
              className={'grid grid-cols-[auto_1fr] items-start gap-2'}
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
