import React, { useState, useEffect } from "react";
import "./Menu.styles.css";
import { Link } from "react-router-dom";

export default function Menu(props) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {(toggleMenu || screenWidth > 1200) && (
        <ul className="menuList">
          <Link to="/" className="menuItem">
            About
          </Link>
          <Link to="/contact" className="menuItem">
            Contact
          </Link>
          <Link to="/signin" className="menuItem">
            icon sign in
          </Link>
          <Link to="/signout" className="menuItem">
            icon sign out
          </Link>
          <Link to="/favourite" className="menuItem">
            favourite
          </Link>
        </ul>
      )}

      <button className="burgerButton" onClick={toggleNav} type="button">
        {toggleMenu ? `×` : `☰`}
      </button>
    </nav>
  );
}
