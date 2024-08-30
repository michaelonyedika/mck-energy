import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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

AOS.init({
  duration: "1000",
});
export default Home;
