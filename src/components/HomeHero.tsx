import { FC } from 'react';
import { Header } from './Header';
import { Button } from './Button';
import { NavLink } from 'react-router-dom';

import HomeHeroMobile from '../assets/home/mobile/image-header.jpg';
import HomeHeroTablet from '../assets/home/tablet/image-header.jpg';
import HomeHeroDesktop from '../assets/home/desktop/image-hero.jpg';

export const HomeHero: FC = () => {
  return (
    <section className="relative flex justify-center w-full h-[730px]">
      <img
        src={HomeHeroMobile}
        alt="Home Hero Mobile"
        className="absolute inset-0 w-full h-full object-cover sm:hidden"
      />
      <img
        src={HomeHeroTablet}
        alt="Home Hero Tablet"
        className="absolute inset-0 w-full h-full object-cover hidden sm:block md:hidden"
      />
      <img
        src={HomeHeroDesktop}
        alt="Home Hero Desktop"
        className="absolute w-full h-full object-cover hidden md:block"
      />

      <div className="z-10 w-5/6 lg:w-3/4 text-center md:text-left">
        <Header />
        <div className="mt-32 flex flex-col items-center md:items-start">
          <p className="text-white/[.4964] tracking-[10px]">NEW PRODUCT</p>
          <h1 className="text-white text-[36px] sm:text-[56px] uppercase font-bold leading-[58px] w-[328px] sm:w-[400px] mt-6">
            XX99 Mark II Headphones
          </h1>
          <p className="text-white/[.75] w-[328px] sm:w-[350px] mt-6 leading-[25px] text-[15px]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <NavLink to={`/xx99-mark-two-headphones`} className="mt-10">
            <Button>See Product</Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
