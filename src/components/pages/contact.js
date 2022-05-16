import React, { useState, useEffect } from "react";
import "./contact.css";
import Map from "../UIelements/map";
import { CSSTransition } from "react-transition-group";

const Contact = () => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
      setIsShown(true);
  }, []);

  return (
    <section className="page-section contact-section">
      <div className="contact-container">
        <CSSTransition in={isShown} timeout={1000} classNames="contact-title" unmountOnExit >
          <h3 className="contact-title">Send me a message!</h3>
        </CSSTransition>
        <form
          className="contact-form"
          action="https://formsubmit.co/e08ed884664d81c393b0e4163fcf5896"
          method="POST"
        >
          <input
            name="email"
            type="email"
            id="email"
            placeholder="Type you email here"
            required
          />
          <textarea
            name="text"
            type="text"
            rows={4}
            id="message"
            placeholder="Type your message here"
            required
          />
          <button type="submit" className="contact-submit-btn">
            Send
          </button>
        </form>
      </div>
      <p className="email">ivan.riumkin@protonmail.com</p>
      <Map center={{ lat: 63.825848, lng: 20.263035 }} zoom={4} />
    </section>
  );
};

export default Contact;
