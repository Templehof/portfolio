import React from "react";
import "./skills.css";

import Floaters from "../UIelements/floaters";
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

  return (
    <section className="page-section skills-section">
        <div className="skills-text-container">
          <h3 className="skills-title">
            Here are some technologies I work with
          </h3>
          <p className="skills-text">
            Apar from <span>HTML5</span> and <span>CSS</span>. I am proficient
            in writing modern <span>JavaScript</span> including ES6+, OOP, and
            FP. I have primarily worked with <span>React</span> as my framework
            of choice and <span>NodeJS</span>, <span>MongoDB</span> with{" "}
            <span>Mongoose</span> for back-end. I am also currently learning
            Typescript, NextJS and SASS.
          </p>
        </div>
      <div className="skills-content-container">
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

      <Floaters />
    </section>
  );
};

export default Skills;