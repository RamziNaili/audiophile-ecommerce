import { FC, useEffect, useState } from 'react';
import { HomeCategorys } from '../HomeCategorys';

export const BurgerMenuComp: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden'); // Disable scroll
    } else {
      document.body.classList.remove('overflow-hidden'); // Enable scroll
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`block relative z-20 cursor-pointer md:hidden max-sm:ml-6`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`${isOpen ? 'bg-black rotate-45 translate-y-2' : 'bg-white'} w-6 h-1 my-1 rounded duration-500 block`}
        />
        <span
          className={`${isOpen ? 'bg-black opacity-0' : 'bg-white'} w-6 h-1 my-1 rounded duration-500 block`}
        />
        <span
          className={`${isOpen ? 'bg-black -rotate-45 -translate-y-2' : 'bg-white '} w-6 h-1 my-1 rounded duration-500 block`}
        />
      </div>
      <div
        className={`absolute top-0 left-0 block h-[100dvh] w-[100dvw] bg-white text-black z-10 duration-500 ${
          !isOpen && `-translate-x-[100dvw]`
        } flex items-center justify-center`}
      >
        <HomeCategorys />
      </div>
    </>
  );
};
