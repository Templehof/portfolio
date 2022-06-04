import React, { useState, useEffect, useRef } from "react";
import "./skills.css";
import { CSSTransition } from "react-transition-group";

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

  useEffect(() => {
    setIsShown(true);
  }, []);

  return (
    <section className="page-section skills-section">
      <CSSTransition
        nodeRef={nodeRef}
        in={isShown}
        timeout={1000}
        classNames="skills-page-content"
        unmountOnExit
        mountOnEnter
      >
        <section className="skills-secondary page-section" ref={nodeRef}>
          <div className="skills-text-container">
            <h3 className="skills-title">
              Here are some technologies I work with
            </h3>
            <p className="skills-text">
              Apart from <span>HTML5</span> and <span>CSS</span>. I am
              proficient in writing modern <span>JavaScript</span> including
              ES6+, OOP, and FP with testing in <span>Jest</span> and bundling
              in <span>Webpack</span>. I have primarily worked with{" "}
              <span>React</span> as my framework of choice and{" "}
              <span>NodeJS</span>, <span>MongoDB</span> with{" "}
              <span>Mongoose</span> for back-end. I am also currently learning
              Typescript, NextJS and SASS.
            </p>
          </div>
          <div className="skills-content-container">
            <div className="box-container">
              <ul className="box">
                <li>
                  <img className="logo" src={jsLogo} alt="" />
                  <div className="cube__face cube__face--front"></div>
                  <div className="cube__face cube__face--back"></div>
                  <div className="cube__face cube__face--right"></div>
                  <div className="cube__face cube__face--left"></div>
                  <div className="cube__face cube__face--top"></div>
                  <div className="cube__face cube__face--bottom"></div>
                </li>
                <li>
                  <img className="logo" src={htmlLogo} alt="" />
                  <div className="cube__face cube__face--front"></div>
                  <div className="cube__face cube__face--back"></div>
                  <div className="cube__face cube__face--right"></div>
                  <div className="cube__face cube__face--left"></div>
                  <div className="cube__face cube__face--top"></div>
                  <div className="cube__face cube__face--bottom"></div>
                </li>
                <li>
                  <img className="logo" src={cssLogo} alt="" />
                  <div className="cube__face cube__face--front"></div>
                  <div className="cube__face cube__face--back"></div>
                  <div className="cube__face cube__face--right"></div>
                  <div className="cube__face cube__face--left"></div>
                  <div className="cube__face cube__face--top"></div>
                  <div className="cube__face cube__face--bottom"></div>
                </li>
                <li>
                  <img className="logo" src={gitLogo} alt="" />

                  <div className="cube__face cube__face--front"></div>
                  <div className="cube__face cube__face--back"></div>
                  <div className="cube__face cube__face--right"></div>
                  <div className="cube__face cube__face--left"></div>
                  <div className="cube__face cube__face--top"></div>
                  <div className="cube__face cube__face--bottom"></div>
                </li>
                <li>
                  <img className="logo" src={webpackLogo} alt="" />
                  <div className="cube__face cube__face--front"></div>
                  <div className="cube__face cube__face--back"></div>
                  <div className="cube__face cube__face--right"></div>
                  <div className="cube__face cube__face--left"></div>
                  <div className="cube__face cube__face--top"></div>
                  <div className="cube__face cube__face--bottom"></div>
                </li>
                <li>
                  <img className="logo" src={jestLogo} alt="" />

                  <div className="cube__face cube__face--front"></div>
                  <div className="cube__face cube__face--back"></div>
                  <div className="cube__face cube__face--right"></div>
                  <div className="cube__face cube__face--left"></div>
                  <div className="cube__face cube__face--top"></div>
                  <div className="cube__face cube__face--bottom"></div>
                </li>
                <li>
                  <img className="logo" src={mongodbLogo} alt="" />
                  <div className="cube__face cube__face--front"></div>
                  <div className="cube__face cube__face--back"></div>
                  <div className="cube__face cube__face--right"></div>
                  <div className="cube__face cube__face--left"></div>
                  <div className="cube__face cube__face--top"></div>
                  <div className="cube__face cube__face--bottom"></div>
                </li>
                <li>
                  <img className="logo" src={nodejsLogo} alt="" />
                  <div className="cube__face cube__face--front"></div>
                  <div className="cube__face cube__face--back"></div>
                  <div className="cube__face cube__face--right"></div>
                  <div className="cube__face cube__face--left"></div>
                  <div className="cube__face cube__face--top"></div>
                  <div className="cube__face cube__face--bottom"></div>
                </li>
                <li>
                  <img className="logo" src={reactLogo} alt="" />
                  <div className="cube__face cube__face--front"></div>
                  <div className="cube__face cube__face--back"></div>
                  <div className="cube__face cube__face--right"></div>
                  <div className="cube__face cube__face--left"></div>
                  <div className="cube__face cube__face--top"></div>
                  <div className="cube__face cube__face--bottom"></div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </CSSTransition>
    </section>
  );
};

export default Skills;
