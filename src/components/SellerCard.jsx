import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";

const SellerCard = ({ product }) => {
  const sellerContact = product?.seller?.contact || "N/A"; // Assuming contact is phone number

  console.log(product.seller);
  const [showContact, setShowContact] = useState(false);

  const handleShowContact = () => {
    setShowContact(!showContact);
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
    </div>
  );
};

export default SellerCard;
