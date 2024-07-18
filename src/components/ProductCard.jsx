const ProductCard = ({ product }) => {
  // Implement logic to display product details (title, image, price, etc.)
  // You can link to a product details page here if needed.

  return (
    <div className="bg-white rounded shadow-md p-4">
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

export default ProductCard;
