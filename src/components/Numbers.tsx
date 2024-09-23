import { Minus, Plus } from 'lucide-react';
import { FC } from 'react';
import { CartItem } from '../types/types';
import { useCartStore } from '../core/store/useCartStore';

type NumbersProps = {
  item: CartItem;
};

export const Numbers: FC<NumbersProps> = ({ item }) => {
  const { incrementQuantity, decrementQuantity } = useCartStore(
    (state) => state
  );
  console.log(item);

  return (
    <div className="flex justify-around items-center w-[120px] h-[54px] bg-gray">
      <Minus
        onClick={() => decrementQuantity(item.product.slug)}
        className="cursor-pointer hover:text-primary"
        size={13}
      />
      <p className="mx-2 select-none w-3 font-bold text-[13px] tracking-[1px]">
        {item ? item.quantity : 0}
      </p>
      <Plus
        onClick={() => incrementQuantity(item.product.slug)}
        className="cursor-pointer hover:text-primary"
        size={13}
      />
    </div>
  );
};
