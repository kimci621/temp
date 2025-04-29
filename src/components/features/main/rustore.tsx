import Typography from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils/cn';

export function MainRustore() {
  return (
    <div
      className={
        'relative grid grid-cols-1 md:grid-cols-[1fr_auto] border border-(--border-dark) rounded-[16px] bg-(--fill-dark-fill) p-6 xl:px-10'
      }
    >
      <article className={'z-2 w-full flex flex-col justify-between items-center md:items-start'}>
        <div className={'flex flex-col mb-10'}>
          <div className={'flex items-center gap-4 mb-6'}>
            <Image
              src={'/images/rustore-icon.png'}
              alt={'rustore'}
              width={48}
              height={48}
            />

            <Typography
              variant={'h3-medium'}
              className={'text-(--text-dark)'}
            >
              Скачайте наше приложение
            </Typography>
          </div>

          <Typography
            variant={'text'}
            className={'text-(--text-dark) w-full md:w-[400px] xl:w-[610px]'}
          >
            Просматривайте отклики, общайтесь с кандидатами и следите за расписанием собеседований из любого места и в
            любое время
          </Typography>
        </div>

        <div className={'flex items-center gap-4 mb-3 md:mb-0'}>
          <Link
            href={'https://www.rustore.ru/catalog/app/com.mycompany.huntlee'}
            target={'_blank'}
          >
            <Button
              variant={'secondary'}
              className={'w-fit'}
              asChild
            >
              <Typography variant={'button'}>Скачать приложение</Typography>
            </Button>
          </Link>

          <div
            className={'hidden xl:inline-block'}
            data-lenis-prevent
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    variant={'secondary'}
                    size={'icon'}
                    asChild
                  >
                    <Image
                      src={'/qr-code.svg'}
                      alt={'rustore'}
                      width={24}
                      height={24}
                      className={'size-6'}
                    />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <div>
                    <Image
                      src="/images/rustore-qrcode.png"
                      alt="MonitorPlay Logo"
                      width={150}
                      height={150}
                      quality={100}
                      className="inline-block"
                    />
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </article>

      <Image
        src={'/images/iphone-rustore.png'}
        alt={'rustore'}
        width={700}
        height={1000}
        quality={100}
        className={cn(
          'md:absolute object-contain z-2 mx-auto md:mx-0',
          'md:top-1/2 xl:top-[calc(82px)] translate-y-6 md:-translate-y-1/2',
          'md:right-10 xl:right-20',
          'w-[275px] md:w-[220px] xl:w-[275px] h-[365px] md:h-[300px] xl:h-[365px]',
        )}
      />

      <div className={'absolute right-0 top-0 w-full h-full rounded-[16px] overflow-hidden border-none'}>
        <div className={'relative'}>
          <div className={'rustore-bg-circle'} />
        </div>
      </div>
    </div>
  );
}
