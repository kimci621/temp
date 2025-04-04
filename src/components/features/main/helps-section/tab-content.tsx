import { Button } from '@/components/ui/button';
import Typography from '@/components/ui/typography';
import { cn } from '@/lib/utils/cn';
import Image from 'next/image';
import { GetDemoDialog } from '../../get-demo-dialog';

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

export function HelpsSectionTabContent({
  title,
  progress,
  imgPath,
  bgStyle,
  link,
  label,
  list,
  tabsJsx,
}: CustomTabContentProps) {
  return (
    <div className="grid w-full">
      <div className={cn(bgStyle, 'relative overflow-hidden hidden xl:block')}>
        <div className={'relative z-10 px-10 py-6 flex flex-col gap-10'}>
          <Typography
            variant={'h3-medium'}
            className={'max-w-[546px]'}
          >
            {title}
          </Typography>

          {tabsJsx && tabsJsx}

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

          <GetDemoDialog
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
                  Узнать больше
                </Typography>
              </Button>
            }
          />
        </div>

        <Image
          src={imgPath}
          alt={'carousel liquid'}
          className={'absolute -top-[150px] -right-[350px] z-0 hidden xl:block'}
          width={1000}
          height={1000}
        />
      </div>

      <div className={cn(bgStyle, 'block xl:hidden relative overflow-hidden  h-450px p-2 !shadow-none')}>
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
