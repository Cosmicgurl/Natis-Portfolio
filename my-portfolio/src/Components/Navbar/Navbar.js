import React, { useState } from "react";
import "./Navbar.css";
import icon from "../src/icon.png";
import { Link } from "react-scroll";
import Burgermenu from "../src/Burgermenu.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="Navbar">
      <img
        src={icon}
        alt="icon"
        className="icon"
      />
      <div className="DesktopMenu">
        <Link
          activeClass="active"
          to="Intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="DesktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="Skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="DesktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="Project"
          spy={true}
          smooth={true}
          offset={-120}
          duration={500}
          className="DesktopMenuListItem"
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="Contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="DesktopMenuListItem"
        >
          Contacts
        </Link>
      </div>
      <button
        className="DesktopMenuBtn"
        onClick={() => {
          document
            .getElementById("Contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        Contact me
      </button>
      <img
        src={Burgermenu}
        alt="Burgermenu"
        className="Burgermenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div
        className="NavMenu"
        style={{ display: showMenu ? `flex` : `none` }}
      >
        <Link
          activeClass="active"
          to="Intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="ListItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="Skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="ListItem"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="Project"
          spy={true}
          smooth={true}
          offset={-120}
          duration={500}
          className="ListItem"
          onClick={() => setShowMenu(false)}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="Contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="ListItem"
          onClick={() => setShowMenu(false)}
        >
          Contacts
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
