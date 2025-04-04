/**
 * Утилита для объединения классов с поддержкой условных классов
 *
 * Пример:
 * ```tsx
 * import { cn } from '@/lib/utils/cn';
 *
 * <div className={cn(
 *   'base-class',
 *   isActive && 'active-class',
 *   {'conditional-class': condition}
 * )}>
 *   Content
 * </div>
 * ```
 */
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
