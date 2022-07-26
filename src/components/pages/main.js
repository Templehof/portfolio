import React from "react";
import "./main.css";
import { Fade } from "react-reveal";

const Main = () => {
  return (
    <section className="page-section main-section">
      <div className="content-container main-content-container" id="main">
        <Fade right distance={"30%"} fraction={0.5} duration={2000}>
          <div className="main-texts-container">
            <h1 className="main-title">Hi there! I'm Ivan</h1>
            <h2 className="main-subtitle">A full-stack web-developer</h2>
            <p className="main-text">
              I build things for the web and look forward to opportunities to
              work on your amazing projects! I consider primarily{" "}
              <span> full-time and part-time front-end positions </span> but
              won't shy away from back-end as well.
            </p>

            <h1 className="skills-title">
              Here are some technologies I work with
            </h1>
            <p className="skills-text">
              Apart from <span>HTML5</span> and <span>CSS</span>. I am
              proficient in writing modern{" "}
              <span>JavaScript and Typescript</span> including ES6+, OOP, and FP
              with testing in <span>Jest</span> and bundling in{" "}
              <span>Webpack</span>. I have primarily worked with{" "}
              <span>React</span> as my framework of choice and{" "}
              <span>NodeJS</span>, <span>MongoDB</span> with{" "}
              <span>Mongoose</span> for back-end.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Main;
