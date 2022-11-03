import "../styles/figures.css";
import itemsDelivered from "./resources/delivered.png";
import teamLogo from "./resources/teamwork.png";
import customerLogo from "./resources/target.png";
import ratingLogo from "./resources/rating.png";
import CountUp from "react-countup";
import { motion } from "framer-motion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function FadeInWhenVisible({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: 1,
        delay: 0.3,
        ease: [0, 0.5, 0.7, 1.01],
      }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      {children}
    </motion.div>
  );
}

function Figures() {
  return (
    <div className="Figures">
      <FadeInWhenVisible>
        {/* <FontAwesomeIcon icon={faCircleCheck} /> */}
        <div className="figuresData">
          <img src={itemsDelivered} alt="" />
          <div>
            <h1>
              <CountUp
                end={(192, 723)}
                useEasing
                duration={7}
                enableScrollSpy
              />
            </h1>
            <p>DELIVERED ORDERS</p>
          </div>
        </div>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <div className="figuresData">
          <img src={teamLogo} alt="" />
          <div>
            <h1>
              <CountUp end={1308} useEasing duration={7} enableScrollSpy />
            </h1>
            <p>EXPERTS</p>
          </div>
        </div>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <div className="figuresData">
          <img src={customerLogo} alt="" />
          <div>
            <h1>
              <CountUp end={50221} useEasing duration={7} enableScrollSpy />
            </h1>
            <p>CUSTOMERS</p>
          </div>
        </div>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <div className="figuresData">
          <img src={ratingLogo} alt="" />
          <div>
            <h1>
              <CountUp end={9} useEasing duration={7} enableScrollSpy />
              /10
            </h1>
            <p>CUSTOMER RATING</p>
          </div>
        </div>
      </FadeInWhenVisible>
    </div>
  );
}
export default Figures;
