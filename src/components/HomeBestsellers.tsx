import { FC } from "react";
import { Button } from "./Button";
import { NavLink } from "react-router-dom";

export const HomeBestsellers: FC = () => {
  return (
    <section className="flex flex-col items-center mt-32 md:mt-24 xl:mt-40">
      <div className="bg-primary w-5/6 md:w-3/4 rounded-[8px] grid grid-cols-1 md:grid-cols-2 items-center justify-items-center">
        {/* <Circle /> */}
        <img
          src="src/assets/home/desktop/image-speaker-zx9.png"
          alt="speaker-zx9"
          className="w-[175px] h-[205px] mt-14 md:h-3/4 md:self-end"
        />
        <div className="flex flex-col items-center md:items-start">
          <h2 className="mt-8 text-white font-bold text-[36px] md:text-[56px] tracking-[1.29px] w-3/5 max-md:text-center leading-[40px] md:leading-[56px]">
            ZX9 SPEAKER
          </h2>
          <p className="font-medium text-[15px] mt-[24px] text-white/[.75] w-[280px] md:w-[350px] leading-[25px] max-md:text-center">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <NavLink to={`/zx9-speaker`} className="mt-6 sm:mt-10 mb-14 sm:mb-16">
            <Button variant="outlineReverse">see product</Button>
          </NavLink>
        </div>
      </div>

      <div className="bg-[url('src/assets/home/mobile/image-speaker-zx7.jpg')] sm:bg-[('src/assets/home/tablet/image-speaker-zx7.jpg')] md:bg-[('src/assets/home/desktop/image-speaker-zx7.jpg')] bg-cover rounded-[8px] mt-6 w-5/6 md:w-3/4 h-[330px] pl-6 md:pl-24 flex flex-col justify-center gap-8">
        <h2 className="font-bold text-[28px] tracking-[2px]">ZX7 SPEAKER</h2>
        <NavLink to={`/zx7-speaker`}>
          <Button variant="outline">see product</Button>
        </NavLink>
      </div>
      <div className="w-full md:w-3/4 flex items-center flex-col md:flex-row md:gap-2.5 lg:gap-7">
        <div className="w-5/6 md:w-full h-[200px] sm:h-[320px] mt-6 rounded-[8px] bg-[url('src/assets/home/mobile/image-earphones-yx1.jpg')] sm:bg-[url('src/assets/home/tablet/image-earphones-yx1.jpg')] md:bg-[url('src/assets/home/desktop/image-earphones-yx1.jpg')] bg-cover" />
        <div className="w-5/6 md:w-full mt-6 bg-gray pl-6 rounded-[8px] h-[200px] sm:h-[320px] flex flex-col justify-center">
          <h2 className="pt-10 font-bold text-[28px] tracking-[2px]">
            YX1 EARPHONES
          </h2>
          <NavLink to={`/yx1-earphones`} className="mt-8 mb-10">
            <Button variant="outline">see product</Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
