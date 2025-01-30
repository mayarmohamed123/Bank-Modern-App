import React from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <nav className="navbar w-full flex justify-between items-center py-6">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="flex justify-end flex-row">
        {navLinks.map((item, index) => (
          <li
            key={index}
            className="text-white px-2 font-poppins text-[16px] cursor-pointer"
          >
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
