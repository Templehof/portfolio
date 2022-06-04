import React, { useEffect, useRef, useState } from "react";
import "./contact.css";
import { CSSTransition } from "react-transition-group";
import Map from "../UIelements/map";
import gsapFloat from "../UIelements/utils/gsap-float";
import mailIcon from "../images/mail.svg";

const Contact = () => {
  const boxRef = useRef(null);
  const nodeRef = useRef(null);
  const [isShown, setIsShown] = useState(false);

  const setFloater = () => {
    return gsapFloat(boxRef, ".contact-container");
  };

  useEffect(() => {
    setIsShown(true);
  }, []);

  useEffect(() => {
    if (isShown) {
      setFloater();
    }
  }, [isShown]);
  return (
    <section className="page-section contact-section">
      <CSSTransition
        nodeRef={nodeRef}
        in={isShown}
        timeout={1000}
        classNames="contacting-page-content"
        unmountOnExit
        mountOnEnter
      >
        <section ref={nodeRef} className="page-section contact-secondary">
          <div ref={boxRef} className="contact-container">
            <div className="contact-info-group">
              <img className="contact-icon" src={mailIcon} alt="mail" />
              <div className="contact-info-title">
                <span>CONTACT</span>
                <span>ME</span>
              </div>
              <p className="email">ivan.riumkin@protonmail.com</p>
            </div>
            <form
              className="contact-form"
              action="https://formsubmit.co/e08ed884664d81c393b0e4163fcf5896"
              method="POST"
            >
              <input
                name="email"
                type="email"
                id="email"
                placeholder="Your email"
                required
              />
              <textarea
                name="text"
                type="text"
                rows={4}
                id="message"
                placeholder="Your message"
                required
              />
              <button type="submit" className="contact-submit-btn">
                Send
              </button>
            </form>
          </div>
          <div className="map-container">
            <Map center={{ lat: 63.825848, lng: 20.263035 }} zoom={4} />
          </div>
        </section>
      </CSSTransition>
    </section>
  );
};

export default Contact;
