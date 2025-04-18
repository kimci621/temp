'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from '@/lib/hooks/use-media-query';
import { useEffect, useRef } from 'react';

export function HeaderLogo() {
  const [isOnDarkBg, setIsOnDarkBg] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1280px)');
  const throttleTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = () => {
    if (!isDesktop) {
      setIsOnDarkBg(false);
      return;
    }

    const allDarkBgElements = document.querySelectorAll('.is-dark-bg');
    let isOn = false;

    allDarkBgElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      // Check if the top of the element is at or above the top of the viewport,
      // and the bottom is still below the top (element is at least partially visible from the top)
      if (rect.top <= 0 && rect.bottom > 0) {
        isOn = true;
      }
    });

    setIsOnDarkBg(isOn);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    function throttledHandleScroll() {
      if (throttleTimeout.current) return;
      throttleTimeout.current = setTimeout(() => {
        handleScroll();
        throttleTimeout.current = null;
      }, 100);
    }

    window.addEventListener('scroll', throttledHandleScroll);
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      if (throttleTimeout.current) clearTimeout(throttleTimeout.current);
    };
  }, [isDesktop]);

  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 xl:gap-3"
    >
      <Image
        src="/huntlee-logo.svg"
        alt="Huntlee Logo"
        width={48}
        height={48}
        className="w-10 h-10 xl:w-12 xl:h-12"
      />

      <h1 className={cn('text-2xl text-(--border-dark) montserrat-font font-semibold', isOnDarkBg ? 'text-white' : '')}>
        Huntlee
      </h1>
    </Link>
  );
}
