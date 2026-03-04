import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} bg-blue-gradient w-[140px] h-[140px] rounded-full p-[2px] cursor-pointer`}
    >
      <div
        className={` ${styles.flexCenter} bg-primary flex-col w-[100%] h-[100%] rounded-full`}
      >
        <div className={` ${styles.flexCenter} flex flex-row `}>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gradient mr-2">Get</span>
          </p>
          <img src={arrowUp} alt="arrow-up" />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
