import React from "react";
import "./contact.css";
import Map from "../UIelements/map";

const Contact = () => {
  return (
    <section className="page-section contact-section">
      <div className="contact-container">
        <h3 className="contact-title">Send me a message!</h3>
        <form
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <label htmlFor="email">Your email:</label>
          <input type="email" id="email" placeholder="example@hotmail.com" />
          <label htmlFor="message">Your message:</label>
          <textarea type="text" rows={4} id="message" />
          <button type="submit" className="contact-submit-btn">
            Send
          </button>
        </form>
      </div>
      <p className="email">ivan.riumkin@protonmail.com</p>
      <Map center={{lat: 63.825848, lng:20.263035}} zoom={4}/>
    </section>
  );
};

export default Contact;
