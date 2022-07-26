import React, { useEffect, useState } from "react";

import LightParticles from "./components/UIelements/utils/lightParticles";
import NavBar from "./components/UIelements/NavBar";
import Main from "./components/pages/main";
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
      <LightParticles />
      {isLoading && <Loader />}
      {!isLoading && (
        <React.Fragment>
          <NavBar />
          <Main />
          <Portfolio />
          <Contact />
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
