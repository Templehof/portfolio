import React from "react";
import "./portfolio-card.css";

import umea from "../images/portfolio-images/umea.png";
import cityTravel from "../images/portfolio-images/cityTravel.png";
import bdev from "../images/portfolio-images/bdev.png";
import creative from "../images/portfolio-images/creative.png";
import { Fade } from "react-reveal";

const PortfolioCard = (props) => {
  const images = [
    { title: "umea", url: umea },
    { title: "cityTravel", url: cityTravel },
    { title: "bdev", url: bdev },
    { title: "creative", url: creative },
  ];

  function pickImage() {
    for (let i = 0; i < images.length; i++) {
      if (props.shortTitle === images[i].title) {
        return images[i].url;
      }
    }
  }

  return (
    <div className="portfolio-card">
      <Fade right distance={"30%"} fraction={0.5}  duration={2000}>
        <div className="image-container">
          <img
            className="portfolio-image"
            src={pickImage()}
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
