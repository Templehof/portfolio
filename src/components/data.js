import umea from "./images/portfolio-images/umea.png";
import cityTravel from "./images/portfolio-images/cityTravel.png";
import bdev from "./images/portfolio-images/bdev.png";
import porto from "./images/portfolio-images/porto.png";

const portfolioData = [
  {
    title: "Tiles of Porto",
    shortTitle: "porto",
    description:
      "This fun small website feature beautiful photos of Porto in a draggable tile layout with inertia. The drag and inertia effect is implemented with Gsap library",
    techs: "React, Typescript, Gsap, HTML, CSS",
    link: "https://templehof.github.io/tiles-of-porto/",
    codelink: "https://github.com/Templehof/tiles-of-porto",
    image: porto
  },
  {
    title: "Umeå, city of the north",
    shortTitle: "umea",
    description:
      "This website is my tribute to the place that's been my home for six years. It features a cool 3d scroll made in pure JavaScript. Isn't fully responsive though.",
    techs: "Java Script, HTML5, CSS, Webpack",
    link: "https://templehof.github.io/Umea/",
    codelink: "https://github.com/Templehof/Umea",
    image: umea
  },
  {
    title: "Business/Dev",
    shortTitle: "bdev",
    description:
      "This website serves as a glossary of various business development tools. Frontend is built with React and a simple backend with NodeJs and MongoDB. Work in progress, tools reviews and ability to add own tools will be added soon.",
    techs: "ReactJs, CSS, NodeJS, MongoDB",
    link: "https://business-dev-tools.com/",
    codelink: "https://github.com/Templehof/bdev",
    codelinkBack: "https://github.com/Templehof/bdev-backend",
    image: bdev
  },
  {
    title: "City Break",
    shortTitle: "cityTravel",
    description:
      "One of the first websites I created while learning JS. It uses only vanilla JS/HTML/CSS. It look more or less decent though, check it out!",
    techs: "Java Script, HTML5, CSS",
    link: "https://templehof.github.io/city-travel/",
    codelink: "https://github.com/Templehof/city-travel",
    image: cityTravel
  },
];

export default portfolioData;
