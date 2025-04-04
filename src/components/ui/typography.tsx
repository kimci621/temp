'use client';

import type React from 'react';
import { type ReactNode, useEffect, useState } from 'react';

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

  useEffect(() => {
    // Функция для определения размера экрана
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1200) {
        setScreenSize('desktop');
      } else if (width >= 768) {
        setScreenSize('tablet');
      } else {
        setScreenSize('mobile');
      }
    };

    // Вызываем функцию сразу при монтировании
    handleResize();

    // Добавляем слушатель изменения размера окна
    // TODO use debouncer
    window.addEventListener('resize', handleResize, {
      passive: true,
    });

    // Очищаем слушатель при размонтировании
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Определяем классы в зависимости от размера экрана и варианта типографики
  const getTypographyClasses = () => {
    const baseClasses: Record<ScreenSize, Record<TypographyVariant, string>> = {
      desktop: {
        'h1-bold': 'text-[64px] font-bold font-manrope leading-[72px]',
        'h1-medium': 'text-[64px] font-medium font-manrope leading-[72px]',
        'h2-medium': 'text-[56px] font-medium font-manrope leading-[64px]',
        'h3-medium': 'text-[40px] font-medium font-manrope leading-[48px]',
        'h4-medium': 'text-[24px] font-medium font-manrope leading-[34px]',
        button: 'text-[18px] font-semibold font-manrope leading-[24px]',
        text: 'text-[18px] font-normal font-manrope leading-[28px]',
        caption: 'text-[16px] font-semibold font-manrope leading-[28px]',
        label: 'text-[16px] font-semibold font-manrope leading-[28px]',
      },
      tablet: {
        'h1-bold': 'text-[40px] font-bold font-manrope leading-[48px]',
        'h1-medium': 'text-[40px] font-medium font-manrope leading-[44px]',
        'h2-medium': 'text-[36px] font-medium font-manrope leading-[44px]',
        'h3-medium': 'text-[24px] font-medium font-manrope leading-[30px]',
        'h4-medium': 'text-[20px] font-medium font-manrope leading-[26px]',
        button: 'text-[16px] font-semibold font-manrope leading-[24px]',
        text: 'text-[16px] font-medium font-manrope leading-[24px]',
        caption: 'text-[12px] font-semibold font-manrope leading-[16px]',
        label: 'text-[12px] font-semibold font-manrope leading-[16px]',
      },
      mobile: {
        'h1-bold': 'text-[32px] font-bold font-manrope leading-[32px]',
        'h1-medium': 'text-[32px] font-medium font-manrope leading-[32px]',
        'h2-medium': 'text-[24px] font-medium font-manrope leading-[24px]',
        'h3-medium': 'text-[22px] font-medium font-manrope leading-[22px]',
        'h4-medium': 'text-[18px] font-medium font-manrope leading-[24px]',
        button: 'text-[16px] font-semibold font-manrope leading-[16px]',
        text: 'text-[14px] font-medium font-manrope leading-[22px]',
        caption: 'text-[12px] font-semibold font-manrope leading-[12px]',
        label: 'text-[12px] font-semibold font-manrope leading-[12px]',
      },
    };

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
