import React, { useState } from "react";
import "./NavBar.css";
import { Fade } from "react-reveal";

import NavLinks from "./NavLinks.js";
import Instagram from "../images/instagram.svg";
import Linkedin from "../images/linkedin.svg";
import MenuButton from "./menu-btn";
import MobileMenu from "./mobile-menu";
import me from "../images/me.svg";
import htmlLogo from "../images/techlogos/html.svg";
import cssLogo from "../images/techlogos/css.svg";
import gitLogo from "../images/techlogos/git.svg";
import jsLogo from "../images/techlogos/javascript.svg";
import jestLogo from "../images/techlogos/jest.svg";
import mongodbLogo from "../images/techlogos/mongodb.svg";
import nodejsLogo from "../images/techlogos/nodejs.svg";
import reactLogo from "../images/techlogos/react.svg";
import webpackLogo from "../images/techlogos/webpack.svg";
import typescriptLogo from "../images/techlogos/typescript.png";

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

      <Fade right distance={"30%"} delay={2000} fraction={0.5} duration={2000}>
        <ul className="box">
          <li>
            <img className="logo" src={jsLogo} alt="" />
          </li>
          <li>
            <img className="logo" src={htmlLogo} alt="" />
          </li>
          <li>
            <img className="logo" src={cssLogo} alt="" />
          </li>
          <li>
            <img className="logo" src={gitLogo} alt="" />
          </li>
          <li>
            <img className="logo" src={webpackLogo} alt="" />
          </li>
          <li>
            <img className="logo" src={jestLogo} alt="" />
          </li>
          <li>
            <img className="logo" src={mongodbLogo} alt="" />
          </li>
          <li>
            <img className="logo" src={nodejsLogo} alt="" />
          </li>
          <li>
            <img className="logo" src={reactLogo} alt="" />
          </li>
          <li>
            <img className="logo" src={typescriptLogo} alt="" />
          </li>
        </ul>
      </Fade>
    </React.Fragment>
  );
};

export default NavBar;
