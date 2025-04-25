import Typography from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import { memo } from 'react';

export const SliderItem = memo(function SliderItem({
  title,
  isActive,
  onClick,
  className,
}: { title: string; id: string; isActive: boolean; onClick?: () => void; className?: string }) {
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div
      className={cn(
        'cursor-pointer p-2 xl:p-4 rounded-[8px] xl:rounded-[10px] flex items-center justify-center transition-all duration-300 ease-out',
        'text-[18px] font-[500] leading-[24px] md:text-[20px] md:font-[600] xl:text-[24px] xl:leading-[32px] text-center',
        isActive ? 'bg-(--active-green-light) text-(--fill-white) is-active' : 'bg-(--fill-white) text-(--text-light)',
        className,
      )}
      onClick={onClick}
    >
      <Typography variant={'h4-medium'}>{title}</Typography>
    </div>
  );
});
