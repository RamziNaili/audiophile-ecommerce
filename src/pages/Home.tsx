import { FC } from 'react';
import { HomeHero } from '../components/HomeHero';
import { HomeCategorys } from '../components/HomeCategorys';
import { HomeBestsellers } from '../components/HomeBestsellers';
import { HomeBenefits } from '../components/HomeBenefits';

export const Home: FC = () => {
  return (
    <main className="pb-28 sm:pb-24 md:pb-48 ">
      <HomeHero />
      <HomeCategorys />
      <HomeBestsellers />
      <HomeBenefits />
    </main>
  );
};
