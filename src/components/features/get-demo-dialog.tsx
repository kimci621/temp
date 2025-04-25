import { LazyVideo } from '@/components/ui/lazy-video';
import type React from 'react';
import { cn } from '@/lib/utils/cn';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { GetDemoForm } from '@/components/features/get-demo-from/form';
import Typography from '@/components/ui/typography';
import { ModalGetDemoBackground } from '@/components/ui/modal-get-demo-background';

export function GetDemoDialog({
  triggerButton,
  className = '',
  ...props
}: {
  triggerButton: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('group flex flex-col gap-2', className)}
      {...props}
    >
      <Dialog>
        <DialogTrigger asChild>
          <div>{triggerButton}</div>
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
    </div>
  );
}
