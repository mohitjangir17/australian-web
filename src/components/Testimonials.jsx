import "./components.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1280 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1280, min: 768 },
    items: 3,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 768, min: 600 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

function Testimonials() {
  return (
    <div className="Testimonials">
      <span className="spanTestimonials">Testimonials</span>
      <h2>What our clients say?</h2>
      <div className="testimonials_container">
        <Carousel
          responsive={responsive}
          showDots={true}
          infinite={true}
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          autoPlay={true}
          autoPlaySpeed={3000}
        >
          <div className="testimonials_list">
            <div>
              {/* <img src={reactlogo} alt="person" /> */}
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
              {/* <img src={reactlogo} alt="person" /> */}
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
              {/* <img src={reactlogo} alt="person" /> */}
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
              {/* <img src={reactlogo} alt="person" /> */}
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
              {/* <img src={reactlogo} alt="person" /> */}
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
        </Carousel>
      </div>
    </div>
  );
}
export default Testimonials;
