import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import OurServices from "./pages/OurServices";
import About from "./pages/About";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <OurServices />
      <About />
    </>
  );
};

export default App;
