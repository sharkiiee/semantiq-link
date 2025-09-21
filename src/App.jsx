import React from "react";

import Navbar from "./Components/Navbar";
import ShowCase from "./Components/ShowCase";
import About from "./Components/About";
import Services from "./Components/Services";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ShowCase/>
      <About/>
      <Services/>
    </div>
  );
};

export default App;
