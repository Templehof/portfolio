import React, { useState, useEffect } from "react";
import "./main.css";
import { CSSTransition } from "react-transition-group";

import Floaters from "../UIelements/floaters";
import PortfolioCard from "./portfolio-card";

const portfolioData = [
  {
    title: "diaspora",
    description:
      "Website created for a non-profit organization that helps refugees. Made in React",
  },
  {
    title: "B/dev",
    description:
      "A website that features a catalog of business development tools. Front-end made in React. Back-end made with NodeJS and MongoDB",
  },
  { title: "CSS scene", description: "A cool 3d scene created in pure CSS" },
  {
    title: "City-travel",
    description: "A test website created in vanilla JS, HTML and CSS",
  },
  {
    title: "Creative valuSqrd",
    description:
      "A full-stack web-app for culture and creative industries incubators. Front-end made in React. Back-end is made with NodeJs, and MongoDB",
  },
];

const Main = () => {
  const [data, setData] = useState([]);
  const [isShown, setIsShown] = useState(false)

  const getCards = () => {
    const cards = data.map((card) => {
      return (
        <PortfolioCard
          title={card.title}
          description={card.description}
          key={portfolioData.indexOf(card)}
        />
      );
    });
    return cards;
  };

  useEffect(()=>{
    setData(portfolioData)
    setIsShown(true)
  }, [])

  return (
    <section className="page-section main">
      <CSSTransition in={isShown} timeout={1000} classNames="main-page-content">
      <div className="main-content-container">
        <div className="main-title-group">
          <h3 className="main-title">
            Hi! I'm <span>Ivan</span>,
          </h3>
          <h3 className="main-title dev-title">
            A former business researcher gone a {" "}
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
            </ul>
           {" "} developer!
          </h3>
        </div>
        <p className="main-content">
          I'm a full-stack developer located in Sweden. I used to be a business
          researcher who really wanted to implement modern business tools in a
          digital forms. So, I started learning web development and found my new
          passion! I'm serious about constantly improving and expanding my
          development <span> skills </span> and look forward to opportunities to
          work on your amazing projects! I consider primarily{" "}
          <span> full-time and part-time front-end positions </span> but won't
          shy away from back-end as well.
        </p>
        <p className="main-content">
          Below you can see some of my portfolio projects!
        </p>
      </div>
      </CSSTransition>
      <div className="card-container">{getCards()}</div>
      <Floaters />
    </section>
  );
};

export default Main;