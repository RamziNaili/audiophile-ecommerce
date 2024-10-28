import { FC } from 'react';
import BestGear from '../assets/shared/mobile/image-best-gear.jpg';

export const HomeBenefits: FC = () => {
  return (
    <section className="mt-28 md:mt-40 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center md:w-3/4">
        <img
          src={BestGear}
          alt="best-gear"
          className="w-5/6 rounded-[8px] h-auto md:order-2"
        />
        <div className="flex flex-col items-center justify-center w-5/6">
          <h3 className="mt-10 text-center uppercase font-bold text-[28px] tracking-[1px]">
            Bringing you the <span className="text-primary">best </span>
            audio gear
          </h3>
          <p className="mt-8 text-center text-black/[.5] leading-[25px] font-medium text-[15px]">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </section>
  );
};
