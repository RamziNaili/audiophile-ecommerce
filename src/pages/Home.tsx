import { FC } from "react";
import { HomeHero } from "../components/HomeHero";
import { HomeCategorys } from "../components/HomeCategorys";
import { HomeBestsellers } from "../components/HomeBestsellers";

export const Home: FC = () => {
  return (
    <main>
      <HomeHero />
      <HomeCategorys />
      <HomeBestsellers />
    </main>
  );
};
