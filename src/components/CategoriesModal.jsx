import React from "react";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../redux/slices/productApiSlice";

const CategoriesModal = () => {
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
    <div className="opacity-75 z-50">
      <div className="absolute left-[100px] top-[150px]  transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 rounded shadow-md p-4">
        <h2 className="underline font-bold">Categories</h2>
        {Object.keys(categoryProductCount).length > 0 ? (
          <ul className="list-disc pl-4 space-y-2">
            {Object.entries(categoryProductCount).map(([category, count]) => (
              <li
                key={category}
                className="text-gray-700 hover:text-teal-500 cursor-pointer"
              >
                <Link to={`/categories/${category}`}>
                  {category} ({count} products)
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No categories found.</p>
        )}
      </div>
    </div>
  );
};

export default CategoriesModal;
