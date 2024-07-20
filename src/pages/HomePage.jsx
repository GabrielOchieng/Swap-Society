import React from "react";
import Details from "../components/Details";
import Trends from "../components/Trends";
import Products from "../components/Products";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <Trends />
      <Products />
      <Details />
    </>
  );
};

export default HomePage;
