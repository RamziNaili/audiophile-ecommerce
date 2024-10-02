import { ChevronRight } from 'lucide-react';
import { FC } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'full' | 'outline' | 'outlineReverse' | 'ghost';
}

export const Button: FC<ButtonProps> = ({
  variant = 'full',
  children,
  className,
  onClick,
}) => {
  const baseStyles = 'uppercase font-bold tracking-[1px] w-fit';

  const variantStyles = {
    full: 'bg-primary hover:bg-light_orange text-white border-none px-[30px] py-[12px]',
    outline:
      'text-black hover:text-white hover:bg-black border px-[30px] py-[12px] hover:border-black',
    outlineReverse:
      'text-white hover:text-black bg-black hover:bg-white border px-[30px] py-[12px] border-none',
    ghost:
      'px-[13px] py-[12px] flex items-center text-black/50 hover:text-primary',
  };

  const buttonClassNames = `${baseStyles} ${variantStyles[variant]} ${className ?? ''}`;

  return (
    <button className={buttonClassNames} onClick={onClick}>
      {children}
      {variant === 'ghost' && <ChevronRight color="#D87D4A" />}
    </button>
  );
};
