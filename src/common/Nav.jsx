import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import $ from "jquery";
import React, { useEffect, useState } from "react";

const Nav = () => {
  useEffect(() => {}, []);
  const [clicked, setClicked] = useState(true);

  const menuBtnClicked = () => {
    if (clicked === false) {
      $("#menu").slideUp();
      setClicked(true);
    } else if (clicked === true) {
      $("#menu").slideDown();
      setClicked(false);
    }
  };
  return (
    <section>
      <nav className="lg:flex lg:justify-between p-5">
        <div className="flex justify-around items-center">
          {/* Hamburger Menu */}
          <div
            id="menu-btn"
            className="flex flex-col gap-1 lg:hidden"
            onClick={menuBtnClicked}
          >
            <div className="w-[1.2rem] h-[3px] bg-[black] rounded"></div>
            <div className="w-[1.2rem] h-[3px] bg-[black] rounded"></div>
            <div className="w-[1.2rem] h-[3px] bg-[black] rounded"></div>
          </div>

          <div className="text-4xl flex justify-center align-center lg:justify-start">
            Logo
          </div>

          <div className="lg:hidden">
            <FiSearch />
          </div>
        </div>

        <div
          className="md:w-[80%] mx-auto font-bold text-xl h-auto bg-orange-500 text-white rounded lg:bg-[white] lg:text-black"
          id="menu"
        >
          <ul className="flex flex-col lg:space-evenly lg:flex-row lg:justify-end gap-3 items-center justify-centers py-2">
            <li className="p-3 transition-all duration-300 ease-in hover:scale-x-110 hover:text-orange-500">
              <Link to="/">Home </Link>
            </li>

            <li className="p-3 transition-all duration-300 ease-in hover:scale-x-110 hover:text-orange-500">
              Trending
            </li>
            <li className="p-3 transition-all duration-300 ease-in hover:scale-x-110 hover:text-orange-500">
              Shop
            </li>
            <li className="p-3 transition-all duration-300 ease-in hover:scale-x-110 hover:text-orange-500">
              Picks
            </li>
            <li className="p-3 transition-all duration-300 ease-in hover:scale-x-110 hover:text-orange-500">
              NewsLetter
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Nav;
