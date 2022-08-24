import "./App.css";
import "./components/components.css"
import Header from "./components/Header";
import Benifits from "./components/Benifits";
import Figures from "./components/Figures";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Blogs from "./components/Blogs";
import { motion } from 'framer-motion'
// import SupportEngine from "./components/SupportEngine";
// import Comm100 from "./components/Comm100/Comm100Fetch";
function FadeInWhenVisible({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: 1.5,
        delay: 0.3,
        // ease: [0, 0.5, 0.7, 1.01],
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
function App() {
  return (
    <div className="App">
      <Header />
      {/* <Comm100 /> */}

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

      <Footer />
      {/* <SupportEngine /> */}
    </div>
  );
}

export default App;
