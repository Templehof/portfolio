import React, { useEffect, useState } from "react";

import NavBar from "./components/UIelements/NavBar";
import Main from "./components/pages/main";
import Skills from "./components/pages/skills";
import Contact from "./components/pages/contact";
import Portfolio from "./components/pages/portfolio";
import Loader from "./components/UIelements/utils/loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  return (
    <div className="App">
      {isLoading && <Loader />}
      {!isLoading && (
        <React.Fragment>
          <NavBar />
          <Main />
          <Portfolio />
          <Skills />
          <Contact />
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
