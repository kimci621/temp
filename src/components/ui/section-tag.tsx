import Typography from '@/components/ui/typography';
import { cn } from '@/lib/utils/cn';

interface SectionTagProps {
  emoji?: string;
  name?: string;
  children?: React.ReactNode;
  className?: string;
  isLight?: boolean;
}

export function SectionTag({ children, emoji, name, className = '', isLight = false }: SectionTagProps) {
  const tagStyles = cn(
    'inline-flex justify-center items-center gap-2.5 py-1 px-3 rounded-xl border',
    isLight
      ? 'bg-(--fill-white) text-(--active-dark) border-(--border-light)'
      : 'bg-(--fill-dark-fill-tag) text-(--text-dark-gray) border-(--active-ultra-dark)',
    className,
  );

  return (
    <div className={tagStyles}>
      {emoji && <Typography variant={'caption'}>{emoji}</Typography>}
      {name && (
        <Typography
          variant={'caption'}
          className={isLight ? 'text-(--text-light-gray)' : 'text-(--text-dark-gray)'}
        >
          {name}
        </Typography>
      )}
      {children}
    </div>
  );
}
