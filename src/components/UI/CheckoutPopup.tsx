import { FC } from 'react';
import { useCartStore } from '../../core/store/useCartStore';
import { NavLink } from 'react-router-dom';
import { Button } from '../Button';
import { Numbers } from '../Numbers';

import Xx59Headphones from '../../assets/cart/image-xx59-headphones.jpg';
import Xx99MarkOneHeadphones from '../../assets/cart/image-xx99-mark-one-headphones.jpg';
import Xx99MarkTwoHeadphones from '../../assets/cart/image-xx99-mark-two-headphones.jpg';
import Yx1Earphones from '../../assets/cart/image-yx1-earphones.jpg';
import Zx7Speaker from '../../assets/cart/image-zx7-speaker.jpg';
import Zx9Speaker from '../../assets/cart/image-zx9-speaker.jpg';

export const CheckoutPopup: FC = () => {
  const { cartItems, totalItems, removeAll, totalPrice } = useCartStore(
    (state) => state
  );

  const images: Record<string, string> = {
    'xx59-headphones': Xx59Headphones,
    'xx99-mark-one-headphones': Xx99MarkOneHeadphones,
    'xx99-mark-two-headphones': Xx99MarkTwoHeadphones,
    'yx1-earphones': Yx1Earphones,
    'zx7-speaker': Zx7Speaker,
    'zx9-speaker': Zx9Speaker,
  };

  return (
    <div className="absolute right-0 mt-4 bg-white shadow-lg px-7 py-8 w-[75dvw] sm:w-[55dvw] md:w-[45dvw] lg:w-[375px] rounded-[8px] z-50">
      <div className="flex justify-between mb-4">
        <p className="font-bold text-[18px] tracking-[1.29px] uppercase">
          cart ({totalItems})
        </p>
        <button
          className="font-medium text-[15px] leading-[25px] text-black/[.5] underline hover:text-primary"
          onClick={removeAll}
        >
          Remove all
        </button>
      </div>
      <div className="flex flex-col gap-6 mb-8">
        {cartItems.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <div className="flex gap-4">
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
            <Numbers item={item} checkoutPopup={true} />
          </div>
        ))}
      </div>
      <div className="flex justify-between mb-6 mt">
        <p className="font-medium text-[15px] leading-[25px] text-black/[.5] uppercase">
          total
        </p>
        <p className="font-bold text-[18px]">
          $ {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>
      </div>
      <div className="flex justify-center">
        <NavLink to="/checkout">
          <Button>checkout</Button>
        </NavLink>
      </div>
    </div>
  );
};
