'use client';

import type React from 'react';
import { type ReactNode, useEffect, useState } from 'react';
import { motion, type Variants } from 'framer-motion'; // Импортируем motion и Variants

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

interface TypographyAnimatedProps {
  variant: TypographyVariant;
  children: ReactNode;
  className?: string;
  // Добавляем опциональные пропсы для настройки анимации, если нужно
  animationAmount?: number; // Количество видимости элемента для срабатывания (0 до 1)
  animationDuration?: number; // Длительность анимации
}

// Определяем варианты анимации для framer-motion
const animationVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(20px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1,
      delay: 2,
      ease: 'easeOut',
    },
  },
} as const;

const TypographyAnimated: React.FC<TypographyAnimatedProps> = ({
  variant,
  children,
  className = '',
  animationAmount = 0.3, // Порог видимости 30% по умолчанию
  animationDuration = 0.5, // Длительность 0.5с по умолчанию
}) => {
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

  // Динамически получаем компонент тега ('h1', 'p', etc.)
  const Tag = getTag();
  // Создаем анимированный компонент на основе динамического тега
  const MotionComponent = motion[Tag];

  // Объединяем все классы
  const combinedClassName = `typography ${getTypographyClasses()} ${className}`.trim();

  // Обновляем вариант 'visible' для установки кастомной длительности
  const currentVisibleVariant = {
    ...animationVariants.visible,
    transition: {
      duration: animationDuration,
      ease: 'easeOut',
    },
  };

  return (
    <MotionComponent
      className={combinedClassName}
      variants={{ ...animationVariants, visible: currentVisibleVariant }} // Передаем варианты анимации
      initial="hidden" // Начальное состояние (невидимо)
      whileInView="visible" // Состояние при появлении в области видимости
      viewport={{
        once: false, // **Важно: Анимация срабатывает каждый раз**
        amount: animationAmount, // Порог видимости для срабатывания анимации
      }}
    >
      {children}
    </MotionComponent>
  );
};

// Экспортируем типы для удобства использования
export type { TypographyVariant };

export default TypographyAnimated;
