import { Link, useLocation } from "react-router-dom";
import "../styles/header.css";
import LogoSection from "./LogoSection";
import Navbar from "./Navbar";

function HeaderOtherPages(props) {
  const location = useLocation();
  return (
    <div
      className="HeaderOtherPages"
      style={{
        backgroundImage: `url(${props.headerImage})`,
      }}
    >
      <LogoSection />
      <Navbar />
      <div className="pageIndicator">
        <h3>
          <Link to="/">Home</Link>
          {location.pathname}
        </h3>
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}

export default HeaderOtherPages;
