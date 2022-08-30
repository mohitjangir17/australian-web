import "../components/components.css";
import React, { useState } from "react";
import ToggleDisplay from "react-toggle-display";

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
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">All Cources</a>
          </div>
        </ToggleDisplay>
      </nav>
      <nav className="desktop-Navbar">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">All Cources</a>
      </nav>
    </div>
  );
}

export default Navbar;
