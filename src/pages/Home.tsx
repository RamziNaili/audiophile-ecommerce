import { FC } from 'react';
import { HomeHero } from '../components/HomeHero';
import { HomeProducts } from '../components/HomeProducts';

export const Home: FC = () => {
  return (
    <main>
      <HomeHero />
      <HomeProducts />
    </main>
  );
};
