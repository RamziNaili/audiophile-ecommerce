import { FC, useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useCartStore } from '../../core/store/useCartStore';
import { Button } from '../Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  anchorRef: React.RefObject<HTMLButtonElement>;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, anchorRef }) => {
  const [position, setPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  const modalRef = useRef<HTMLDivElement>(null);
  const { cartItems, totalItems } = useCartStore((state) => state);

  useEffect(() => {
    if (anchorRef.current && modalRef.current && isOpen) {
      const rect = anchorRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 10,
        left: rect.left + window.scrollX - 310,
      });
    }
  }, [isOpen, anchorRef]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className={`fixed z-50`}
      style={{ left: position.left, top: position.top }}
    >
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />

      <div
        ref={modalRef}
        className="relative bg-white px-7 py-8 w-[80dvw] rounded-[8px]"
      >
        <div className="flex justify-between">
          <p>cart ({totalItems})</p>
          <button>Remove all</button>
        </div>
        <div className="flex justify-between">
          <p>total</p>
          <p>$ {}</p>
        </div>
        <div className="flex justify-center">
          <Button>checkout</Button>
        </div>
      </div>
    </div>,
    document.body
  );
};
