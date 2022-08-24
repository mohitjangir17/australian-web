import "../components/components.css";
import Herotext from "./Herotext";
import LogoSection from "./LogoSection";
import Navbar from "./Navbar";
// import bannerImg from "./resources/open-book.jpg";

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
