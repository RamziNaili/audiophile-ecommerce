import { FC } from "react";
import Circle from "../assets/home/desktop/pattern-circles.svg?react";

export const HomeBestsellers: FC = () => {
  return (
    <section className="flex justify-center mt-32 md:mt-24 xl:mt-40 mb-96 ">
      <div className="bg-primary w-4/5 h-[600px] rounded-[8px] flex flex-col items-center">
        {/* <Circle /> */}
        <img
          src="src/assets/home/desktop/image-speaker-zx9.png"
          alt="speaker-zx9"
          className="w-[175px] h-[205px] mt-14"
        />
        <h2 className="mt-8 text-white font-bold text-[36px] tracking-[1.29px] w-3/5 text-center leading-[40px]">
          ZX9 SPEAKER
        </h2>
        <p className="font-medium text-[15px] mt-[24px] text-white text-center w-4/5 leading-[25px]">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
      </div>
    </section>
  );
};
