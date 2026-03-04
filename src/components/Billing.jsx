import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`}
      >
        <img
          src={bill}
          alt="billing"
          className="max-w-[530px] max-h-[455px] object-contain relative z-[5] ml-8"
        />
        <div className="absolute -left-1/2 w-[50%] h-[50%] z-[3] white__gradient top-0 rounded-full" />
        <div className="absolute -left-1/2 w-[50%] h-[50%] z-[0] pink__gradient bottom-0 rounded-full" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className="font-poppins font-semibold text-[48px] text-white leading-[76.8px] w-full tracking-[0.01em]">
          Easily control your
          <br className="sm:block hidden" /> billing & invoicing.
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[28.8px] max-w-[470px] my-5">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex flex-row flex-wrap justify-center items-center">
          <img
            src={apple}
            alt="appStore"
            className="w-[128px] h-[42px] rounded-lg mx-5"
          />
          <img
            src={google}
            alt="googlePlay"
            className="w-[144px] h-[43px] rounded-lg "
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
