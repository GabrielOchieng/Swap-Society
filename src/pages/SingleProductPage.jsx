import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  useGetProductByIdQuery,
  useGetProductsQuery,
} from "../redux/slices/productApiSlice";
import ProductCard from "../components/ProductCard";
import SkeletonProductCard from "../components/SkeletonProductCard";

const SingleProductPage = () => {
  const { productId } = useParams(); // Get product ID from URL parameters
  const [similarProducts, setSimilarProducts] = useState([]);

  const { data: product, isLoading, error } = useGetProductByIdQuery(productId);
  const {
    data: allProducts,
    isLoading: allProductsLoading,
    error: allProductsError,
  } = useGetProductsQuery();

  useEffect(() => {
    if (product && product.category) {
      const filteredProducts = allProducts?.filter(
        (item) => item.category === product.category && item._id !== productId
      );
      setSimilarProducts(filteredProducts || []); // Set empty array if no products found
    }
  }, [product, allProducts, productId]); // Add dependencies to useEffect

  if (isLoading) {
    return (
      <div>
        {" "}
        <SkeletonProductCard />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  if (allProductsLoading || allProductsError) {
    // Handle loading/error states for all products fetching (optional)
    return (
      <div>
        {" "}
        <SkeletonProductCard />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1>{product.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {product.images &&
          product.images.map((imageUrl, index) => (
            <img
              key={index} // Add a unique key for each image
              src={imageUrl}
              alt={`${product.title} - Image ${index + 1}`} // Descriptive alt text
              className="w-full h-auto object-cover rounded-md mb-4"
            />
          ))}
      </div>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="font-bold mb-4">Price: ${product.price}</p>
      <h2>Similar Products</h2>

      {similarProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {similarProducts.map((similarProduct) => (
            <ProductCard key={similarProduct._id} product={similarProduct} /> // Assuming ProductCard component
          ))}
        </div>
      ) : (
        <p>No similar products Available.</p>
      )}
      {/* Additional product details and functionalities can go here */}
    </div>
  );
};

export default SingleProductPage;
