import React, { useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesComponent = (props) => {
  const options = useMemo(() => {
    return {
      fpsLimit: 60,
      detectRetina: false,
      particles: {
        number: {
          limit: 90,
        },
        color: {
          value: "#d3d3d3",
        },
        links: {
          distance: 200,
          enable: true,
          color: "#d3d3d3",
        },
        move: {
          enable: true,
          speed: .2,
        },
      },
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          grab: {
            distance: 300,
            line_linked: {
              opacity: 1,
            },
          },
        },
      },
    };
  }, []);

  const particlesInit = async (main) => {
    return await loadSlim(main);
  };

  return (
    <>
      <Particles id={props.id} init={particlesInit} options={options} />
    </>
  );
};

export default ParticlesComponent;
