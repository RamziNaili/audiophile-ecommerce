import { FC } from 'react';
import { ProductPages } from './ProductPages';

export const Earphones: FC = () => {
  return (
    <main className="pb-28 sm:pb-24 md:pb-48 ">
      <ProductPages
        product="earphones"
        productsToDisplaySlug={['yx1-earphones']}
      />
    </main>
  );
};
