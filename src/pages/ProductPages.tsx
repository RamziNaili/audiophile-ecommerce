import { FC } from 'react';
import { Header } from '../components/Header';

type Props = {
  product: 'headphones' | 'spekers' | 'earphones';
};

export const ProductPages: FC<Props> = ({ product }) => {
  return (
    <section>
      <div className="bg-black flex justify-center">
        <div className="w-5/6 lg:w-3/4">
          <Header />
        </div>
      </div>
      {product}
    </section>
  );
};
