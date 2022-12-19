import React, { useEffect } from "react";
import Contact from "./Contact";
import { useGlobalContext } from "./Context";
import HeroSection from "./HeroSection";
import Services from "./Services";

const Home = () => {
  // const data = {
  //     name: 'thapa technica',
  //     image: './images/hero.svg'
  // }

  const { updateHomePage } = useGlobalContext();

  useEffect(() => updateHomePage(), []);

  return (
    <>
      <HeroSection />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
