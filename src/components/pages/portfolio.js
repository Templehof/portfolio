import React, { useState, useEffect, useRef } from "react";
import "./portfolio.css";

import PortfolioCard from "./portfolio-card";
import portfolioData from "../data";

const Portfolio = () => {
  const [data, setData] = useState([]);

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
    setData(portfolioData);
  }, []);

  return (
    <section className="page-section portfolio-section" id="portfolio">
      <div className="content-container card-container">
          <div className="card-holder">
            {getCards()}
          </div>
      </div>
    </section>
  );
};

export default Portfolio;
