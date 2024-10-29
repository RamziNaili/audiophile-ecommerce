import { FC, useEffect, useState } from 'react';
import { Button } from '../Button';
import OrderConfirmation from '@/assets/checkout/icon-order-confirmation.svg?react';
import { useCartStore } from '../../core/store/useCartStore';

import xx59Headphones from '../../assets/cart/image-xx59-headphones.jpg';
import xx99MarkOneHeadphones from '../../assets/cart/image-xx99-mark-one-headphones.jpg';
import xx99MarkTwoHeadphones from '../../assets/cart/image-xx99-mark-two-headphones.jpg';
import yx1Earphones from '../../assets/cart/image-yx1-earphones.jpg';
import zx7Speaker from '../../assets/cart/image-zx7-speaker.jpg';
import zx9Speaker from '../../assets/cart/image-zx9-speaker.jpg';
import { useNavigate } from 'react-router-dom';

export const Thanks: FC = () => {
  const { cartItems, totalPrice, removeAll } = useCartStore((state) => state);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const images: Record<string, string> = {
    'xx59-headphones': xx59Headphones,
    'xx99-mark-one-headphones': xx99MarkOneHeadphones,
    'xx99-mark-two-headphones': xx99MarkTwoHeadphones,
    'yx1-earphones': yx1Earphones,
    'zx7-speaker': zx7Speaker,
    'zx9-speaker': zx9Speaker,
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (cartItems.length === 0) return;

  return (
    <div className="absolute w-screen h-screen top-0 left-0 flex items-center justify-center">
      <div className="bg-white z-50 p-8 rounded-[8px] w-5/6 md:w-4/5 max-w-[600px]">
        <OrderConfirmation className="mb-5" />
        <h1 className="uppercase font-bold leading-[28px] tracking-[0.86px] text-[24px] mb-4">
          thank you <br /> for your order
        </h1>
        <p className="font-medium text-[15px] leading-[25px] text-black/[.5] mb-6">
          You will receive an email confirmation shortly.
        </p>
        <div className="bg-gray rounded-[8px] mb-6 flex max-md:flex-col justify-between">
          <div className="w-full">
            <div className="flex items-center justify-between px-6 pt-6 pb-3">
              <div className="flex items-center gap-4">
                <img
                  src={images[cartItems[0].product.slug]}
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
            {isOpen && (
              <div>
                {cartItems.map((item, idx) => {
                  if (idx === 0) return;
                  return (
                    <div key={idx}>
                      <div className="flex items-center justify-between px-6 pt-6 pb-3">
                        <div className="flex items-center gap-4">
                          <img
                            src={images[item.product.slug]}
                            alt={item.product.name}
                            className="w-14 rounded-[8px]"
                          />
                          <div>
                            <p className="font-bold text-[15px] leading-[25px]">
                              {item.product.name.split(' ')[0]}
                            </p>
                            <p className="font-bold text-[14px] leading-[25px] text-black/[.5]">
                              $ {item.product.price}
                            </p>
                          </div>
                        </div>
                        <p className="font-bold text-[15px] leading-[25px] text-black/[.5]">
                          x {item.quantity}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            {cartItems.length > 1 && (
              <div
                className="flex flex-col items-center cursor-pointer"
                onClick={handleClick}
              >
                <span className="block h-px bg-black/[.08] w-4/5" />
                {isOpen ? (
                  <p className="mt-3 mb-6 font-bold text-[12px] tracking-[-0.21px] text-black/[.5]">
                    View less
                  </p>
                ) : (
                  <p className="mt-3 mb-6 font-bold text-[12px] tracking-[-0.21px] text-black/[.5]">
                    and {cartItems.length - 1} other item(s)
                  </p>
                )}
              </div>
            )}
          </div>
          <div className="bg-black px-6 py-4 max-md:rounded-b-[8px] md:rounded-r-[8px] flex flex-col justify-center md:w-2/5">
            <p className="text-white/[.5] font-medium text-[15px] leading-[25px] uppercase mb-2">
              grand total
            </p>
            <p className="text-white font-bold text-[18px] ">
              $ {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </p>
          </div>
        </div>
        <Button
          className="w-full"
          onClick={() => {
            removeAll();
            navigate('/');
          }}
        >
          back to home
        </Button>
      </div>
    </div>
  );
};
