import { FC } from "react";
import { Button } from "./Button";

export const HomeBestsellers: FC = () => {
  return (
    <section className="flex flex-col items-center mt-32 md:mt-24 xl:mt-40 mb-96 ">
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
        <p className="font-medium text-[15px] mt-[24px] text-white/[.75] text-center w-4/5 leading-[25px]">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button className="mt-6" variant="outlineReverse">
          see product
        </Button>
      </div>
      <div className="bg-[url('src/assets/home/mobile/image-speaker-zx7.jpg')] rounded-[8px] mt-6 w-4/5 h-[330px] pl-6 flex flex-col justify-center gap-8 bg-cover bg-no-repeat">
        <h2 className="font-bold text-[28px] tracking-[2px]">ZX7 SPEAKER</h2>
        <Button variant="outline" className="w-fit">
          see product
        </Button>
      </div>
      <div className="w-4/5 h-[200px] mt-6 rounded-[8px] bg-[url('src/assets/home/mobile/image-earphones-yx1.jpg')] bg-cover" />
      <div className="mt-6 bg-gray pl-6 w-4/5 rounded-[8px]">
        <h2 className="pt-10 font-bold text-[28px] tracking-[2px]">
          YX1 EARPHONES
        </h2>
        <Button className="mt-8 mb-10" variant="outline">
          see product
        </Button>
      </div>
    </section>
  );
};
