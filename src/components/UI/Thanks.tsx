import { FC } from 'react';
import { Button } from '../Button';
import OrderConfirmation from '@/assets/checkout/icon-order-confirmation.svg?react';
import { useCartStore } from '../../core/store/useCartStore';

export const Thanks: FC = () => {
  const { cartItems /* totalItems, totalPrice */ } = useCartStore(
    (state) => state
  );

  return (
    <div className="absolute w-screen h-screen top-0 left-0 flex items-center justify-center">
      <div className="bg-white z-50 p-8 rounded-[8px]">
        <OrderConfirmation className="mb-5" />
        <h1 className="uppercase font-bold leading-[28px] tracking-[0.86px] text-[24px] mb-4">
          thank you <br /> for your order
        </h1>
        <p className="font-medium text-[15px] leading-[25px] text-black/[.5] mb-6">
          You will receive an email confirmation shortly.
        </p>
        <div className="bg-gray rounded-[8px] mb-6">
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center gap-4">
              <img
                src={`src/assets/cart/image-${cartItems[0].product.slug}.jpg`}
                alt={cartItems[0].product.name}
                className="w-14 rounded-[8px]"
              />
              <div>
                <p className="font-bold text-[15px] leading-[25px]">
                  {cartItems[0].product.name.split(' ')[0]}
                </p>
                <p className="font-bold text-[14px] leading-[25px] text-black/[.5]">
                  $ {cartItems[0].product.price}
                </p>
              </div>
            </div>
            <p className="font-bold text-[15px] leading-[25px] text-black/[.5]">
              x {cartItems[0].quantity}
            </p>
          </div>
        </div>
        <Button className="w-full">back to home</Button>
      </div>
    </div>
  );
};
