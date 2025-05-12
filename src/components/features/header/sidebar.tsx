'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState } from 'react';
import Drawer from '@/components/ui/drawer';
import { HeaderLogo } from '@/components/features/header/logo';
import { NavigationBar } from '@/components/features/navigation/bar';
import { useMediaQuery } from '@/lib/hooks/use-media-query';
import Typography from '@/components/ui/typography';
import { GetDemoDialog } from '../get-demo-dialog';
import { LazyVideo } from '@/components/ui/lazy-video';

export function HeaderSidebar() {
  const [isShowDrawer, setIsShowDrawer] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1280px)');

  return (
    <div>
      <div className="flex items-center gap-2.5">
        {isDesktop && (
          <GetDemoDialog
            triggerButton={
              <div className={'relative'}>
                <Button
                  variant={'default'}
                  className={'w-[228px] z-3'}
                >
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

                <div
                  className={
                    'absolute bg-(--fill-white) top-[-4px] left-1/2 -translate-x-1/2 rounded-[16px] h-[162px] w-[236px] z-1'
                  }
                />

                <LazyVideo
                  src="/videos/demo-video.mp4"
                  type="video/mp4"
                  width={228}
                  height={102}
                  autoPlay={true}
                  loop={true}
                  className={'rounded-[12px] absolute top-[52px] left-1/2 -translate-x-1/2 z-2'}
                />
              </div>
            }
          />
        )}

        <Button
          variant="secondary"
          className="xl:hidden"
          size={'icon'}
          onClick={() => setIsShowDrawer(true)}
        >
          <Image
            src="/burger.svg"
            alt="Burger button"
            width={24}
            height={24}
          />
        </Button>
      </div>

      <Drawer
        isOpen={isShowDrawer}
        onClose={() => setIsShowDrawer(false)}
        position="right"
        size="sm"
        className={'!h-[96vh] top-[2vh] rounded-tl-2xl rounded-bl-2xl bg-(--fill-light-bg)'}
        titleJsx={<HeaderLogo />}
      >
        <NavigationBar
          orientation={'y'}
          className={'h-full'}
        />
      </Drawer>
    </div>
  );
}
