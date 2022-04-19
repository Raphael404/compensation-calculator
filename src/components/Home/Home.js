import React from "react";
import { Calculator } from "../Calculator";
import { Content } from "../Content";

const Home = () => {
  return (
    <div className="flex flex-row justify-between lg:flex-col">
      <Content />
      <Calculator />
    </div>
  );
};

export default Home;
