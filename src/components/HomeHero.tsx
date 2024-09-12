import { FC } from "react";
import { Header } from "./Header";
import { Button } from "./Button";
import { NavLink } from "react-router-dom";

export const HomeHero: FC = () => {
  return (
    <section
      className={`flex justify-center bg-[url('src/assets/home/mobile/image-header.jpg')]
        sm:bg-[url('src/assets/home/tablet/image-header.jpg')]
        md:bg-[url('src/assets/home/desktop/image-hero.jpg')] bg-no-repeat bg-cover w-full`}
    >
      <div className="h-[730px] w-5/6 lg:w-3/4">
        <Header />
        <div className="mt-32 flex flex-col items-center md:items-start">
          <p className="text-white/[.4964] tracking-[10px] ">NEW PRODUCT</p>
          <h1 className="text-white text-[36px] sm:text-[56px] uppercase font-bold leading-[58px] w-[328px] sm:w-[400px] mt-6 max-sm:text-center">
            XX99 Mark II Headphones
          </h1>
          <p className="text-white/[.75] w-[328px] sm:w-[350px] mt-6 leading-[25px] text-[15px] text-center md:text-left">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <NavLink to={`/xx99-mark-two-headphones`}>
            <Button className="mt-10">See Product</Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
