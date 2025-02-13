import React from "react";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Clients,
  CTA,
  Footer,
  FeedbackCard,
  Testimonial,
} from "./components";
import styles from "./style";
const App = () => {
  return (
    <>
      <div className={` ${styles.paddingX} bg-primary w-full overflow-hidden`}>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        <div className={` bg-primary ${styles.flexStart} `}>
          <div className={` ${styles.boxWidth} `}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonial />
            <Clients />
            <CTA />
          </div>
        </div>
      </div>
      <div className={` bg-[#0B0A0C] ${styles.padding} ${styles.flexStart} `}>
        <div className={` ${styles.boxWidth} `}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
