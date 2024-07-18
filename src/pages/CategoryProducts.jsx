import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useGetProductsQuery } from "../redux/slices/productApiSlice";

const CategoryProducts = () => {
  const { category } = useParams(); // Get the category from URL params
  const { data: products, isLoading, error } = useGetProductsQuery();

  const filteredProducts = products?.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-4">
      {filteredProducts?.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
      ) : (
        <p className="text-center text-gray-500">
          No products found in this category.
        </p>
      )}
    </div>
  );
};

export default CategoryProducts;
