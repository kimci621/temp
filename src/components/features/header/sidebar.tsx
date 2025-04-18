'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState } from 'react';
import Drawer from '@/components/ui/drawer';
import { HeaderLogo } from '@/components/features/header/logo';
import { NavigationBar } from '@/components/features/navigation/bar';
import { ButtonWithVideo } from '@/components/features/button-with-video';
import { useMediaQuery } from '@/lib/hooks/use-media-query';

export function HeaderSidebar() {
  const [isShowDrawer, setIsShowDrawer] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1280px)');

  return (
    <div>
      <div className="flex items-center gap-2.5">
        <ButtonWithVideo alwaysShowVideo={isDesktop} />

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
