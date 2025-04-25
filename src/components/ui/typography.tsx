'use client';

import { TypographyClasses } from '@/lib/consts/typography';
import type React from 'react';
import { type ReactNode, useEffect, useState, useRef } from 'react';

// Типы для различных вариантов текста
type TypographyVariant =
  | 'h1-bold'
  | 'h1-medium'
  | 'h2-medium'
  | 'h3-medium'
  | 'h4-medium'
  | 'button'
  | 'text'
  | 'caption'
  | 'label';

type ScreenSize = 'desktop' | 'tablet' | 'mobile';

interface TypographyProps {
  variant: TypographyVariant;
  children: ReactNode;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({ variant, children, className = '' }) => {
  const [screenSize, setScreenSize] = useState<ScreenSize>('desktop');
  const resizeTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Функция для определения размера экрана
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setScreenSize('desktop');
      } else if (width >= 768) {
        setScreenSize('tablet');
      } else {
        setScreenSize('mobile');
      }
    };

    // Дебаунсер для resize
    const debouncedResize = () => {
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
      resizeTimeout.current = setTimeout(() => {
        handleResize();
      }, 150);
    };

    handleResize();
    window.addEventListener('resize', debouncedResize, { passive: true });
    return () => {
      window.removeEventListener('resize', debouncedResize);
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
    };
  }, []);

  // Определяем классы в зависимости от размера экрана и варианта типографики
  const getTypographyClasses = () => {
    const baseClasses: Record<ScreenSize, Record<TypographyVariant, string>> = TypographyClasses;

    return baseClasses[screenSize][variant] || '';
  };

  // Определяем HTML-тег в зависимости от варианта
  const getTag = () => {
    if (variant.startsWith('h1')) return 'h1';
    if (variant.startsWith('h2')) return 'h2';
    if (variant.startsWith('h3')) return 'h3';
    if (variant.startsWith('h4')) return 'h4';
    if (variant === 'button') return 'span';
    if (variant === 'caption') return 'span';
    if (variant === 'label') return 'label';
    return 'p'; // для текста по умолчанию
  };

  // Динамически создаем компонент с нужным тегом
  const Component = getTag();

  // Объединяем все классы
  const combinedClassName = `typography ${getTypographyClasses()} ${className}`.trim();

  return <Component className={combinedClassName}>{children}</Component>;
};

// Экспортируем типы для удобства использования
export type { TypographyVariant };

export default Typography;
