import { FC } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label: string;
}

export const Input: FC<InputProps> = ({ placeholder, label }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2.5" htmlFor={label}>
        {label}
      </label>
      <input
        id={label}
        placeholder={placeholder}
        className="w-[310px] h-[56px] pl-[24px] rounded outline-none border border-[#CFCFCF] hover:border-primary focus:border-primary caret-primary"
      ></input>
    </div>
  );
};
