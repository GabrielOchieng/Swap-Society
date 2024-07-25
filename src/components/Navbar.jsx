import { useDispatch, useSelector } from "react-redux";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../redux/slices/usersApiSlice";
import { logout } from "../redux/slices/authSlice";
import { FaBuyNLarge } from "react-icons/fa";
// import { IoMenuOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

import ProductSearchModal from "./ProductSearchModal";
import { useState } from "react";
import { useGetProductsQuery } from "../redux/slices/productApiSlice";
import CategoriesModal from "./CategoriesModal";

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isCategoriesModalOpen, setIsCategoriesModalOpen] = useState(false);

  const { data: products, isLoading, error } = useGetProductsQuery();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    const filteredResults = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm)
    );
    setSearchResults(filteredResults);
    setShowModal(searchTerm.length > 0); // Open modal when there's a search term
  };
  const handleSearchSubmit = (event) => {
    setShowModal(false);
    setSearchTerm("");
  };

  const handleCloseCategoriesModal = () => {
    setIsCategoriesModalOpen(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  };

  const toggleCategoriesModal = () => {
    setIsCategoriesModalOpen(!isCategoriesModalOpen);
  };

  return (
    <div>
      {/* BIGGER SCREENS */}
      <div className="flex flex-col py-2  px-4 lg:flex-row lg:items-center gap-4 shadow-md lg:h-16 justify-between text-white bg-black">
        {/* LEFT */}
        <div className=" flex flex-1 items-center sm:gap-2 justify-between">
          <Link to="/" className="flex items-center gap-2">
            {" "}
            <FaBuyNLarge className="w-12 h-12 object-cover text-white" />
            <h1 className="text-2xl tracking-wide font-bold">B&S</h1>
          </Link>

          <Link
            to="/createproduct"
            className=" hover:border-2 border-white py-1 px-2 md:px-5 rounded-full text-sm md:text-lg"
          >
            Sell
          </Link>
          <Link
            to="/chats"
            className=" hover:border-2 border-white py-1 px-2 md:px-5 rounded-full text-sm md:text-lg"
          >
            Chats
          </Link>
          <Link
            to="/:userId/products"
            className=" hover:border-2 border-white py-1 px-2 md:px-5 rounded-full text-sm md:text-lg"
          >
            Products
          </Link>

          {userInfo ? (
            <div className="flex gap-5">
              <Link
                to="/"
                onClick={handleLogout}
                className=" hover:border-2 border-white py-1 px-2 md:px-5 rounded-full text-sm md:text-lg"
              >
                Logout
              </Link>
            </div>
          ) : (
            <Link
              to="/login"
              className=" hover:border-2 border-white py-1 px-5 rounded-full text-sm md:text-lg"
            >
              Signin
            </Link>
          )}
        </div>
        {/* RIGHT */}
        <div
          className="flex justify-between flex-1 gap-1
         "
        >
          <div
            className="flex items-center hover:border-2 border-white py-1 px-2 rounded-full cursor-pointer"
            onClick={toggleCategoriesModal}
          >
            <IoIosArrowDown className="h-6 w-6" />
            <p className="hidden md:block text-sm md:text-lg">Categories</p>
          </div>
          {/* Search Bar */}
          <div className=" flex items-center justify-between gap-8 w-full">
            <SearchBar
              searchTerm={searchTerm}
              onChange={handleSearchChange}
              onSubmit={handleSearchSubmit}
            />
            {showModal && (
              <ProductSearchModal
                searchResults={searchResults}
                onClose={handleCloseModal}
                searchTerm={searchTerm}
                handleSearchSubmit={handleSearchSubmit}
              />
            )}
          </div>
        </div>
      </div>

      {/* Categories Modal (Optional Styling) */}
      {isCategoriesModalOpen && (
        <div>
          <CategoriesModal onClose={handleCloseCategoriesModal} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
