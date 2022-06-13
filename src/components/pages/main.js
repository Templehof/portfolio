import React from "react";
import "./main.css";
import BackgroundParticles from "../UIelements/utils/backgroundParticles";
import { Fade } from "react-reveal";
import { Zoom } from "react-reveal";

const Main = () => {
  let width = window.visualViewport.width;

  return (
    <section className="page-section main-section">
      {width > 900 && (
        <Zoom delay={1000}>
          <div className="backgroundParticles">
            <BackgroundParticles />
          </div>
        </Zoom>
      )}
      <div className="content-container main-content-container" id="main">
        <Fade right distance={"30%"} fraction={0.5} duration={2000} >
          <div className="main-texts-container">
            <h1 className="main-title">Hi there! I'm Ivan</h1>
            <h2 className="main-subtitle">A full-stack web-developer</h2>
            <p className="main-text">
              I build things for the web and look forward to opportunities to
              work on your amazing projects! I consider primarily{" "}
              <span> full-time and part-time front-end positions </span> but
              won't shy away from back-end as well.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Main;
