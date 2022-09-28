import "../styles/figures.css";
import bookicon from "./resources/book-logo.png";
import CountUp from "react-countup";
import { motion } from "framer-motion";

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
        <div className="figuresData">
          <img src={bookicon} alt="" />
          <div>
            <h1>
              <CountUp end={100} useEasing duration={7} enableScrollSpy />
            </h1>
            <p>Success Stories</p>
          </div>
        </div>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <div className="figuresData">
          <img src={bookicon} alt="" />
          <div>
            <h1>
              <CountUp end={4750} useEasing duration={7} enableScrollSpy />
            </h1>
            <p>Success Stories</p>
          </div>
        </div>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <div className="figuresData">
          <img src={bookicon} alt="" />
          <div>
            <h1>
              <CountUp end={460} useEasing duration={7} enableScrollSpy />
            </h1>
            <p>Success Stories</p>
          </div>
        </div>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <div className="figuresData">
          <img src={bookicon} alt="" />
          <div>
            <h1>
              <CountUp end={850} useEasing duration={7} enableScrollSpy />
            </h1>
            <p>Success Stories</p>
          </div>
        </div>
      </FadeInWhenVisible>
    </div>
  );
}
export default Figures;
