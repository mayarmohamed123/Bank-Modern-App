import React from "react";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  GetStarted,
  Clients,
  CTA,
  Footer,
  FeedbackCard,
  Testimonial,
} from "./components";
import styles from "./style";
const App = () => {
  return (
    <div>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      </div>

      <div>
        <Hero />
      </div>
    </div>
  );
};

export default App;
