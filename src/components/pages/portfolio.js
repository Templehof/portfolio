import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./portfolio.css";

import PortfolioCard from "./portfolio-card";
import portfolioData from "../data";

const Portfolio = () => {
  const [data, setData] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const nodeRef = useRef(null);

  const getCards = () => {
    const cards = data.map((card) => {
      return (
        <PortfolioCard
          title={card.title}
          description={card.description}
          tech={card.techs}
          link={card.link}
          codelink={card.codelink}
          key={portfolioData.indexOf(card)}
          shortTitle={card.shortTitle}
          imageurl={card.imageurl}
          codelinkBack={card.codelinkBack}
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
    <section className="page-section portfolio-section">
      <div className="content-container card-container">
        <CSSTransition
          in={isShown}
          timeout={1000}
          classNames="portfolio-card-holder"
          unmountOnExit
          mountOnEnter
          nodeRef={nodeRef}
        >
          <div className="card-holder" ref={nodeRef}>
            {getCards()}
          </div>
        </CSSTransition>
      </div>
    </section>
  );
};

export default Portfolio;
