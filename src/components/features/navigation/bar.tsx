import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navigationItems, type NavItem } from '@/lib/consts/navbar';
import { cn } from '@/lib/utils/cn';
import Typography from '@/components/ui/typography';
import { GetDemoDialog } from '../get-demo-dialog';
import Image from 'next/image';
import { LazyVideo } from '@/components/ui/lazy-video';

export const NavigationBar = ({ orientation, className = '' }: { orientation: 'x' | 'y'; className?: string }) => {
  const activeRoute = usePathname();

  const [navItems, setNavItems] = useState<NavItem[]>(navigationItems);

  const closeDrawer = () => {
    const drawerCloseBtn = document.getElementById('close-drawer-button');
    drawerCloseBtn?.click();
  };

  useEffect(() => {
    setNavItems((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        isActive: item.href === activeRoute,
      })),
    );
  }, [activeRoute]);

  return (
    <div className={className}>
      {orientation === 'x' && (
        <nav className={cn('hidden xl:flex items-center gap-1 xl:bg-(--border-light) xl:p-1 xl:rounded-[16px]')}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
            >
              <Button
                variant={'tab'}
                className={item.isActive ? 'bg-(--fill-white)' : ''}
              >
                <Typography variant={'button'}>{item.label}</Typography>
              </Button>
            </Link>
          ))}

          <Link href="https://huntlee.ru/login">
            <Button variant="secondary">
              <Typography variant={'button'}>Войти</Typography>
            </Button>
          </Link>
        </nav>
      )}
      {orientation === 'y' && (
        <nav className={cn('flex flex-col justify-around h-full')}>
          <div className={'flex flex-col gap-4 py-2'}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={'w-full'}
                onClick={closeDrawer}
              >
                <Button
                  variant={item.isActive ? 'white' : 'ghost'}
                  className={'text-(--text-light) w-full'}
                >
                  <Typography variant={'button'}>{item.label}</Typography>
                </Button>
              </Link>
            ))}
          </div>

          <div className={'flex flex-col gap-10'}>
            <Link
              href="https://huntlee.ru/login"
              className={'w-full'}
            >
              <Button
                variant="secondary"
                className={'w-full'}
              >
                <Typography variant={'button'}>Войти</Typography>
              </Button>
            </Link>

            <GetDemoDialog
              triggerButton={
                <div className={'relative'}>
                  <Button
                    variant={'default'}
                    className={'w-full z-3'}
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

                  <LazyVideo
                    src="/videos/demo-video.mp4"
                    type="video/mp4"
                    width={'100%'}
                    height={102}
                    autoPlay={true}
                    loop={true}
                    className={'rounded-[12px] mt-1'}
                  />
                </div>
              }
            />
          </div>
        </nav>
      )}
    </div>
  );
};
