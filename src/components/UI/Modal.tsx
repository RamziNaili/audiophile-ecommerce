import { FC } from 'react';
import { useCartStore } from '../../core/store/useCartStore';
import { Button } from '../Button';
import { Numbers } from '../Numbers';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
  const { cartItems, totalItems, removeAll, totalPrice } = useCartStore(
    (state) => state
  );

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />

      <div className="absolute right-0 mt-4 bg-white shadow-lg px-7 py-8 w-[300px] rounded-[8px] z-50">
        <div className="flex justify-between mb-4">
          <p>cart ({totalItems})</p>
          <button className="text-red-500" onClick={removeAll}>
            Remove all
          </button>
        </div>
        {cartItems.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <img
              src={'src/assets/cart/image-' + item.product.slug + '.jpg'}
              alt={item.product.name}
              className="w-14"
            />
            <div>
              <p>{item.product.name.split(' ')[0]}</p>
              <p>$ {item.product.price}</p>
            </div>
            <Numbers item={item} />
          </div>
        ))}
        <div className="flex justify-between mb-6">
          <p>total</p>
          <p>$ {totalPrice}</p>
        </div>
        <div className="flex justify-center">
          <Button>checkout</Button>
        </div>
      </div>
    </>
  );
};
