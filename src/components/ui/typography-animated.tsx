'use client';

import type React from 'react';
import { type ReactNode, useEffect, useState } from 'react';
import { motion, type Variants } from 'framer-motion'; // Импортируем motion и Variants
import { TypographyClasses } from '@/lib/consts/typography';

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
  isOnce?: boolean; // Анимация срабатывает только один раз
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
  isOnce = true, // Анимация срабатывает только один раз,
}) => {
  const [screenSize, setScreenSize] = useState<ScreenSize>('desktop');

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
        once: isOnce, // Важно: Анимация срабатывает каждый раз при true
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
