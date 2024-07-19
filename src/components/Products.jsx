// import chef from "../assets/images/chef.avif";
// import decor from "../assets/images/decor.avif";
// import girl from "../assets/images/girl.webp";
// import necklace from "../assets/images/necklace.webp";
// import portrait from "../assets/images/portrait.avif";
// import vintage from "../assets/images/vintage.avif";
// import car from "../assets/images/car.jpeg";
import { useGetProductsQuery } from "../redux/slices/productApiSlice";
import { Link } from "react-router-dom";
import ProductSkeleton from "./ProductSkeleton";

const Products = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  if (isLoading) {
    return <ProductSkeleton />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-col mx-auto p-8 bg-gray-100">
      <div>
        <h3 className="text-xl font-bold text-center mb-2">
          Featured Products
        </h3>
      </div>

      <div className="flex flex-wrap gap-4 justify-center md:justify-between">
        {products.map((product) => (
          <Link to={`/products/${product._id}`}>
            <div
              key={product._id}
              className="rounded-md bg-white h-64 border flex flex-col gap-4 hover:shadow-2xl"
            >
              <div>
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-48 h-48 object-cover"
                />
              </div>
              <div className="pb-2 pl-2">
                <p>{product.title}</p>
                <p className="text-green-500">{product.price}</p>{" "}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
