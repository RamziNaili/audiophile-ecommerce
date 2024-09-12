import { FC } from 'react';
import { ProductPages } from './ProductPages';

export const Speakers: FC = () => {
  return (
    <main>
      <ProductPages
        product="speakers"
        productsToDisplaySlug={['zx9-speaker', 'zx7-speaker']}
      />
    </main>
  );
};
