import React, { useEffect } from "react";
import { Particle } from "jparticles";

const BackgroundParticles = () => {
  useEffect(() => {
    new Particle("#demo", {
      // opacity: 0 ~ 1
      opacity: 1,
      // 'red' or ['red', 'blue', 'green']
      color: ["#d0e04c"],
      // auto resize to fit the screen
      resize: false,
      // number of particles
      num: 0.07,
      // max radius
      maxR: 3,
      // min radius
      minR: 0.6,
      // max speed
      maxSpeed: 0.5,
      // min speed
      minSpeed: 0.1,
      // connection line options
      proximity: 0.1,
      range: 0.2,
      // line width
      lineWidth: 0.5,
      // spider or cube
      lineShape: "cube",
      // null = current canvas element
      eventElem: null,
      // enable parallax effect
      parallax: true,
      // parallax layers
      parallaxLayer: [1, 2, 3],
      // pallax strength
      parallaxStrength: 10,
    });
  }, []);

  return <div id="demo"></div>;
};

export default BackgroundParticles;
