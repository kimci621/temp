'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import Typography from '@/components/ui/typography';

interface CheckboxPropsWithRef extends React.ComponentRef<typeof CheckboxPrimitive.Root> {
  label?: string;
  textClassName?: string;
}

interface CheckboxPropsWithoutRef extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label?: string;
  textClassName?: string;
}

const Checkbox = React.forwardRef<CheckboxPropsWithRef, CheckboxPropsWithoutRef>(
  ({ className, textClassName = '', ...props }, ref) => {
    return (
      <div className={'flex items-center gap-3'}>
        <CheckboxPrimitive.Root
          ref={ref}
          className={cn(
            'peer h-6 w-6 shrink-0 rounded-sm border border-(--border-light) ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground cursor-pointer',
            className,
          )}
          {...props}
        >
          <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center')}>
            <Check className={cn('h-4 w-4 text-(--text-light)')} />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>

        {props.label && (
          <Typography
            variant={'label'}
            className={cn('text-(--text-light)', textClassName)}
          >
            {props.label}
          </Typography>
        )}
      </div>
    );
  },
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
