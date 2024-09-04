import { FC } from "react";
import { Header } from "../Header";
import { Outlet } from "react-router-dom";

export const Layout: FC = () => {
  return (
    <div>
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};
