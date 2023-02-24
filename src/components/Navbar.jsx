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
          <Link className="NavbarLink" to="/news">News</Link>
          <Link className="NavbarLink" to="/contact">Contact</Link>
        </div>
        <button className="menu-button" onClick={toggleMenu}>
          &#9776;
        </button>
      </nav>
      <div className={`menu-list ${menuOpen ? "open" : ""}`}>
        <Link className="menu-link" to="/"><div className="menu-section">Home</div></Link>
        <Link className="menu-link" to="/blogs"><div className="menu-section">News</div></Link>
        <Link className="menu-link" to="/contact"> <div className="menu-section">Contact</div></Link>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
