import { FC } from "react";
import Logo from "../assets/shared/desktop/logo.svg?react";
import Cart from "../assets/shared/desktop/icon-cart.svg?react";
import BurgerMenu from "../assets/shared/tablet/icon-hamburger.svg?react";

export const Header: FC = () => {
  return (
    <section className="flex justify-center bg-black h-24">
      <div className="flex items-center justify-between w-3/4 border-b">
        <div className="flex items-center gap-10">
          <BurgerMenu className="md:hidden" />
          <Logo className="cursor-pointer" />
        </div>
        <nav className="flex text-white uppercase lg:gap-8 gap-3 max-md:hidden">
          <p className="hover:text-primary font-bold cursor-pointer">home</p>
          <p className="hover:text-primary font-bold cursor-pointer">
            headphones
          </p>
          <p className="hover:text-primary font-bold cursor-pointer">
            speakers
          </p>
          <p className="hover:text-primary font-bold cursor-pointer">
            earphones
          </p>
        </nav>
        <Cart className="cursor-pointer" />
      </div>
    </section>
  );
};
