import React from "react";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../redux/slices/productApiSlice";
import { IoClose } from "react-icons/io5";

const CategoriesModal = ({ onClose }) => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  if (isLoading) {
    return <div>Loading Categories...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Extract unique categories and count products in each category
  const categoryProductCount = products.reduce((acc, product) => {
    const category = product.category.toLowerCase();
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className=" top-60">
      <div className="fixed w-[75%] z-50 sm:w-[50%] md:w-[25%] left-0 top-16 lg:top-0 bg-white rounded shadow-md">
        <div className="bg-gray-900 text-white h-16 p-4 flex justify-between items-center text-2xl font-bold">
          <h2>Categories</h2>
          <IoClose className="cursor-pointer" onClick={onClose} />
        </div>
        {Object.keys(categoryProductCount).length > 0 ? (
          <ul className=" space-y-2 p-4">
            {Object.entries(categoryProductCount).map(([category, count]) => (
              <li
                key={category}
                className="text-black hover:text-orange-500 cursor-pointer"
              >
                <Link to={`/categories/${category}`}>
                  {category} ({count} products)
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-orange-500">No categories found.</p>
        )}
      </div>
    </div>
  );
};

export default CategoriesModal;
