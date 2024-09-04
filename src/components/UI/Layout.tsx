import { FC } from "react";
import { Outlet } from "react-router-dom";

export const Layout: FC = () => {
  return (
    <div>
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};
