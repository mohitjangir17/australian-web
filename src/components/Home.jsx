import "../App.css";
import "./components.css";
import Benifits from "./Benifits";
import Figures from "./Figures";
import Courses from "./Courses";
import Testimonials from "./Testimonials";
import Blogs from "./Blogs";

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
function Home() {
  return (
    <div className="Home">
      <div className="backgroundWhite" >
      <FadeInWhenVisible>
        <Benifits />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Figures />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Courses />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Blogs />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Testimonials />
      </FadeInWhenVisible>
    </div>
    </div>
  );
}
export default Home;
