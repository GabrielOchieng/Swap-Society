import React from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const ProductSearchModal = ({
  searchResults,
  onClose,
  searchTerm,
  handleSearchSubmit,
}) => {
  return (
    <div className="fixed top-32 lg:top-16 right-0 w-64 opacity-75 z-50 rounded-md shadow-md">
      <div className="bg-white text-black rounded p-3">
        <div className="flex justify-between mb-3">
          <h6 className="text-lg font-medium">Search Results</h6>
          <button type="button" onClick={onClose}>
            <IoClose className="text-2xl hover:text-black" />
          </button>
        </div>

        {searchResults.length > 0 ? (
          <ul className="list-none">
            {searchResults.map((product) => (
              <li key={product._id}>
                <Link
                  to={`/products/${product._id}`}
                  onClick={handleSearchSubmit}
                  className="text-base font-medium hover:bg-orange-500 px-4 py-1"
                >
                  {product.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-sm">
            No results found for "{searchTerm}"
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductSearchModal;
