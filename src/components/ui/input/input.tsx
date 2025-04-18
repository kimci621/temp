'use client';

import { forwardRef, useState } from 'react';
import Typography from '@/components/ui/typography';
import styles from './input.module.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, label, error, ...props }, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === 'number') {
      const value = e.target.value;
      if (value === '' || !Number.isNaN(Number(value))) {
        props.onChange?.(e);
      }
    } else {
      props.onChange?.(e);
    }
  };

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={props.id}>
          <Typography
            variant="caption"
            className={styles.label}
          >
            {label}
          </Typography>
        </label>
      )}
      <input
        type={type}
        className={`${styles.input} ${error ? styles.inputError : ''} ${className ?? ''}`}
        ref={ref}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleChange}
        {...props}
      />
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
});

Input.displayName = 'Input';

export { Input };
