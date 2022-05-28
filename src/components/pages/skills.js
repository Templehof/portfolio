import React, { useState, useEffect, useRef } from "react";
import "./skills.css";
import { CSSTransition } from "react-transition-group";

import gsapFloat from "../UIelements/utils/gsap-float";
import htmlLogo from "../images/techlogos/html.svg";
import cssLogo from "../images/techlogos/css.svg";
import gitLogo from "../images/techlogos/git.svg";
import jsLogo from "../images/techlogos/javascript.svg";
import jestLogo from "../images/techlogos/jest.svg";
import mongodbLogo from "../images/techlogos/mongodb.svg";
import nodejsLogo from "../images/techlogos/nodejs.svg";
import reactLogo from "../images/techlogos/react.svg";
import webpackLogo from "../images/techlogos/webpack.svg";

const Skills = () => {
  const [isShown, setIsShown] = useState(false);
  const nodeRef = useRef(null);
  const floatRef = useRef(null);

  useEffect(() => {
    setIsShown(true);
  }, []);

  useEffect(() => {
    gsapFloat(floatRef, ".skills-section");
  }, []);

  return (
    <section className="page-section skills-section">
      <div className="screen-cover"></div>
      <CSSTransition
        nodeRef={nodeRef}
        in={isShown}
        timeout={1000}
        classNames="skills-page-content"
        unmountOnExit
      >
        <div ref={nodeRef} className="skills-text-container">
          <h3 className="skills-title">
            Here are some technologies I work with
          </h3>
          <p className="skills-text">
            Apart from <span>HTML5</span> and <span>CSS</span>. I am proficient
            in writing modern <span>JavaScript</span> including ES6+, OOP, and
            FP with testing in <span>Jest</span> and bundling in{" "}
            <span>Webpack</span>. I have primarily worked with{" "}
            <span>React</span> as my framework of choice and <span>NodeJS</span>
            , <span>MongoDB</span> with <span>Mongoose</span> for back-end. I am
            also currently learning Typescript, NextJS and SASS.
          </p>
        </div>
      </CSSTransition>
      <div className="skills-content-container" ref={floatRef}>
        <div className="ribbon-container">
          <ul className="ribbon">
            <li>
              <img src={jsLogo} alt="center" className="first-image" />
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
              <img className="logo node-logo" src={nodejsLogo} alt="" />
            </li>
            <li>
              <img className="logo" src={reactLogo} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
