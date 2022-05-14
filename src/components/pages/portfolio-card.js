import React from "react";
import "./portfolio-card.css";

const PortfolioCard = (props) => {
  const style = {};

  return (
    <div className="portfolio-card">
      <h3 className="card-title">{props.title}</h3>
      <div className="card-btn">Show more</div>
      <p className="card-text"> {props.description} </p>
      <p className="card-text"> Tech used: </p>
      <a className="card-link" href="#">
        Link
      </a>
    </div>
  );
};

export default PortfolioCard;
