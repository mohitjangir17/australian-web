import "../styles/logosection.css";
import logo from "../components/resources/logo192.png";
import facebooklogo from "../components/resources/facebook logo.png";
import instalogo from "../components/resources/instagram.svg";
function LogoSection() {
  return (
    <div className="LogoSection">
      <div className="poster">
        <a href="https://google.com">
          <img src={logo} alt="logo" />
        </a>{" "}
        <div className="social-logos">
          <a href="https://facebook.com">
            <img src={facebooklogo} alt="" />
          </a>
          <a href="https://facebook.com">
            <img src={instalogo} alt="" />
          </a>
        </div>{" "}
      </div>
    </div>
  );
}

export default LogoSection;
