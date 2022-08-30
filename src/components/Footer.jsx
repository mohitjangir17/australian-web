import "./components.css";
import logo from "./resources/logo192.png";
import facebooklogo from "../components/resources/facebook logo.png";
import instalogo from "../components/resources/instagram.svg";
import arrow from "../components/resources/arrow.png";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-columns">
        <img className="footerLogo" src={logo} alt="" />
        <p>
          A small river named Duden flows by their place and supplies it
          <br /> with the necessary regelialia.
        </p>

        <div className="footer-social-icons">
          <a href="https://instagram.com">
            <img src={instalogo} alt="" />
          </a>
          <a href="https://facebook.com">
            <img src={facebooklogo} alt="" />
          </a>
        </div>
      </div>
      <div className="footer-columns">
        <h3>Explore</h3>
        <div className="exploreLinks">
          <a href="#">
            <span>
              <img width={25} src={arrow} alt="" />
            </span>
            About Us
          </a>
          <a href="#">
            <span>
              <img width={25} src={arrow} alt="" />
            </span>
            Services
          </a>
          <a href="#">
            <span>
              <img width={25} src={arrow} alt="" />
            </span>
            Cources
          </a>
          <a href="">
            <span>
              <img width={25} src={arrow} alt="" />
            </span>
            Blogs
          </a>
          <a href="">
            <span>
              <img width={25} src={arrow} alt="" />
            </span>
            Contact Us
          </a>
        </div>
      </div>
      <div className="footer-columns">
        <h3>Our Links</h3>
        <div className="linksCol">
          <a href="">
            <span>
              <img width={25} src={arrow} alt="" />
            </span>
            Contact Us
          </a>
          <a href="">
            <span>
              <img width={25} src={arrow} alt="" />
            </span>
            Pricing
          </a>
          <a href="">
            <span>
              <img width={25} src={arrow} alt="" />
            </span>
            Terms & Conditions
          </a>
          <a href="">
            <span>
              <img width={25} src={arrow} alt="" />
            </span>
            Privacy
          </a>
          <a href="">
            <span>
              <img width={25} src={arrow} alt="" />
            </span>
            Feedbacks
          </a>
        </div>
      </div>
      <div className="footer-columns">
        <h3>Have Questions?</h3>
        <div className="questionsCol">
          <p>
            {" "}
            <span>
              <img width={25} src={arrow} alt="" />
            </span>
            203 Fake St. Mountain View, San Francisco, California, USA
          </p>
          <a href="tel:123-456-7890">
            <span>
              <img width={25} src={arrow} alt="" />
            </span>
            123-456-7890
          </a>
          <a href="mailto: support@swipeupassignments.com">
            <span>
              <img width={25} src={arrow} alt="" />
            </span>
            support@swipeupassignments.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
