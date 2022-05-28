import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./portfolio.css";

import PortfolioCard from "./portfolio-card";
import portfolioData from "../data";
import backgroundVideo2 from "../../video/background1.mp4";
import gsapFloat from "../UIelements/utils/gsap-float";

const Portfolio = () => {
  const [data, setData] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const boxRef = useRef(null);

  const getCards = () => {
    const cards = data.map((card) => {
      return (
        <PortfolioCard
          title={card.title}
          description={card.description}
          tech={card.techs}
          link={card.link}
          key={portfolioData.indexOf(card)}
          shape={card.shape}
        />
      );
    });
    return cards;
  };

  useEffect(() => {
    setIsShown(true);
    setData(portfolioData);
  }, []);

  useEffect(() => {
    gsapFloat(boxRef, ".card-container");
  }, []);

  return (
    <div className="card-container">
      <video src={backgroundVideo2} autoPlay muted loop></video>
      <div className="screen-cover"></div>
      <CSSTransition
        nodeRef={boxRef}
        in={isShown}
        timeout={1000}
        classNames="portfolio-card-holder"
        unmountOnExit
      >
        <div className="card-holder" ref={boxRef}>
          {getCards()}
        </div>
      </CSSTransition>
    </div>
  );
};

export default Portfolio;
