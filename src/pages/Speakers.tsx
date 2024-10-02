import { FC } from 'react';
import { ProductPages } from './ProductPages';

export const Speakers: FC = () => {
  return (
    <main className="pb-28 sm:pb-24 md:pb-48 ">
      <ProductPages
        product="speakers"
        productsToDisplaySlug={['zx9-speaker', 'zx7-speaker']}
      />
    </main>
  );
};
