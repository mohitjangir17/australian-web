import "../styles/logosection.css";
import logo from "./resources/logo512.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function LogoSection() {
  return (
    <div className="LogoSection">
      <div className="poster">
        <a href="https://google.com">
          <img src={logo} alt="logo" />
        </a>{" "}
        <div className="social-logos">
          <a href="https://facebook.com">
            <FontAwesomeIcon className="socialIconn" icon={faFacebook} />
          </a>
          <a href="https://facebook.com">
            <FontAwesomeIcon className="socialIconn" icon={faInstagram} />
          </a>
        </div>{" "}
      </div>
    </div>
  );
}

export default LogoSection;
