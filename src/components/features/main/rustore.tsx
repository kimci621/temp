import Typography from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export function MainRustore() {
  return (
    <div
      className={
        'grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 border border-(--border-dark) rounded-[16px] bg-(--fill-dark-fill) p-6 '
      }
    >
      <article className={'flex flex-col justify-between items-center md:items-start'}>
        <div className={'flex flex-col gap-6 mb-10'}>
          <div className={'flex items-center gap-4'}>
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
            className={'text-(--text-dark)'}
          >
            Просматривайте отклики, общайтесь с кандидатами и следите за расписанием собеседований из любого места и в
            любое время
          </Typography>
        </div>

        <div className={'flex items-center gap-4'}>
          <Link
            href={'https://www.rustore.ru/catalog/app/com.mycompany.huntlee'}
            target={'_blank'}
          >
            <Button
              variant={'white'}
              className={'w-fit'}
              asChild
            >
              <Typography
                variant={'button'}
                className={'!text-(--active-dark)'}
              >
                Скачать приложение
              </Typography>
            </Button>
          </Link>

          <div className={'hidden xl:inline-block'}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    variant={'white'}
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

      <div className={'relative w-full md:w-[271px] h-[368px] md:h-[260px] flex items-center justify-center'}>
        <Image
          src={'/images/iphone-rustore.png'}
          alt={'rustore'}
          width={700}
          height={1000}
          quality={100}
          className={
            'md:absolute md:top-1/2 xl:top-[calc(107px)] translate-y-7 md:-translate-y-1/2  md:left-0 object-contain w-[271px] h-[368px]  '
          }
        />
      </div>
    </div>
  );
}
