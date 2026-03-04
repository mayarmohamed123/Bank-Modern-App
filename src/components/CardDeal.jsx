import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={` ${styles.heading2} `}>
          Find a better card deal <br className="sm:block hidden" />
          in few easy steps.
        </h2>
        <p className="font-abel font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[500px] my-5">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button />
      </div>
      <div className="ml-5">
        <img
          src={card}
          alt="cardPhoto"
          className="w-[513px] h-[449px] object-contain"
        />
      </div>
    </section>
  );
};

export default CardDeal;
