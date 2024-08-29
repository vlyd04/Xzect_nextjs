import React from "react";

const Counter: React.FC = () => {
  return (
    <section className="counters">
      <div>
        <h2>Expertise Areas</h2>
        <h1>What You Get If You Join Our Partnership Branch</h1>
      </div>
      <div className="container">
        <div className="counter-1">
          <h1>60%</h1>
          <h3>Air Freight</h3>
        </div>
        <div className="counter-2">
          <h1>45%</h1>
          <h3>Land Freight</h3>
        </div>
        <div className="counter-3">
          <h1>86%</h1>
          <h3>Shipping Service</h3>
        </div>
        <div className="counter-4">
          <h1>98%</h1>
          <h3>Road Freight</h3>
        </div>
      </div>
    </section>
  );
};

export default Counter;
