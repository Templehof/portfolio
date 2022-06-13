import React, { useEffect, useRef } from "react";
import "./contact.css";
import Map from "../UIelements/map";
import gsapFloat from "../UIelements/utils/gsap-float";
import mailIcon from "../images/mail.svg";
import { Fade } from "react-reveal";

const Contact = () => {
  const boxRef = useRef(null);

  const setFloater = () => {
    return gsapFloat(boxRef, ".contact-form-container");
  };

  useEffect(() => {
    setFloater();
  }, []);

  return (
    <section className="page-section contact-section" id="contact">
      <Fade right distance={"30%"} fraction={0.5} duration={2000}>
        <div className="content-container contact-wrapper">
          <div ref={boxRef} className="contact-form-container">
            <div className="contact-info-group">
              <p className="contact-info-title">Contact me</p>
              <img className="contact-icon" src={mailIcon} alt="mail" />
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
        </div>
      </Fade>
    </section>
  );
};

export default Contact;
