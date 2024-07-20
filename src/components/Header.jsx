import React, { useState } from "react";
import chef from "../assets/images/chef.avif";
import decor from "../assets/images/decor.avif";
import girl from "../assets/images/girl.webp";
import necklace from "../assets/images/necklace.webp";
import portrait from "../assets/images/portrait.avif";
import vintage from "../assets/images/vintage.avif";
import car from "../assets/images/car.jpeg";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const images = [chef, decor, girl, necklace, portrait, vintage, car]; // Array of image sources
const texts = [
  // Array of text content for each image
  "Chef",
  "Decor",
  "Girl",
  "Necklace",
  "Portrait",
  "Vintage",
  "Cars",
];

const backgroundColors = [
  "bg-orange-500",
  "bg-orange-200",
  "bg-orange-300",
  "bg-orange-400",
  "bg-orange-500",
  "bg-orange-600",
  "bg-orange-700",
];

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Initial image index

  const handleNextClick = () => {
    const nextIndex = (currentImageIndex + 1) % images.length; // Wrap around for last image
    setCurrentImageIndex(nextIndex);
  };

  const handleBackClick = () => {
    const nextIndex = (currentImageIndex - 1 + images.length) % images.length; // Handle negative index
    setCurrentImageIndex(nextIndex);
  };

  return (
    <div className="header-container relative w-full h-72 overflow-hidden grid grid-cols-12">
      <div
        className={` flex items-center justify-center col-span-6 ${backgroundColors[currentImageIndex]}`}
      >
        <h2 className="text-content text-xl text-white absolute top-1/2 font-bold">
          {texts[currentImageIndex]}
        </h2>
      </div>

      <img
        src={images[currentImageIndex]}
        alt="Image carousel"
        className="header-image w-full h-full object-cover object-center col-span-6"
      />

      <button
        className="arrow-button absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-opacity-75 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black col-span-1"
        onClick={handleBackClick}
      >
        <IoIosArrowBack size={24} />
      </button>
      <button
        className="arrow-button absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-opacity-75 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black col-span-1 justify-self-end"
        onClick={handleNextClick}
      >
        <IoIosArrowForward size={24} />
      </button>
    </div>
  );
};

export default Header;
