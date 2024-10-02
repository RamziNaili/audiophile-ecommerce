import { FC } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label: string;
  inputClassName?: string;
}

export const Input: FC<InputProps> = ({
  placeholder,
  label,
  className,
  inputClassName,
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="mb-2.5" htmlFor={label}>
        {label}
      </label>
      <input
        id={label}
        placeholder={placeholder}
        className={`h-[56px] pl-[24px] rounded-[8px] outline-none border border-[#CFCFCF] hover:border-primary focus:border-primary caret-primary ${inputClassName}`}
      />
    </div>
  );
};
