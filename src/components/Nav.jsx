import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import React, { useState } from "react";
import logo from "../logo.png"
const Nav = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <section>
      <nav className="lg:flex lg:justify-between p-5">
        <div className="flex justify-around items-center">

          <div
            className="flex flex-col gap-1 lg:hidden"
            onClick={toggleMenu}
          >
            <div className={`w-[1.2rem] h-[3px] bg-[black] rounded ${menuVisible ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-[1.2rem] h-[3px] bg-[black] rounded ${menuVisible ? 'opacity-0' : ''}`}></div>
            <div className={`w-[1.2rem] h-[3px] bg-[black] rounded ${menuVisible ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </div>

          <div className="text-4xl flex justify-center items-center lg:justify-start">
            <Link to="/">
              <img className="min-w-[148px] max-w-[248px]" src={logo} alt="Logo" />
            </Link>
          </div>

          <div className="lg:hidden">
            <FiSearch />
          </div>
        </div>

        <div
          className={`md:w-[80%] mx-auto font-bold text-xl h-auto bg-orange-500 text-white rounded lg:bg-[white] lg:text-black ${menuVisible ? 'block' : 'hidden'}`}
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

        <div
          className={`md:w-[80%] mx-auto hidden lg:block font-semibold text-xl h-auto bg-orange-500 text-white rounded lg:bg-[white] lg:text-black `}
        >
          <ul className="flex flex-col lg:space-evenly lg:flex-row lg:justify-end gap-3 items-center justify-centers py-2">
            <li className="p-3 transition-all duration-300 ease-in hover:scale-x-110 hover:text-orange-500">
              <Link to="/">Home </Link>
            </li>

            <li className="p-3 transition-all duration-300 ease-in hover:scale-x-110 hover:text-orange-500">
              <Link to="/about">About </Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Nav;
