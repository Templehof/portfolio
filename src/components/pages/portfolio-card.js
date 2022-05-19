import React from "react";
import "./portfolio-card.css";

const PortfolioCard = (props) => {
  return (
    <div className={`portfolio-card shape-outer ${props.shape}`}>
      <div className={`shape-inner ${props.shape}`}>
      <h3 className="card-title">{props.title}</h3>
      <p className="card-text"> {props.description} </p>
      <p className="card-text"> <span>Tech used:</span> {props.tech} </p>
      <a
        className="card-link"
        href={props.link}
        target="_blank"
        rel="noreferrer noopener"
      >
        See it live
      </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
