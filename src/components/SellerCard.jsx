import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import PaymentModal from "./PaymentModal";
import { RiMessage2Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import PaymentOptionsModal from "./PaymentOptionsModal";

const SellerCard = ({ product }) => {
  const sellerContact = product?.seller?.contact || "N/A"; // Assuming contact is phone number
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const user = userInfo?.user;
  const isProductSeller = product?.seller?._id === user?._id;

  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const { seller } = product;

  const sellerId = seller._id;
  const [showContact, setShowContact] = useState(false);

  const handleShowContact = () => {
    setShowContact(!showContact);
  };

  const handleShowPaymentModal = () => {
    setShowPaymentModal(!showPaymentModal);
  };

  // Function to initiate chat with seller
  const handleStartChat = async () => {
    if (userInfo) {
      try {
        const response = await axios.post(
          "https://swap-society-api.onrender.com/conversations",
          {
            senderId: user._id,
            receiverId: seller._id,
          }
        );

        // 3. Redirect user to the chat page with the newly created conversation ID
        const conversationId = response.data._id;
        // navigate(`/chats/${conversationId}`);
      } catch (err) {
        console.error("Error creating conversation:", err);
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="bg-white border rounded-md p-4 shadow-sm">
      <h3 className="font-bold text-lg mb-2">{product.seller.name}</h3>
      <ul className=" space-y-2">
        <li>
          <span className="font-medium">Email:</span> {product.seller.email}
        </li>
        <li>
          {!showContact ? (
            <button
              className="bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 font-medium px-4 py-2 rounded-md"
              onClick={handleShowContact}
            >
              Show Contact
            </button>
          ) : (
            <span className="font-medium  "> {product.seller.phoneNumber}</span>
          )}
        </li>
        <li className="flex items-center">
          <span className="font-medium">Location:</span>{" "}
          <IoLocationOutline className="mx-1" />
          {product.location}
        </li>
      </ul>
      <p className="font-bold mt-4">Price: ${product.price}</p>
      {!showPaymentModal && (
        <button
          className="bg-orange-500 p-2 rounded"
          onClick={handleShowPaymentModal}
        >
          Make Payment
        </button>
      )}

      {showPaymentModal && (
        <div className="mt-3">
          <PaymentOptionsModal showPaymentModal={showPaymentModal}/>
          {/* <PaymentModal showPaymentModal={showPaymentModal} />{" "} */}
        </div>
      )}
      {!isProductSeller && (
        <div>
          <Link
            to={`/chats`}
            className="flex flex-row bg-orange-500 text-black p-2 mt-2 rounded w-32 items-center hover:text-white"
            onClick={handleStartChat} // Pass seller ID
          >
            <p>Start Chat</p>
            <RiMessage2Line className="ml-2" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default SellerCard;
