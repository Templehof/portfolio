import React from "react";
import "./mobile-menu.css";
import NavLinks from "./NavLinks";

import Instagram from "../images/instagram.svg";
import Linkedin from "../images/linkedin.svg";

const MobileMenu = (props) => {
  return (
    <div className="mobile-menu" onClick={props.handleClick}>
      <div className="mobile-links">
        <NavLinks />
      </div>
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
    </div>
  );
};

export default MobileMenu;
