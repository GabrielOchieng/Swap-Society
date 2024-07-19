import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // Import useSelector

const ProductCard = ({ product, onDelete }) => {
  const { userInfo } = useSelector((state) => state.auth); // Access user info from Redux

  const isProductSeller = userInfo._id === product.seller._id; // Check if current user is the seller

  // Implement logic to display product details (title, image, price, etc.)
  // You can link to a product details page here if needed.

  return (
    <div className="bg-white rounded shadow-md p-4">
      <img
        src={product.images && product.images[0]} // Assuming first image in 'images' array
        alt={product.title}
        className="w-full h-40 object-cover rounded-t-md"
      />
      <div className="p-4 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
          <p className="text-gray-700 mb-2">Ksh. {product.price}</p>
          <p className="text-gray-700 mb-2">{product.location}</p>
        </div>
        <div className="flex flex-col justify-between gap-4">
          <div className="bg-orange-400 p-1 hover:bg-orange-700">
            <Link to={`/products/${product._id}`}>Details</Link>
          </div>
          {isProductSeller && ( // Conditionally render delete button
            <div>
              <MdDelete
                className="text-red-700 text-xl cursor-pointer hover:text-2xl"
                onClick={onDelete}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
