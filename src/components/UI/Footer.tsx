import { FC } from 'react';
import Logo from '../../assets/shared/desktop/logo.svg?react';
import Facebook from '../../assets/shared/desktop/icon-facebook.svg?react';
import Instagram from '../../assets/shared/desktop/icon-instagram.svg?react';
import Twiter from '../../assets/shared/desktop/icon-twitter.svg?react';
import { NavLink } from 'react-router-dom';

export const Footer: FC = () => {
  return (
    <section className="bg-black flex justify-center">
      <div className="grid grid-cols-1 max-sm:justify-items-center sm:px-10">
        <span className="bg-primary block h-1 w-24" />
        <Logo className="mt-12" />
        <div className="text-white mt-12 flex max-sm:flex-col gap-4">
          <NavLink
            to=""
            className="text-center uppercase font-bold leading-[25px] tracking-[2px] text-[13px]"
          >
            home
          </NavLink>
          <NavLink
            to="/headphones"
            className="text-center uppercase font-bold leading-[25px] tracking-[2px] text-[13px]"
          >
            headphones
          </NavLink>
          <NavLink
            to="/speakers"
            className="text-center uppercase font-bold leading-[25px] tracking-[2px] text-[13px]"
          >
            speakers
          </NavLink>
          <NavLink
            to="/earphones"
            className="text-center uppercase font-bold leading-[25px] tracking-[2px] text-[13px]"
          >
            earphones
          </NavLink>
        </div>
        <p className="text-white/[.5] max-sm:text-center mt-12 w-5/6">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="sm:flex justify-between">
          <p className="text-white/[.5] text-center mt-12">
            Copyright 2021. All Rights Reserved
          </p>
          <div className="flex justify-center items-center gap-4 mt-12 mb-9">
            <Facebook />
            <Twiter />
            <Instagram />
          </div>
        </div>
      </div>
    </section>
  );
};
