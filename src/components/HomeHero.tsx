import { FC } from "react";
import { Header } from "./Header";

export const HomeHero: FC = () => {
  return (
    <section className="bg-[url('src/assets/home/desktop/image-hero.jpg')] h-[729px]">
      <Header />
      <div className="mt-32 ml-40">
        <p className="text-white text-opacity-0.1">NEW PRODUCT</p>
        <h1>XX99 Mark II Headpho</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button>qqq</button>
      </div>
    </section>
  );
};
