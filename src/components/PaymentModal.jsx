import React, { useState } from "react";
import axios from "axios";

const PaymentModal = () => {
  const [phone, setPhone] = useState();
  const [amount, setAmount] = useState();
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator

  const payHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true before making request

    try {
      const response = await axios.post("http://localhost:5000/token", {
        amount,
        phone,
      });
      console.log(response);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false); // Set loading to false after request finishes
    }
  };

  return (
    <div className="border border-gray-500 shadow-md w-72 p-2 rounded">
      <h1 className="text-2xl">
        Pay with
        <span className="text-green-600 font-bold ml-1">Mpesa</span>
      </h1>
      <form className="flex flex-col space-y-5">
        <input
          type="text"
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
          className="p-2 border rounded-md focus:outline-none focus:ring-green-500 focus:ring-1"
        />
        <input
          type="text"
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)}
          className="p-2 border rounded-md focus:outline-none focus:ring-green-500 focus:ring-1"
        />
        <button
          onClick={payHandler}
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded-2xl"
          disabled={isLoading} // Disable button while loading
        >
          {isLoading ? "Processing..." : "Pay"}
        </button>
      </form>
      {isLoading && (
        <div className="text-center mt-2">
          {/* Add your preferred loading indicator here */}
          <span className="animate-spin">&#8987;</span> Processing payment...
        </div>
      )}
    </div>
  );
};

export default PaymentModal;
