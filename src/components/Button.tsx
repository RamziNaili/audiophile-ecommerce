import { ChevronRight } from 'lucide-react';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'full' | 'outline' | 'ghost';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'full',
  children,
  className,
}) => {
  const baseStyles = ' uppercase font-bold tracking-[1px]';

  const variantStyles = {
    full: 'bg-primary hover:bg-light_orange text-white border-none px-[30px] py-[15px]',
    outline:
      'text-black hover:text-white hover:bg-black border px-[30px] py-[15px]',
    ghost:
      'px-[13px] py-[15px] flex items-center text-black/50 hover:text-primary',
  };

  const buttonClassNames = `${baseStyles} ${variantStyles[variant]} ${className ?? ''}`;

  return (
    <button className={buttonClassNames}>
      {children}
      {variant === 'ghost' && <ChevronRight color="#D87D4A" />}
    </button>
  );
};
