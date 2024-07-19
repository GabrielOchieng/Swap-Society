import { useState } from "react";

const SellerCard = ({ product }) => {
  const sellerContact = product?.seller?.contact || "N/A"; // Assuming contact is phone number

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
              className="text-orange-500 hover:text-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 font-medium px-4 py-2 rounded-md"
              onClick={handleShowContact}
            >
              Show Contact
            </button>
          ) : (
            <span className="font-medium bg-orange-500 text-white">
              {" "}
              {sellerContact}
            </span>
          )}
        </li>
        <li>
          <span className="font-medium">Location:</span> {product.location}
        </li>
      </ul>
      <p className="font-bold mt-4">Price: ${product.price}</p>
    </div>
  );
};

export default SellerCard;
