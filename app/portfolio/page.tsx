import React from "react";
import Image from "next/image";
import show1 from "../../assets/images/show-7.jpg"
import show2 from "../../assets/images/show-4.jpg"
import show3 from "../../assets/images/show-5.jpg"

const Portfolio: React.FC = () => {
  return (
    <section className="portfolio">
      <div className="work-container">
        <h2>Work Showcase</h2>
        <h1>Recent Work Showcase</h1>
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <Image src={show1} alt="Project 1" />
            <p>Road Freight Projects</p>
          </div>
          <div className="portfolio-item">
            <Image src={show2} alt="Project 2" />
            <p>Land Freight Project</p>
          </div>
          <div className="portfolio-item">
            <Image src={show3} alt="Project 3" />
            <p>Shipping Service Project</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
