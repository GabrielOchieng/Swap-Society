import React from "react";
import { useGetProductsQuery } from "../redux/slices/productApiSlice";

const ProductsPage = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  if (isLoading) {
    return <div>Loading Products...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  // Implement logic to display product details (title, image, price, etc.)
  // You can link to a product details page here if needed.
  return (
    <div className="bg-gray-100 rounded shadow-md p-4">
      <img
        src={product.images && product.images[0]} // Assuming first image in 'images' array
        alt={product.title}
        className="w-full h-40 object-cover rounded-t-md"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-700 mb-2">{product.price}</p>
        <p className="text-gray-700 mb-2">{product.location}</p>
      </div>
    </div>
  );
};

export default ProductsPage;
