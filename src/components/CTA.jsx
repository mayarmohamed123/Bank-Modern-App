import React from "react";
import styles from "../style";
import Button from "./Button";

const CTA = () => {
  return (
    <section className="flex sm:flex-row flex-col flex-wrap justify-between items-center bg-black-gradient-2 rounded-[20px] sm:my-16 my-6 p-5 box-shadow ">
      <div className={` flex flex-col justify-start sm:p-16 p-6 max-h-[293px]`}>
        <h2 className="font-poppins font-semibold sm:text-[48px] text-[25px] leading-[67px] text-white">
          Let’s try our service now!
        </h2>
        <p className={` ${styles.paragraph} max-w-[445px] m-5`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <Button />
    </section>
  );
};

export default CTA;
