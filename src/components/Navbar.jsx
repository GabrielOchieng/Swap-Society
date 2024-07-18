import { useDispatch, useSelector } from "react-redux";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../redux/slices/usersApiSlice";
import { logout } from "../redux/slices/authSlice";
import { FaBuyNLarge } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
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
    <div className="px-4 relative shadow-md">
      {/* BIGGER SCREENS */}
      <div className="flex flex-col p-5  md:flex-row items-center h-full gap-8 ">
        {/* LEFT */}
        <div className=" flex items-center gap-2 md:gap-12">
          <Link to="/" className="flex items-center gap-2">
            {" "}
            <FaBuyNLarge className="w-12 h-12 object-cover text-teal-700" />
            <div className="text-2xl tracking-wide font-bold">B&S</div>
          </Link>
          <div className="flex justify-between">
            <Link
              to="/createproduct"
              className=" hover:bg-gray-300 py-1 px-5 rounded-full"
            >
              Sell
            </Link>
            <Link to="/" className=" hover:bg-gray-300 py-1 px-5 rounded-full">
              Buy
            </Link>
            <Link
              to="/:userId/products"
              className=" hover:bg-gray-300 py-1 px-5 rounded-full"
            >
              My Products
            </Link>

            {userInfo ? (
              <div className="flex gap-5">
                <p>Welcome {userInfo.username}</p>
                <Link
                  to="/"
                  onClick={handleLogout}
                  className=" hover:bg-gray-300 py-1 px-5 rounded-full"
                >
                  Logout
                </Link>
              </div>
            ) : (
              <Link
                to="/login"
                className=" hover:bg-gray-300 py-1 px-5 rounded-full"
              >
                Signin
              </Link>
            )}
          </div>
        </div>
        {/* RIGHT */}
        <div className="flex gap-4  ">
          <div
            className="flex items-center hover:bg-gray-300 py-1 px-2 rounded-full"
            onClick={toggleCategoriesModal}
          >
            <IoMenuOutline className="h-8 w-8 object-cover " />
            <p className="hidden md:block">Categories</p>
          </div>
          {/* Search Bar */}
          <div className=" flex items-center justify-between gap-8">
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
          <CategoriesModal />
        </div>
      )}
    </div>
  );
};

export default Navbar;
