import React from "react";

import styles from "../style";
import { robot, discount } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={` flex flex-col md:flex-row ${styles.paddingY}`}
    >
      <div
        className={` flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}
      >
        <div className="flex flex-row items-center bg-discount-gradient rounded-[10px] mb-2 py-[6px] px-4">
          <img
            src={discount}
            alt="discount"
            className="w-[32px] h-[32px] mx-2"
          />
          <p className={` ${styles.paragraph} `}>
            <span className="text-white mr-2">20%</span>
            Discount For {""}
            <span className="text-white mr-2">1 Month</span>
            Account
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="font-poppins flex-1 font-semibold text-white ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">
            The Next <br className="hidden ss:block" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h2 className="font-poppins font-semibold text-white ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px]">
          Payment Method
        </h2>
        <p className={` ${styles.paragraph} max-w-[470px] m-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div
        className={` flex flex-1 ${styles.flexCenter} md:my-0 my-10 relative `}
      >
        <img
          src={robot}
          alt="robot"
          className={`w-[100%] h-[100%] relative z-[5]`}
        />
        <div className="pink__gradient absolute z-[0] top-0 h-[35%] w-[40%]"></div>
        <div className="white__gradient absolute z-[1] h-[80%] w-[80%] rounded-full bottom-40"></div>
        <div className="blue__gradient absolute z-[0] h-[50%] w-[50%] right-20 bottom-20"></div>
      </div>
      <div className={`ss:hidden ${styles.flexCenter} `}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
