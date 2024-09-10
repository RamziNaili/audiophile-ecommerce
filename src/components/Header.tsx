import { FC } from 'react';
import Logo from '../assets/shared/desktop/logo.svg?react';
import Cart from '../assets/shared/desktop/icon-cart.svg?react';
import BurgerMenu from '../assets/shared/tablet/icon-hamburger.svg?react';
import { NavLink } from 'react-router-dom';

export const Header: FC = () => {
  return (
    <section className={`flex justify-center h-24 `}>
      <div className="flex items-center justify-between w-full border-b border-white border-opacity-20">
        <div className="flex items-center gap-10">
          <BurgerMenu className="md:hidden" />
          <Logo />
        </div>
        <nav className="flex text-white uppercase lg:gap-8 gap-3 max-md:hidden">
          <NavLink
            to="/"
            className="hover:text-primary font-bold cursor-pointer"
          >
            home
          </NavLink>
          <NavLink
            to="/headphones"
            className="hover:text-primary font-bold cursor-pointer"
          >
            headphones
          </NavLink>
          <NavLink
            to="/speakers"
            className="hover:text-primary font-bold cursor-pointer"
          >
            speakers
          </NavLink>
          <NavLink
            to="/earphones"
            className="hover:text-primary font-bold cursor-pointer"
          >
            earphones
          </NavLink>
        </nav>
        <Cart className="cursor-pointer" />
      </div>
    </section>
  );
};
