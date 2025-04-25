import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { LazyVideo } from '@/components/ui/lazy-video';
import type React from 'react';
import { cn } from '@/lib/utils/cn';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { GetDemoForm } from '@/components/features/get-demo-from/form';
import Typography from '@/components/ui/typography';
import { ModalGetDemoBackground } from '@/components/ui/modal-get-demo-background';

export function ButtonWithVideo({
  alwaysShowVideo = false,
  className = '',
  ...props
}: {
  alwaysShowVideo?: boolean;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  const alwaysShowVideoStyles = alwaysShowVideo ? 'h-fit opacity-100' : '';

  return (
    <div
      className={cn('relative group flex flex-col gap-2', className)}
      {...props}
    >
      <Dialog>
        <DialogTrigger asChild>
          {!alwaysShowVideo ? (
            <Button className={'z-1'}>
              <article className="flex items-center gap-3">
                <Image
                  src="/monitor-play.svg"
                  alt="MonitorPlay Logo"
                  width={24}
                  height={24}
                  className="hidden xl:inline-block"
                />
                <Typography
                  className="hidden md:inline-block"
                  variant={'button'}
                >
                  Запросить демо
                </Typography>
                <Typography
                  className="inline-block md:hidden"
                  variant={'button'}
                >
                  Демо
                </Typography>
              </article>
            </Button>
          ) : (
            <Button>
              <article className="flex items-center gap-3">
                <Image
                  src="/monitor-play.svg"
                  alt="MonitorPlay Logo"
                  width={24}
                  height={24}
                />
                <Typography variant={'button'}>Запросить демо</Typography>
              </article>
            </Button>
          )}
        </DialogTrigger>

        <DialogContent className={'xl:pr-0'}>
          <div className={'w-full overflow-x-hidden hidden-y-scrollbar relative xl:-mr-[27px]'}>
            <div>
              <DialogTitle className={'opacity-0'}>_</DialogTitle>

              <Typography
                variant={'h3-medium'}
                className={'text-(--text-light) mb-6'}
              >
                Попробуйте Huntlee бесплатно!
              </Typography>

              <Typography
                variant={'h4-medium'}
                className={'text-(--text-light) mb-10 max-w-[669px]'}
              >
                Запишитесь на персональную демонстрацию и узнайте, как Huntlee поможет вашему бизнесу.
              </Typography>

              <div className={'mt-4 w-full flex justify-center xl:justify-start'}>
                <GetDemoForm />
              </div>
            </div>

            <div className={'hidden xl:block absolute -right-[320px] top-[200px] w-[896px] h-[120%] z-0'}>
              <ModalGetDemoBackground />
            </div>

            <div
              className={
                'hidden xl:block absolute -right-[220px] top-[500px] -translate-y-1/2 w-[798px] z-0 p-1 bg-(--fill-white) rounded-lg'
              }
            >
              <LazyVideo
                src="/videos/demo-video.mp4"
                type="video/mp4"
                width="100%"
                height="456px"
                autoPlay={true}
                loop={true}
                className={cn('rounded-lg')}
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <div
        className={cn(
          'absolute top-[calc(100%+4px)] transition-[height,opacity] duration-200 overflow-hidden h-0 group-hover:h-fit opacity-0 group-hover:opacity-100 bg-(--fill-white) rounded-[12px]',
          alwaysShowVideoStyles,
        )}
      >
        <LazyVideo
          src="/videos/demo-video.mp4"
          type="video/mp4"
          width="100%"
          height="100%"
          autoPlay={true}
          loop={true}
          className={cn('w-full rounded-[10px] border border-(--fill-white)')}
        />
      </div>

      <div
        className={
          'hidden xl:block absolute -z-1 -top-[4px] -left-[4px] bg-(--fill-white) w-[calc(100%+8px)] h-[202px] rounded-[12px] border border-(--border-light)'
        }
      />
    </div>
  );
}
