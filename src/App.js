import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/UIelements/NavBar";
import Main from "./components/pages/main";
import Skills from "./components/pages/skills";
import Contact from "./components/pages/contact";
import Portfolio from "./components/pages/portfolio";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div className="App">
      <div className="animated-cursor">
      <AnimatedCursor
        innerSize={16}
        outerSize={24}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      </div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/portfolio/" element={<Portfolio />} />
          <Route path="/skills/" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
