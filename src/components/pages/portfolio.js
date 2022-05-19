import React, { useState, useEffect } from "react";
import PortfolioCard from "./portfolio-card";
import "./portfolio.css";
import { CSSTransition } from "react-transition-group";

import portfolioData from "../data";

const Portfolio = () => {
  const [data, setData] = useState([]);
  const [isShown, setIsShown] = useState(false);

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

  return (
    <div className="card-container">
      <div className="screen-cover"></div>
      <CSSTransition
        in={isShown}
        timeout={1000}
        classNames="portfolio-card-holder"
        unmountOnExit
      >
        <div className="card-holder">{getCards()}</div>
      </CSSTransition>
    </div>
  );
};

export default Portfolio;
