import React from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="navbar w-full flex justify-between items-center py-6">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none hidden sm:flex justify-end flex-row flex-1  ">
        {navLinks.map((item, index) => (
          <li
            key={index}
            className="text-white px-2 font-poppins font-normal text-[16px] cursor-pointer "
          >
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
