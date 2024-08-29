import React from "react";
import Hero from "./hero/page";
import About from "./about/page";
import Services from "./services/page";
import Portfolio from "./portfolio/page";
import Counter from "./counter/page";
import Blog from "./blog/page";
import Contact from "./contact/page";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services/>
      <Portfolio/>
      <Counter/>
      <Blog/>
      <Contact/>
    </div>
  );
};

export default Home;
