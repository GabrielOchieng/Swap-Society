import React from "react";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div className="flex flex-col items-center gap-6  p-5 bg-orange-300">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl">What is B&S?</h1>
        <a href="/" className="underline">
          Read our wonderful growth story.
        </a>
      </div>
      <div
        className="flex justify-between gap-5 flex-wrap w-full
      "
      >
        <div className="flex flex-col gap-2 w-full md:w-[45%] lg:w-[30%]">
          <h3 className="font-bold text-2xl">A community doing good</h3>
          <p>
            Etsy is a global online marketplace, where people come together to
            make, sell, buy and collect unique items. We’re also a community
            pushing for positive change for small businesses, people, and the
            planet. Here are some of the ways we’re making a positive impact,
            together.
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full md:w-[45%] lg:w-[30%]">
          <h3 className="font-bold text-2xl">Support independent creators</h3>
          <p>
            There’s no Etsy warehouse – just millions of people selling the
            things they love. We make the whole process easy, helping you
            connect directly with makers to find something extraordinary.
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full md:w-[45%] lg:w-[30%]">
          <h3 className="font-bold text-2xl">Peace of mind</h3>
          <p>
            Your privacy is the highest priority of our dedicated team. And if
            you ever need assistance, we are always ready to step in for
            support.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <h5>Have a question? Well, we’ve got some answers.</h5>
        <Link
          to="/"
          className="border-2 border-black rounded-full p-2 hover:bg-orange-600"
        >
          Go To Help Center
        </Link>
      </div>
    </div>
  );
};

export default Details;
