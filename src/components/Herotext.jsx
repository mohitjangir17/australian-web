import "../styles/herotext.css";
import { motion } from "framer-motion";

function Herotext() {
  return (
    <motion.div
      className="Herotext"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.5,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <p className="textSpan">Welcome text ....</p>
      <h1 className="heroHeading">
        A Platform Where You Find Best Assignment Related Solutions
      </h1>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts..
      </p>
      {/* <button>Upload Your Assignmet</button> */}
    </motion.div>
  );
}

export default Herotext;
