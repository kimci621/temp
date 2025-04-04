import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import type React from 'react';

const buttonVariants = cva(
  "text-[16px] font-semibold font-manrope cursor-pointer leading-[16px] relative overflow-hidden inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-(--active-green) hover:bg-(--active-green)/80 text-(--active-green-ultra-light)',
        secondary:
          'bg-(--active-green-ultra-light) hover:bg-(--active-green-ultra-light)/60 border border-(--border-green-light) text-(--active-dark)',
        ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
        white: 'bg-(--fill-white) hover:bg-(--fill-white)/80 text-(--active-green-ultra-light)',
      },
      size: {
        default: 'h-[40px] xl:h-[48px] px-4 py-2 xl:px-6 xl:py-3',
        sm: 'h-[48px] xl:h-[52px] px-4 py-2 xl:px-6 xl:py-3',
        icon: 'size-[40px] xl:size-[48px] p-2 xl:p-3',
      },
      rounded: {
        less: 'rounded-[10px]',
        default: 'rounded-[12px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function Button({
  className,
  variant,
  size,
  rounded,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className, rounded }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
