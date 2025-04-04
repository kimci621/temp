import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navigationItems, type NavItem } from '@/lib/consts/navbar';
import { cn } from '@/lib/utils/cn';
import { ButtonWithVideo } from '@/components/features/button-with-video';

export const NavigationBar = ({ orientation, className = '' }: { orientation: 'x' | 'y'; className?: string }) => {
  const activeRoute = usePathname();

  const [navItems, setNavItems] = useState<NavItem[]>(navigationItems);

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
        <nav className={cn('hidden xl:flex items-center gap-1 xl:bg-(--border-light) xl:p-1 xl:rounded-xl')}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
            >
              <Button
                variant={item.isActive ? 'white' : 'ghost'}
                className={'text-(--text-light)'}
              >
                {item.label}
              </Button>
            </Link>
          ))}

          <Link href="https://huntlee.ru/login">
            <Button variant="secondary">Вход/Регистрация</Button>
          </Link>
        </nav>
      )}
      {orientation === 'y' && (
        <nav className={cn('flex flex-col justify-between h-full')}>
          <div className={'flex flex-col gap-4 py-20'}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={'w-full'}
              >
                <Button
                  variant={item.isActive ? 'white' : 'ghost'}
                  className={'text-(--text-light) w-full'}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          <div>
            <Link
              href="https://huntlee.ru/login"
              className={'w-full'}
            >
              <Button
                variant="secondary"
                className={'w-full'}
              >
                Вход/Регистрация
              </Button>
            </Link>

            <div className={'pb-[130px] mt-10 mb-4'}>
              <ButtonWithVideo
                alwaysShowVideo={true}
                className={'w-[221px]'}
              />
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};
