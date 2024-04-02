import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavLinkButton = ({ Icon, title, to }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <NavLink
      to={to}
      className={`border-2  rounded-2xl w-4/5 text-lg font-thin p-2 m-2 flex items-center cursor-pointer hover:font-medium hover:bg-orange-300 transition-all hover:scale-95 justify-center ${
        isActive ? " bg-orange-500" : ""
      }`}
    >
      <Icon className="mr-2" />
      <span className={isActive ? "font-base text-white" : ""}>{title}</span>
    </NavLink>
  );
};

export default NavLinkButton;
