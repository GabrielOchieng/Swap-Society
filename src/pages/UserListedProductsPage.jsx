import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  useGetUserProductsQuery,
  useDeleteProductMutation,
} from "../redux/slices/productApiSlice"; // Assuming productApiSlice location
import ProductCard from "../components/ProductCard";

const UserListedProductsPage = () => {
  const dispatch = useDispatch();
  const { userId } = useParams(); // Get user ID from route parameters
  const { data: products, isLoading, error } = useGetUserProductsQuery(userId);
  const [
    deleteProduct,
    { isLoading: isDeleting, isSuccess, error: deleteError },
  ] = useDeleteProductMutation();

  if (isLoading) {
    return <div>Loading User Products...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!products.length) return <div>You have no listed products.</div>;

  const handleDeleteProduct = async (productId) => {
    try {
      await deleteProduct(productId); // Call deleteProduct mutation with product ID
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  return (
    <div className="bg-gray-100 w-full">
      <div className="container mx-auto px-4 py-10 ">
        <h1 className="font-bold mb-3">Your listed Listed Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onDelete={() => handleDeleteProduct(product._id)} // Pass handleDeleteProduct function with product ID
            />
          ))}
        </div>
        {isDeleting && <div>Deleting product...</div>}
        {isSuccess && <div>Product deleted successfully!</div>}
        {deleteError && (
          <div>Error deleting product: {deleteError.message}</div>
        )}
      </div>
    </div>
  );
};

export default UserListedProductsPage;
