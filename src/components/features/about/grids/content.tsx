import Typography from '@/components/ui/typography';
import type { BusinessCase } from '@/lib/consts/businessCases';
import { cn } from '@/lib/utils';
import { memo } from 'react';
import styles from './styles.module.css';

export const SliderContentItem = memo(function SliderContentItem({
  className,
  content,
}: { content: BusinessCase; className?: string }) {
  const cardStyle =
    'bg-(--fill-white) p-3 md:p-4 rounded-[12px] xl:rounded-[16px] border border-(--border-light) flex flex-col gap-2 md:gap-3 xl:gap-6';

  return (
    <div className={cn(styles.GridCardsWrapper, className)}>
      {content.items.map((i, idx) => (
        <div
          key={idx.toString()}
          className={cn(cardStyle, `GridCard${idx + 1}`)}
        >
          <div className={'flex md:flex-col gap-3 xl:gap-6'}>
            <Typography
              variant={'h4-medium'}
              className={'text-(--active-green-light)'}
            >
              0{idx + 1}
            </Typography>

            <Typography
              variant={'h4-medium'}
              className={'text-(--text-light)'}
            >
              {i.title}
            </Typography>
          </div>

          <Typography
            variant={'text'}
            className={'text-(--text-light)'}
          >
            {i.description}
          </Typography>
        </div>
      ))}
    </div>
  );
});
