import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Analytics from "./Analytics";
import Newletter from "./Newletter";
import Card from "./Cards";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newletter />
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
