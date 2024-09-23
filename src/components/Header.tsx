import { FC, useState } from 'react';
import Logo from '../assets/shared/desktop/logo.svg?react';
import Cart from '../assets/shared/desktop/icon-cart.svg?react';
import { NavLink } from 'react-router-dom';
import { BurgerMenuComp } from './UI/BurgerMenuComp';
import { Modal } from './UI/Modal';

export const Header: FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <section className={`flex justify-center h-24 border-b border-white/[.2]`}>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-10">
          <BurgerMenuComp />
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
        <div className="relative">
          <Cart className="cursor-pointer max-sm:mr-6" onClick={openModal} />
          {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
        </div>
      </div>
    </section>
  );
};
