import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Details = () => {
  return (
    <div className="flex flex-col items-center gap-6 p-8 bg-gray-800">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          What is Swap-Society?
        </h1>
        <a href="/" className="underline text-gray-200">
          Read our wonderful growth story.
        </a>
      </div>
      <div
        className="flex justify-between gap-5 flex-wrap w-full
      "
      >
        <div className="flex flex-col gap-2 w-full md:w-[45%] lg:w-[30%] bg-gray-700 p-4">
          <h3 className="font-medium text-xl md:text-2xl text-orange-500">
            A community doing good
          </h3>
          <p className="text-white">
            Swap-Society is a global online marketplace, where people come
            together to make, sell, buy and collect unique items. We’re also a
            community pushing for positive change for small businesses, people,
            and the planet. Here are some of the ways we’re making a positive
            impact, together.
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full md:w-[45%] lg:w-[30%] bg-gray-700 p-4">
          <h3 className="font-medium text-xl md:text-2xl text-orange-500">
            Support independent creators
          </h3>
          <p className="text-white">
            There’s no Swap-Society warehouse – just millions of people selling
            the things they love. We make the whole process easy, helping you
            connect directly with makers to find something extraordinary.
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full md:w-[45%] lg:w-[30%] bg-gray-700 p-4">
          <h3 className="font-medium text-xl md:text-2xl text-orange-500">
            Peace of mind
          </h3>
          <p className="text-white">
            Your privacy is the highest priority of our dedicated team. And if
            you ever need assistance, we are always ready to step in for
            support.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 bg-gray-700 py-4 px-8">
        <h5 className="text-orange-500">
          Have a question? Well, we’ve got some answers.
        </h5>
        <Link
          to="/"
          className=" text-white border-2 border-gray-900 rounded-full p-2 hover:bg-orange-500 hover:text-black hover:border-orange-500 flex items-center justify-between"
        >
          Go To Help Center
          <MdKeyboardDoubleArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Details;
