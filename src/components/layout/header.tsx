'use client';

import { HeaderLogo } from '@/components/features/header/logo';
import { HeaderNav } from '@/components/features/header/nav';
import { HeaderSidebar } from '@/components/features/header/sidebar';

export function Header() {
  return (
    <div className={'h-13'}>
      <header className={'fixed top-0 z-50 w-full'}>
        <div className="container-header mx-auto md:mt-2 xl:mt-5">
          <div className="w-full flex items-center justify-between md:rounded-[14px] bg-(--fill-white) border border-(--border-light) xl:bg-transparent xl:border-none gap-2.5 px-4 py-4 md:p-1 xl:p-0 relative">
            <HeaderLogo />

            <div className={'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'}>
              <HeaderNav />
            </div>

            <HeaderSidebar />
          </div>
        </div>
      </header>
    </div>
  );
}
