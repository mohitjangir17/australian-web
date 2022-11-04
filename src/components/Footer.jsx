import "../styles/footer.css";
import logo from "./resources/logo512.png";
import arrow from "../components/resources/arrow.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className="Footer">
      <div className="footer-columns">
        <Link to="/">
          <img className="footerLogo" src={logo} alt="" />
        </Link>
        <p>
          A small river named Duden flows by their place <br />
          and supplies it with the necessary regelialia.
        </p>

        <div className="footer-social-icons">
          <a href="https://instagram.com">
            <FontAwesomeIcon className="socialIconnFooter" icon={faInstagram} />
          </a>
          <a href="https://facebook.com">
            <FontAwesomeIcon className="socialIconnFooter" icon={faFacebook} />
          </a>
          <a href="https://twitter.com">
            <FontAwesomeIcon className="socialIconnFooter" icon={faTwitter} />
          </a>
        </div>
      </div>
      <div className="footer-columns">
        <h3>Explore</h3>
        <div className="exploreLinks">
          <Link to="">
            <span>
              <img width={25} src={arrow} alt="" />
            </span>
            About Us
          </Link>
          <Link to="">
            <span>
              <img width={25} src={arrow} alt="" />
            </span>
            Services
          </Link>
          <Link to="">
            <span>
              <img width={25} src={arrow} alt="" />
            </span>
            Cources
          </Link>
          <Link to="">
            <span>
              <img width={25} src={arrow} alt="" />
            </span>
            Blogs
          </Link>
          <Link to="">
            <span>
              <img width={25} src={arrow} alt="" />
            </span>
            Contact Us
          </Link>
        </div>
      </div>
      <div className="footer-columns">
        <h3>Our Links</h3>
        <div className="linksCol">
          <Link to="">
            <span>
              <img width={25} src={arrow} alt="" />
            </span>
            Contact Us
          </Link>
          <Link to="">
            <span>
              <img width={25} src={arrow} alt="" />
            </span>
            Pricing
          </Link>
          <Link to="">
            <span>
              <img width={25} src={arrow} alt="" />
            </span>
            Terms & Conditions
          </Link>
          <Link to="">
            <span>
              <img width={25} src={arrow} alt="" />
            </span>
            Privacy
          </Link>
          <Link to="">
            <span>
              <img width={25} src={arrow} alt="" />
            </span>
            Feedbacks
          </Link>
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
