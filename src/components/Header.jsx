import "../styles/header.css";
import Herotext from "./Herotext";
import LogoSection from "./LogoSection";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="Header">
      <div className="Header1"></div>
      <LogoSection />
      <Navbar />
      <Herotext />
    </div>
  );
}

export default Header;
