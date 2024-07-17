import chef from "../assets/images/chef.avif";
import decor from "../assets/images/decor.avif";
import girl from "../assets/images/girl.webp";
import necklace from "../assets/images/necklace.webp";
import portrait from "../assets/images/portrait.avif";
import vintage from "../assets/images/vintage.avif";
import car from "../assets/images/car.jpeg";

const Products = () => {
  return (
    <div className="flex flex-col mx-auto px-5 py-4">
      <div>
        <h3 className="text-xl font-bold">Featured Products</h3>
      </div>
      <div className="flex flex-wrap gap-2 justify-between">
        <div className="rounded-md bg-white h-64 border flex flex-col gap-4 hover:shadow-2xl">
          <div>
            {" "}
            <img
              src={car}
              alt="featured product"
              className="w-48 h-48 object-cover"
            />
          </div>
          <div className="pb-2 pl-2">
            <p>Suzuki Swift 2019 Black</p>
            <p className="text-green-500">KSh. 1,450,000</p>
          </div>
        </div>
        <div className="rounded-md bg-white h-64 border flex flex-col gap-4 hover:shadow-2xl">
          <div>
            {" "}
            <img
              src={chef}
              alt="featured product"
              className="w-48 h-48 object-cover"
            />
          </div>
          <div className="pb-2 pl-2">
            <p>Suzuki Swift 2019 Black</p>
            <p className="text-green-500">KSh. 1,450,000</p>
          </div>
        </div>
        <div className="rounded-md bg-white h-64 border flex flex-col gap-4 hover:shadow-2xl">
          <div>
            {" "}
            <img
              src={decor}
              alt="featured product"
              className="w-48 h-48 object-cover"
            />
          </div>
          <div className="pb-2 pl-2">
            <p>Suzuki Swift 2019 Black</p>
            <p className="text-green-500">KSh. 1,450,000</p>
          </div>
        </div>
        <div className="rounded-md bg-white h-64 border flex flex-col gap-4 hover:shadow-2xl">
          <div>
            {" "}
            <img
              src={girl}
              alt="featured product"
              className="w-48 h-48 object-cover"
            />
          </div>
          <div className="pb-2 pl-2">
            <p>Suzuki Swift 2019 Black</p>
            <p className="text-green-500">KSh. 1,450,000</p>
          </div>
        </div>
        <div className="rounded-md bg-white h-64 border flex flex-col gap-4 hover:shadow-2xl">
          <div>
            {" "}
            <img
              src={portrait}
              alt="featured product"
              className="w-48 h-48 object-cover"
            />
          </div>
          <div className="pb-2 pl-2">
            <p>Suzuki Swift 2019 Black</p>
            <p className="text-green-500">KSh. 1,450,000</p>
          </div>
        </div>
        <div className="rounded-md bg-white h-64 border flex flex-col gap-4 hover:shadow-2xl">
          <div>
            {" "}
            <img
              src={vintage}
              alt="featured product"
              className="w-48 h-48 object-cover"
            />
          </div>
          <div className="pb-2 pl-2">
            <p>Suzuki Swift 2019 Black</p>
            <p className="text-green-500">KSh. 1,450,000</p>
          </div>
        </div>
        <div className="rounded-md bg-white h-64 border flex flex-col gap-4 hover:shadow-2xl">
          <div>
            {" "}
            <img
              src={necklace}
              alt="featured product"
              className="w-48 h-48 object-cover"
            />
          </div>
          <div className="pb-2 pl-2">
            <p>Suzuki Swift 2019 Black</p>
            <p className="text-green-500">KSh. 1,450,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
