import { FC } from 'react';

export const HomeBenefits: FC = () => {
  return (
    <section className="mt-28 grid grid-cols-1 justify-items-center mb-96">
      <img
        src="src/assets/shared/mobile/image-best-gear.jpg"
        alt="best-gear"
        className="w-5/6 rounded-[8px] h-auto"
      />
      <h3 className="mt-10 w-5/6 text-center uppercase font-bold text-[28px] tracking-[1px]">
        Bringing you the <span className="text-primary">best </span>
        audio gear
      </h3>
      <p className="w-5/6 mt-8 text-center text-black/[.5] leading-[25px] font-medium text-[15px]">
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </section>
  );
};
