import React, { useRef, useState, useEffect } from "react";
import "./main.css";
import { CSSTransition } from "react-transition-group";
import BackgroundParticles from "../UIelements/utils/backgroundParticles";

const Main = (props) => {
  const [isShown, setIsShown] = useState(false);

  const nodeRef = useRef(null);

  let width = window.visualViewport.width;

  useEffect(() => {
    props.shown && setIsShown(true);
  }, [props.shown]);

  return (
    <section className="page-section main-section">
      {width > 900 && (
        <div className="backgroundParticles">
          <BackgroundParticles />
        </div>
      )}
      <CSSTransition
        nodeRef={nodeRef}
        in={isShown}
        timeout={1000}
        classNames="main-page-content"
        unmountOnExit
        mountOnEnter
      >
        <div className="content-container main-content-container" ref={nodeRef}>
          <div className ="main-texts-container">
            <h1 className="main-title">Hi there! I'm Ivan, a web-developer!</h1>
            <p className="sign">
              <span className="fast-flicker">f</span>ull
              <span className="flicker">-s</span>tack
            </p>
            <p className="main-text">
              I build things for the web and look forward to opportunities to
              work on your amazing projects! I consider primarily{" "}
              <span> full-time and part-time front-end positions </span> but
              won't shy away from back-end as well.
            </p>
          </div>
        </div>
      </CSSTransition>
    </section>
  );
};

export default Main;
