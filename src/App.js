import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/UIelements/NavBar";
import Main from "./components/pages/main";
import Skills from "./components/pages/skills";
import Contact from "./components/pages/contact";

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/skills/" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;