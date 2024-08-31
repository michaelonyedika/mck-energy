import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Analytics from "./Analytics";
import Newletter from "./Newletter";
import Card from "./Cards";
import Footer from "./Footer";

const Home = () => {
  useEffect(() => {
    AOS.init({
      delay: "100",
      duration: "1000",
    });
  }, []);

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
