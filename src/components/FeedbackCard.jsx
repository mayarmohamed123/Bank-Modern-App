import React from "react";
import { quotes } from "../assets";
import styles from "../style";

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="flex justify-between flex-col px-9 py-11 rounded-[20px] sm:mr-4 mr-0 md:mr-9 max-w-[365px] my-3 feedback-card">
      <img
        src={quotes}
        alt="quotes"
        className="w-[42px] h-[27px] object-contain"
      />
      <p
        className={` font-poppins font-normal text-white text-[18px] leading-[30.8px] my-5`}
      >
        {content}
      </p>
      <div className="flex flex-1 flex-row justify-start items-center">
        <img src={img} alt="photo" className="w-[48px] h-[48px] rounded-full" />
        <div className="flex flex-col ml-5">
          <p
            className={`font-poppins font-normal text-[20px] leading-[32px] text-white`}
          >
            {name}
          </p>
          <p
            className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite`}
          >
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
