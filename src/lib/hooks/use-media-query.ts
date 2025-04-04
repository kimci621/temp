'use client';

/**
 * Хук для проверки медиа-запросов
 *
 * Пример:
 * ```tsx
 * import { useMediaQuery } from '@/lib/hooks/use-media-query';
 *
 * const isMobile = useMediaQuery('(max-width: 768px)');
 * ```
 */
import { useEffect, useState } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}
