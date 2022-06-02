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
    <section className="page-section main">
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
        <div className="main-content-container" ref={nodeRef}>
          <div className="main-title-group">
            <h3 className="small-title">
              Hi! I'm <span>Ivan</span>,
            </h3>
            <h3 className="main-title dev-title">
              A researcher turned a{" "}
              <div className="sign">
                <span className="fast-flicker">f</span>ull
                <span className="flicker">-s</span>tack
              </div>{" "}
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
      </CSSTransition>
    </section>
  );
};

export default Main;
