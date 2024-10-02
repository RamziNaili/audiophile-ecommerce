import { FC } from 'react';
import { ProductPages } from './ProductPages';

export const Headphones: FC = () => {
  return (
    <main className="pb-28 sm:pb-24 md:pb-48 ">
      <ProductPages
        product="headphones"
        productsToDisplaySlug={[
          'xx99-mark-two-headphones',
          'xx99-mark-one-headphones',
          'xx59-headphones',
        ]}
      />
    </main>
  );
};
