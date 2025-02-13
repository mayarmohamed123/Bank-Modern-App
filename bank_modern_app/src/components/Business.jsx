import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => {
  return (
    <div
      className={`flex flex-row rounded-[20px] p-6 ${
        index !== features.length ? "mb-6" : "mb-0"
      } feature-card `}
    >
      <div className="w-[64px] h-[64px] bg-dimBlue rounded-full flex items-center justify-center">
        <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex flex-1 flex-col ml-6">
        <h4 className="font-poppins font-semibold text-[18px] leading-[23.4px] text-white mb-3">
          {title}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {content}
        </p>
      </div>
    </div>
  );
};
const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the money.
        </h2>
        <p className={` ${styles.paragraph2} max-w-[470px] mt-5 `}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={` ${layout.sectionImg} flex-col `}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} index={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Business;
