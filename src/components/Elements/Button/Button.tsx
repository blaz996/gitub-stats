import React from 'react';

import './Button.scss';

const BUTTON_SIZES = {
  small: 'btn--sm',
  medium: 'btn--md',
  large: 'btn--lg',
};

const BUTTON_VARIANTS = {
  primary: 'btn--primary',
  inverse: 'btn--inverse',
};

type ButtonProps = {
  children: React.ReactNode;
  size?: keyof typeof BUTTON_SIZES;
  variant?: keyof typeof BUTTON_VARIANTS;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      size = 'medium',
      variant = 'primary',
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`btn ${BUTTON_VARIANTS[variant]} ${BUTTON_SIZES[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
