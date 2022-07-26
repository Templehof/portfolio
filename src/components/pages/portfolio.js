import React from "react";
import "./portfolio.css";

import PortfolioCard from "./portfolio-card";
import portfolioData from "../data";

const Portfolio = () => {
  return (
    <section className="page-section portfolio-section" id="portfolio">
      <div className="content-container card-container">
        <div className="card-holder">
        <h2 className="portfolio-title">Some of my works</h2>
          {portfolioData.map((card) => {
            return (
              <PortfolioCard
                title={card.title}
                description={card.description}
                tech={card.techs}
                link={card.link}
                codelink={card.codelink}
                key={portfolioData.indexOf(card)}
                shortTitle={card.shortTitle}
                image={card.image}
                codelinkBack={card.codelinkBack}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
