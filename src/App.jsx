import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import OurServices from "./pages/OurServices";
import About from "./pages/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <OurServices />
      <About />
      <Footer />
    </>
  );
};

export default App;
