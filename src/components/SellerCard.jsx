import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import PaymentModal from "./PaymentModal";
import { RiMessage2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SellerCard = ({ product }) => {
  const sellerContact = product?.seller?.contact || "N/A"; // Assuming contact is phone number
  const navigate = useNavigate();

  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const { seller } = product;
  console.log(seller);

  const sellerId = seller._id;
  const [showContact, setShowContact] = useState(false);

  const handleShowContact = () => {
    setShowContact(!showContact);
  };

  const handleShowPaymentModal = () => {
    setShowPaymentModal(!showPaymentModal);
  };

  const handleStartChat = async (sellerId) => {
    navigate(`/chats/${sellerId}`);
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
          <PaymentModal showPaymentModal={showPaymentModal} />{" "}
        </div>
      )}

      <div>
        <Link
          to={`/chats/${product.seller._id}`} // Remove unnecessary link if using sellerId for chat initiation within SellerCard
          className="flex flex-row bg-orange-500 text-black p-2 mt-2 rounded w-32 items-center hover:text-white"
          onClick={() => handleStartChat(product.seller._id)} // Pass seller ID
        >
          <p>Start Chat</p>
          <RiMessage2Line className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default SellerCard;
