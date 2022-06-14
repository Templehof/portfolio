import React, { useEffect } from "react";
import { Particle } from "jparticles";

const LightParticles = () => {
  useEffect(() => {
    new Particle("#light", {
      // opacity: 0 ~ 1
      opacity: .5,
      // 'red' or ['red', 'blue', 'green']
      color: ["#FFFF"],
      // auto resize to fit the screen
      resize: true,
      // number of particles
      num: 0.05,
      // min radius
      minR: 0,
      // max speed
      maxSpeed: 0.2,
      // min speed
      minSpeed: 0.1,
      // connection line options
      range: 0,
      // line width
      // null = current canvas element
      eventElem: null,
      // enable parallax effect
      parallax: false,
      // parallax layers
    });
  }, []);

  return <div id="light"></div>;
};

export default LightParticles;