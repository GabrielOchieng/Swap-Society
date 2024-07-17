import React from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const UserSearchModal = ({
  searchResults,
  onClose,
  searchTerm,
  handleSearchSubmit,
}) => {
  return (
    <div className="fixed top-20 right-10 w-64 bg-teal-500 opacity-75 z-50 rounded-md shadow-md">
      <div className="bg-white rounded p-3">
        <div className="flex justify-between mb-3">
          <h6 className="text-lg font-medium">Search Results</h6>
          <button type="button" onClick={onClose}>
            <IoClose className="text-2xl hover:text-red-500" />
          </button>
        </div>

        {searchResults.length > 0 ? (
          <ul className="list-none">
            {searchResults.map((user) => (
              <li key={user.id} className="p-2 hover:bg-gray-100">
                <Link
                  to={`/users/${user.id}`}
                  onClick={handleSearchSubmit}
                  className="text-base font-medium"
                >
                  {user.name}
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

export default UserSearchModal;
