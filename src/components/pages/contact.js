import React, { useEffect, useRef } from "react";
import "./contact.css";
import Map from "../UIelements/map";
import gsapFloat from "../UIelements/utils/gsap-float";
import mailIcon from "../images/mail.svg";

const Contact = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsapFloat(boxRef, ".contact-container");
  }, []);
  return (
    <section className="page-section contact-section">
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
  );
};

export default Contact;
