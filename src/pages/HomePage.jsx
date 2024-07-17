import React from "react";
import Details from "../components/Details";
import Trends from "../components/Trends";
import Products from "../components/Products";
import Contact from '../components/Contact'

const HomePage = () => {
  return (
    <>
      <Trends />
      <Products />
      <Details />
      <Contact/>
    </>
  );
};

export default HomePage;
