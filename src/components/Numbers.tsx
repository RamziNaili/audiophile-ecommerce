import { Minus, Plus } from "lucide-react";
import { FC, useState } from "react";

export const Numbers: FC = () => {
  const [number, setNumber] = useState(0);

  const decrement = () => {
    setNumber((prevNumber) => (prevNumber > 0 ? prevNumber - 1 : 0));
  };

  const increment = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  return (
    <div className="flex justify-around items-center w-[120px] h-[48px] bg-gray">
      <Minus
        onClick={decrement}
        className="cursor-pointer hover:text-primary"
        size={13}
      />
      <p className="mx-2 select-none w-3">{number}</p>
      <Plus
        onClick={increment}
        className="cursor-pointer hover:text-primary"
        size={13}
      />
    </div>
  );
};
