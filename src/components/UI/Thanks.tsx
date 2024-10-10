import { FC } from 'react';
import { Button } from '../Button';
import TT from '@/assets/checkout/icon-order-confirmation.svg?react';

export const Thanks: FC = () => {
  return (
    <div className="absolute w-screen h-screen top-0 left-0 flex items-center justify-center">
      <div className="bg-white z-50 p-8 rounded-[8px]">
        <TT className="mb-5" />
        <h1 className="uppercase font-bold leading-[28px] tracking-[0.86px] text-[24px] mb-4">
          thank you <br /> for your order
        </h1>
        <p className="font-medium text-[15px] leading-[25px] text-black/[.5]">
          You will receive an email confirmation shortly.
        </p>
        <div></div>
        <Button className="w-full">back to home</Button>
      </div>
    </div>
  );
};
