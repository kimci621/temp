'use client';

import { useTheme } from 'next-themes';
import { Toaster as Sonner, type ToasterProps } from 'sonner';

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      style={
        {
          '--normal-bg': 'var(--fill-white)',
          '--normal-text': 'var(--text-light)',
          '--normal-border': 'var(--border-green-light)',
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
