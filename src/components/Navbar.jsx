import "../components/components.css";
import React, { useState } from "react";
import ToggleDisplay from "react-toggle-display";
import { Link } from "react-router-dom";

function Navbar() {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }
  return (
    <div className="Navbar">
      <nav className="mobile-Navbar">
        <p onClick={handleClick}>Menu</p>
        <ToggleDisplay show={show}>
          <div className="navlist">
            <Link to="/australian-web">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/allcourses">Courses</Link>
            <Link to="/blogs">Blogs</Link>
          </div>
        </ToggleDisplay>
      </nav>
      <nav className="desktop-Navbar">
        <Link to="/australian-web">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/allcourses">Courses</Link>
        <Link to="/blogs">Blogs</Link>
      </nav>
    </div>
  );
}

export default Navbar;
