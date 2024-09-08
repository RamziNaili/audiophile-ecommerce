import { FC } from 'react';
import { Header } from './Header';
import { Button } from './Button';

export const HomeHero: FC = () => {
  return (
    <section className="flex justify-center bg-[url('src/assets/home/desktop/image-hero.jpg')] ">
      <div className="h-[729px] w-3/4">
        <Header />
        <div className="mt-32">
          <p className="text-white/[.4964] tracking-[10px] ">NEW PRODUCT</p>
          <h1 className="text-white text-[56px] uppercase font-bold leading-[58px] w-[400px] mt-6">
            XX99 Mark II Headphones
          </h1>
          <p className="text-white/[.75] w-[350px] mt-6 leading-[25px] text-[15px]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button className="mt-10">See Product</Button>
        </div>
      </div>
    </section>
  );
};