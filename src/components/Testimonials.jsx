import "./components.css";
import reactlogo from "./resources/logo192.png";

function Testimonials() {
  return (
    <div className="Testimonials">
      <span className="spanTestimonials">Testimonials</span>
      <h2>What our clients say?</h2>
      <div className="testimonials_container">
        <div className="testimonials_list">
          <div>
            <img src={reactlogo} alt="person" />
            <span>
              <h3>Roger</h3>
              <p>Post</p>
            </span>
          </div>
          <p className="reviewDescription">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.{" "}
          </p>
        </div>
        <div className="testimonials_list">
          <div>
            <img src={reactlogo} alt="person" />
            <span>
              <h3>Roger</h3>
              <p>Post</p>
            </span>
          </div>
          <p className="reviewDescription">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.{" "}
          </p>
        </div>
        <div className="testimonials_list">
          <div>
            <img src={reactlogo} alt="person" />
            <span>
              <h3>Roger</h3>
              <p>Post</p>
            </span>
          </div>
          <p className="reviewDescription">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Testimonials;
