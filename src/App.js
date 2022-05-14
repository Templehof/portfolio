import React, {useState} from "react";

import NavBar from "./components/UIelements/NavBar";
import Main from "./components/pages/main";
import Skills from "./components/pages/skills";
import Contact from "./components/pages/contact";

function App() {
  const [content, setContent] = useState("main")

  const toggleContent = (pageName) => {
    setContent(pageName)
  }

  return (
    <div className="App">
      <NavBar handleClick={toggleContent} />
      {content === "main" && <Main />}
      {content === "skills" && <Skills />}
      {content === "contact" && <Contact />}

    </div>
  );
}

export default App;