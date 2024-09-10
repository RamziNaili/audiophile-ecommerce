import { FC } from 'react';
import { Header } from '../components/Header';

type Props = {
  product: 'headphones' | 'speakers' | 'earphones';
};

export const ProductPages: FC<Props> = ({ product }) => {
  return (
    <section>
      <div className="bg-black">
        <div className="flex items-center justify-center">
          <div className="w-5/6 lg:w-3/4">
            <Header />
          </div>
        </div>
        <h1 className="flex justify-center bg-black text-white py-8 uppercase font-bold text-[28px] tracking-[2px]">
          {product}
        </h1>
      </div>
    </section>
  );
};
