import "../styles/testimonials.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";

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
  const [testimonialsData, setTestimonialsData] = useState([
    {
      id: 1,
      reviewerName: "Roger ",
      courseName: "Web Development",
      reviewDescription:
        "1 Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      id: 2,
      reviewerName: "Roger ",
      courseName: "DBMS",
      reviewDescription:
        "2 Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      id: 3,
      reviewerName: "Roger ",
      courseName: "JS",
      reviewDescription:
        "3 Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      id: 4,
      reviewerName: "Roger ",
      courseName: "React",
      reviewDescription:
        "4 Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
  ]);

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
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="testimonials_list">
              <div>
                {/* <img src={reactlogo} alt="person" /> */}
                <span>
                  <h3> {testimonial.reviewerName}</h3>
                  <p>{testimonial.courseName}</p>
                </span>
              </div>
              <p className="reviewDescription">
                {testimonial.reviewDescription}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
export default Testimonials;
