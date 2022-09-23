import "./components.css";
import logo from "./resources/logo192.png";
function Courses() {
  return (
    <div className="Courses">
      <span>Courses</span>
      <h2>Courses that we provide</h2>
      <section className="course-item-container">
        <a href="#">
          <div className="course-item">
            <img width={80} src={logo} alt="course" />
            <h4>Web Development</h4>
          </div>
        </a>
        <a href="#">
          <div className="course-item">
            <img width={80} src={logo} alt="course" />
            <h4>Web Development</h4>
          </div>
        </a>
        <a href="#">
          <div className="course-item">
            <img width={80} src={logo} alt="course" />
            <h4>Web Development</h4>
          </div>
        </a>
        <a href="#">
          <div className="course-item">
            <img width={80} src={logo} alt="course" />
            <h4>Web Development</h4>
          </div>
        </a>
        <a href="#">
          <div className="course-item">
            <img width={80} src={logo} alt="course" />
            <h4>Web Development</h4>
          </div>
        </a>
        <a href="#">
          <div className="course-item">
            <img width={80} src={logo} alt="course" />
            <h4>Web Development</h4>
          </div>
        </a>
      </section>
    </div>
  );
}
export default Courses;
