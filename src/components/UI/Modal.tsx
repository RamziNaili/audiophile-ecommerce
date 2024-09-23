// import { FC } from 'react';
// import ReactDOM from 'react-dom';
// import { useCartStore } from '../../core/store/useCartStore';
// import { Button } from '../Button';

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
//   const { cartItems, totalItems } = useCartStore((state) => state);

//   if (!isOpen) return null;

//   return ReactDOM.createPortal(
//     <div className={`relative z-50`}>
//       <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />

//       <div className="relative bg-white px-7 py-8 w-[80dvw] rounded-[8px]">
//         <div className="flex justify-between">
//           <p>cart ({totalItems})</p>
//           <button>Remove all</button>
//         </div>
//         <div className="flex justify-between">
//           <p>total</p>
//           <p>$ {}</p>
//         </div>
//         <div className="flex justify-center">
//           <Button>checkout</Button>
//         </div>
//       </div>
//     </div>,
//     document.body
//   );
// };

import { FC } from 'react';
import { useCartStore } from '../../core/store/useCartStore';
import { Button } from '../Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
  const { totalItems } = useCartStore((state) => state);

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
          <button
            className="text-red-500"
            onClick={() => console.log('remove all')}
          >
            Remove all
          </button>
        </div>
        <div className="flex justify-between mb-6">
          <p>total</p>
          <p>$ {}</p>
        </div>
        <div className="flex justify-center">
          <Button>checkout</Button>
        </div>
      </div>
    </>
  );
};
