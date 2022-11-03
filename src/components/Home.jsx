import "../App.css";
import Benifits from "./Benifits";
import Figures from "./Figures";
import Courses from "./Courses";
import Testimonials from "./Testimonials";
import Blogs from "./Blogs";
import UploadForm from "./UploadForm";
import { motion } from "framer-motion";
import Header from "./Header";
import OurFeatures from "./OurFeatures";
import OurSupport from "./OurSupport";
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
      <Header />
      <div className="backgroundWhite">
        <UploadForm />
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
          <OurSupport />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <OurFeatures />
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
