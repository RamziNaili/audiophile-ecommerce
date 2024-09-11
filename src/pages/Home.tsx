import { FC } from 'react';
import { HomeHero } from '../components/HomeHero';
import { HomeCategorys } from '../components/HomeCategorys';
import { HomeBestsellers } from '../components/HomeBestsellers';
import { HomeBenefits } from '../components/HomeBenefits';

export const Home: FC = () => {
  return (
    <main>
      <HomeHero />
      <HomeCategorys />
      <HomeBestsellers />
      <HomeBenefits />
    </main>
  );
};
