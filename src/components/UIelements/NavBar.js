import React, { useState } from "react";
import "./NavBar.css";
import { Fade } from "react-reveal";

import NavLinks from "./NavLinks.js";
import Instagram from "../images/instagram.svg";
import Linkedin from "../images/linkedin.svg";
import MenuButton from "./menu-btn";
import MobileMenu from "./mobile-menu";
import me from "../images/me.svg";

const NavBar = (props) => {
  const [isMobileShown, setIsMobileShown] = useState(false);
  const toggleMobile = () => {
    setIsMobileShown(!isMobileShown);
  };
  return (
    <React.Fragment>
      <MenuButton handleClick={toggleMobile} />
      {isMobileShown && <MobileMenu handleClick={toggleMobile} />}


      <Fade left delay={1000} duration={2000}>
        <aside className="navbar">
          <div className="logo-nav">
            <div className="logo-nav-inner">
              <div className="logo-nav-front">
                <p className="logo-title">
                  IVAN<span></span>
                </p>
                <p className="logo-subtitle">Full-Stack Web Developer</p>
              </div>

              <div className="logo-nav-back">
                <img src={me} alt="thats me" />
              </div>
            </div>
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
      </Fade>
    </React.Fragment>
  );
};

export default NavBar;
