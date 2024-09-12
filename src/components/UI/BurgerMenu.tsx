import { FC, useState } from "react";

export const BurgerMenuComp: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="block relative z-20 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`bg-white w-6 h-1 bg-[#0B0B0B] my-1 rounded duration-500 block ${
            isOpen && `rotate-45 translate-y-2`
          }`}
        />
        <span
          className={`bg-white w-6 h-1 bg-[#0B0B0B] my-1 rounded duration-500 block ${
            isOpen && `opacity-0`
          }`}
        />
        <span
          className={`bg-white w-6 h-1 bg-[#0B0B0B] my-1 rounded duration-500 block ${
            isOpen && `-rotate-45 -translate-y-2`
          }`}
        />
      </div>
      <div
        className={`absolute top-0 left-0 block h-[100dvh] w-[100dvw] bg-white text-black z-10 duration-500 ${
          !isOpen && `-translate-x-[100dvw]`
        } flex items-center justify-center`}
      >
        <div>ddd</div>
        <div>ddd</div>
        <div>ddd</div>
        <div>ddd</div>
      </div>
    </>
  );
};
