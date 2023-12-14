import React from "react";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Reviews from "./components/Reviews/Reviews";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="">
      <Header />
      <Intro />
      <Reviews />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
