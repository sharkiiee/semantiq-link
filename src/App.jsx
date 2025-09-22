import React from "react";

import Navbar from "./Components/Navbar";
import ShowCase from "./Components/ShowCase";
import About from "./Components/About";
import Services from "./Components/Services";
import View from "./Components/View";
import Client from "./Components/Client";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ShowCase/>
      <About/>
      <Services/>
      <View/>
      <Client/>
      <Footer/>
    </div>
  );
};

export default App;
