import { FC } from 'react';
import { ProductPages } from './ProductPages';

export const Earphones: FC = () => {
  return (
    <main>
      <ProductPages
        product="earphones"
        productsToDisplaySlug={['yx1-earphones']}
      />
    </main>
  );
};
