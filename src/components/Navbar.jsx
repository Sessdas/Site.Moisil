import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import './styles/Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="NavbarContainer">
        <div className="NavbarLogo">Urmașii lui Moisil</div>
        <div className="NavbarLinks">
          <Link className="NavbarLink" to="/">Home</Link>
          <Link className="NavbarLink" to="/blogs">News</Link>
          <Link className="NavbarLink" to="/contact">Contact</Link>
        </div>
        <button className="menu-button" onClick={toggleMenu}>
          &#9776;
        </button>
      </nav>
      <div className={`menu-list ${menuOpen ? "open" : ""}`}>
        <div className="menu-section">
          <Link className="menu-link" to="/">Home</Link></div>
          <div className="menu-section">
          <Link className="menu-link" to="/blogs">News</Link></div>
          <div className="menu-section">
          <Link className="menu-link" to="/contact">Contact</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
