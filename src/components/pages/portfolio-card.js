import React from "react";
import "./portfolio-card.css";

import { Fade } from "react-reveal";

const PortfolioCard = (props) => {
  return (
    <div className="portfolio-card">
      <Fade right distance={"30%"} fraction={0.5} duration={2000}>
        <div className="image-container">
          <img
            className="portfolio-image"
            src={props.image}
            alt="site-snapshot"
          />
        </div>
        <div className="portfolio-card-content">
          <h3 className="card-title">{props.title}</h3>
          <p className="card-text"> {props.description} </p>
          <p className="card-text-tech"> {props.tech} </p>
          <a
            className="card-link"
            href={props.link}
            target="_blank"
            rel="noreferrer noopener"
          >
            See it live
          </a>
          <a
            className="card-link"
            href={props.codelink}
            target="_blank"
            rel="noreferrer noopener"
          >
            See code front-end
          </a>
          {props.codelinkBack && (
            <a
              className="card-link"
              href={props.codelinkBack}
              target="_blank"
              rel="noreferrer noopener"
            >
              See code back-end
            </a>
          )}
        </div>
      </Fade>
    </div>
  );
};

export default PortfolioCard;
