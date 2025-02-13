import React from "react";
import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonial = () => {
  return (
    <section
      id="clients"
      className={` ${styles.padding} ${styles.flexCenter} flex-col relative  `}
    >
      <div className=" absolute w-[60%] h-[60%] z-[0] blue__gradient rounded-full -right-[50%]" />
      <div
        className={` flex justify-between items-center sm:flex-row flex-col w-full relative z-[1] sm:mb-16 mb-6`}
      >
        <h2 className={` ${styles.heading2}  `}>
          What people are <br className="sm:block hidden" /> saying about us
        </h2>
        <p className={` ${styles.paragraph} max-w-[450px] `}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex sm:justify-start justify-center w-full relative z-[1] feedback-container sm:flex-nowrap flex-wrap">
        {feedback.map((item, index) => {
          return <FeedbackCard key={index} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Testimonial;
