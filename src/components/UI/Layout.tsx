import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';

export const Layout: FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
