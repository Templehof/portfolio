import React, {useState} from "react";
import "./NavBar.css";

import NavLinks from "./NavLinks.js";
import Instagram from "../images/instagram.svg";
import Linkedin from "../images/linkedin.svg";
import MenuButton from "./menu-btn";
import MobileMenu from "./mobile-menu";

const NavBar = (props) => {
  const [isMobileShown, setIsMobileShown] = useState(false);
  const toggleMobile = () => {
    setIsMobileShown(!isMobileShown)
  }
  return (
    <React.Fragment>
      <MenuButton handleClick={toggleMobile} />
      {isMobileShown && <MobileMenu handleClick={toggleMobile} />}

      <aside className="navbar">
        <div className="logo-nav">
          <p className="logo-title">
            Ivan. R<span></span>
          </p>
          <p className="logo-subtitle">Full-Stack Web Developer</p>
        </div>
        <NavLinks handleClick={props.handleClick} />
        <div className="media-icons">
          <a
            href="https://www.instagram.com/ivan.rmkn/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={Instagram} alt="linkedin" />
          </a>
          <a
            href="https://www.linkedin.com/in/ivan-riumkin-575995b9/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={Linkedin} alt="linkedin" />
          </a>
        </div>
      </aside>
    </React.Fragment>
  );
};

export default NavBar;
