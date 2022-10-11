import "../styles/courses.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import assignment_help from "./resources/assignment help.png";
import dissertation_help from "./resources/dissertation help.png";
import essay_help from "./resources/essay help.png";
import exam_help from "./resources/exam help.png";
import programming_help from "./resources/programming help.png";
import thesis_help from "./resources/thesis help.png";
import "../App.css";

function Courses() {
  function FadeInWhenVisible({ children }) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          duration: 1,
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
  return (
    <div className="Courses">
      <span>Courses</span>
      <h2>Courses that we provide</h2>
      <section className="course-item-container">
        <FadeInWhenVisible>
          {" "}
          <Link
            to={{ pathname: "https://swipeupassignments.com" }}
            target="_blank"
            className="Link"
          >
            <div className="course-item">
              <img width={80} src={assignment_help} alt="course" />
              <h4>Assignment Help</h4>
            </div>
          </Link>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          {" "}
          <Link
            to={{ pathname: "https://swipeupassignments.com" }}
            target="_blank"
            className="Link"
          >
            <div className="course-item">
              <img width={80} src={dissertation_help} alt="course" />
              <h4>Dissertation Help</h4>
            </div>
          </Link>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          {" "}
          <Link
            to={{ pathname: "https://swipeupassignments.com" }}
            target="_blank"
            className="Link"
          >
            <div className="course-item">
              <img width={80} src={essay_help} alt="course" />
              <h4>Essay Help</h4>
            </div>
          </Link>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          {" "}
          <Link
            to={{ pathname: "https://swipeupassignments.com" }}
            target="_blank"
            className="Link"
          >
            <div className="course-item">
              <img width={80} src={exam_help} alt="course" />
              <h4>Exam Help</h4>
            </div>
          </Link>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          {" "}
          <Link
            to={{ pathname: "https://swipeupassignments.com" }}
            target="_blank"
            className="Link"
          >
            <div className="course-item">
              <img width={80} src={programming_help} alt="course" />
              <h4>Programming Help</h4>
            </div>
          </Link>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          {" "}
          <Link
            to={{ pathname: "https://swipeupassignments.com" }}
            target="_blank"
            className="Link"
          >
            <div className="course-item">
              <img width={80} src={thesis_help} alt="course" />
              <h4>Thesis Help</h4>
            </div>
          </Link>
        </FadeInWhenVisible>
      </section>
    </div>
  );
}
export default Courses;
