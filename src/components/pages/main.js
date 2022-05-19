import React, { useState, useEffect } from "react";
import "./main.css";
import { CSSTransition } from "react-transition-group";
import BackgroundVideo from "../../video/background3.mp4";

const Main = () => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setIsShown(true);
  }, []);

  return (
    <section className="page-section main">
      <div className="main-content-container">
        <video src={BackgroundVideo} autoPlay muted loop></video>
        <div className="screen-cover"></div>
        <div className="main-title-group">
          <CSSTransition
            in={isShown}
            timeout={1000}
            classNames="main-page-content"
            unmountOnExit
          >
            <h3 className="small-title">
              Hi! I'm <span>Ivan</span>,
            </h3>
          </CSSTransition>
          <h3 className="main-title dev-title">
            A researcher turned a{" "}
            <ul className="stack">
              <li>f</li>
              <li>u</li>
              <li>l</li>
              <li>l</li>
              <li>-</li>
              <li>s</li>
              <li>t</li>
              <li>a</li>
              <li>c</li>
              <li>k</li>
            </ul>{" "}
            developer!
          </h3>
        </div>
        <p className="main-content">
          I build things for the web and look forward to opportunities to work
          on your amazing projects! I consider primarily{" "}
          <span> full-time and part-time front-end positions </span> but won't
          shy away from back-end as well.
        </p>
      </div>
    </section>
  );
};

export default Main;
