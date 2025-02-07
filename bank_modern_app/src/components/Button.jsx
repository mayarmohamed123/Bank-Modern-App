import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      className={`font-poppins font-medium text-[18px] leading-[27px] text-[#00040E] bg-blue-gradient py-4 px-7 rounded-lg ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
