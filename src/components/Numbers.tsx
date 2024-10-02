import { Minus, Plus } from 'lucide-react';
import { FC } from 'react';
import { CartItem } from '../types/types';
import { useCartStore } from '../core/store/useCartStore';

type NumbersProps = {
  item?: CartItem;
  counter?: number;
  setCounter?: (counter: number) => void;
  checkoutPopup?: boolean;
};

export const Numbers: FC<NumbersProps> = ({
  item,
  counter,
  setCounter,
  checkoutPopup = false,
}) => {
  const { incrementQuantity, decrementQuantity } = useCartStore(
    (state) => state
  );

  return (
    <div
      className={`flex justify-around items-center bg-gray ${!checkoutPopup ? 'w-[120px] h-[48px]' : 'h-8 w-24'}`}
    >
      <Minus
        onClick={() => {
          if (item) return decrementQuantity(item.product.slug);
          if (counter && setCounter && counter > 1) setCounter(counter - 1);
        }}
        className="cursor-pointer hover:text-primary"
        size={10}
        color="gray"
      />
      <p className="mx-2 select-none w-3 font-bold text-[13px] tracking-[1px]">
        {item ? item.quantity : counter}
      </p>
      <Plus
        onClick={() => {
          if (item) return incrementQuantity(item.product.slug);
          if (counter && setCounter) setCounter(counter + 1);
        }}
        className="cursor-pointer hover:text-primary"
        size={10}
        color="gray"
      />
    </div>
  );
};
