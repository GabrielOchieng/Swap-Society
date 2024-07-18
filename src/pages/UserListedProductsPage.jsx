import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetUserProductsQuery } from "../redux/slices/productApiSlice"; // Assuming productApiSlice location
import ProductCard from "../components/ProductCard";

const UserListedProductsPage = () => {
  const dispatch = useDispatch();
  const { userId } = useParams(); // Get user ID from route parameters
  const { data: products, isLoading, error } = useGetUserProductsQuery(userId);

  if (isLoading) {
    return <div>Loading User Products...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!products.length) return <div>This user has no listed products.</div>;

  return (
    <div className="container mx-auto px-4 py-10">
      <h1>{userId}'s Listed Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default UserListedProductsPage;
