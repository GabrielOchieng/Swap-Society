import React from "react";

const BackTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="w-full h-16 bg-gray-800  cursor-pointer flex items-center justify-center "
      onClick={handleScrollToTop}
    >
      <p className=" text-white">Back to top</p>
    </div>
  );
};

export default BackTop;
