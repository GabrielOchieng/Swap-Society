import React from "react";
import Details from "../components/Details";
import Trends from "../components/Trends";
import Products from "../components/Products";

const HomePage = () => {
  return (
    <>
      <Trends />
      <Products />
      <Details />
    </>
  );
};

export default HomePage;
