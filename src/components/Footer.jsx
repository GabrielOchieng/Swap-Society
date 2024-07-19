import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { IoMdArrowDropupCircle } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <div className="bg-black text-white flex flex-col items-center p-8">
        <p className="text-sm">Copyright &copy; THEGABRIELSHOW 2024</p>
        <nav className="flex justify-center mt-2 space-x-4">
          <Link
            to="https://www.linkedin.com/in/gabrielochieng"
            target="_blank"
            className="text-gray-700 hover:text-orange-500 "
          >
            <FaLinkedinIn />
          </Link>
          <Link
            to="https://x.com/TechieGabriel?t=D8iyVIeZnEVOlPdImbJ2HQ&s=09"
            target="_blank"
            className="text-gray-700 hover:text-orange-500 "
          >
            <FaSquareXTwitter />
          </Link>
          <Link
            to="https://github.com/GabrielOchieng"
            target="_blank"
            className="text-gray-700 hover:text-orange-500 "
          >
            <FaGithubSquare />
          </Link>
        </nav>
        <p className="text-xs mt-2">All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
