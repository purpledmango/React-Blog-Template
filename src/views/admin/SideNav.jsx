import React from "react";
import { useLocation } from "react-router-dom";
import NavLinkButton from "./NavLinkButton";
import {
  PiSquaresFourLight,
  PiNewspaperClippingLight,
  PiTagLight,
  PiUserLight,
  PiGearBold,
  PiImageBold,
} from "react-icons/pi";

const SideNav = () => {
  const location = useLocation();

  return (
    <div className="col-span-2 h-screen  mx-auto w-full">
      <h3 className="text-center text-xl font-bold pt-4 pb-6">Mr. Oadn</h3>
      <NavLinkButton
        Icon={PiSquaresFourLight}
        title="Dashboard"
        to="/admin/dashboard"
        isActive={location.pathname === "/admin/dashboard"}
      />
      <NavLinkButton
        Icon={PiNewspaperClippingLight}
        title="Posts"
        to="/admin/posts"
        isActive={location.pathname === "/admin/posts"}
      />
      <NavLinkButton
        Icon={PiTagLight}
        title="Tags"
        to="/admin/tags"
        isActive={location.pathname === "/admin/tags"}
      />
      <NavLinkButton
        Icon={PiUserLight}
        title="Authors"
        to="/admin/authors"
        isActive={location.pathname === "/admin/authors"}
      />
      <NavLinkButton
        Icon={PiGearBold}
        title="Authors"
        to="/admin/authors"
        isActive={location.pathname === "/admin/authors"}
      />
      <div className=" flex flex-col justify-end h-max">
        <NavLinkButton
          Icon={PiImageBold}
          title="Media"
          to="/admin/media"
          isActive={location.pathname === "/admin/media"}
        />
      </div>
    </div>
  );
};

export default SideNav;
