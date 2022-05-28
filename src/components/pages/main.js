import React from "react";
import "./main.css";
import backgroundVideo from "../../video/background5.mp4";


const Main = () => {
  return (
    <section className="page-section main">
      <video src={backgroundVideo} autoPlay muted loop></video>
      <div className="screen-cover"></div>
      <div className="main-content-container">
        <div className="main-title-group">
          <h3 className="small-title">
            Hi! I'm <span>Ivan</span>,
          </h3>
          <h3 className="main-title dev-title">
            A researcher turned a{" "}
            <div className="sign">
              <span className="fast-flicker">f</span>ull
              <span className="flicker">-s</span>tack
            </div>
            {" "} developer!
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
