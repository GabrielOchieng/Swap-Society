import React, { useState } from "react";
import axios from "axios";

const PaymentModal = () => {
  const [phone, setPhone] = useState();
  const [amount, setAmount] = useState();

  const payHandler = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/token", {
        amount,
        phone,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1 className="text-2xl">
        Pay with
        <span className="text-green-600 font-bold">Mpesa</span>
        <form className="flex flex-col space-y-5">
          <input
            type="text"
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Amount"
            onChange={(e) => setAmount(e.target.value)}
          />
          <button
            onClick={payHandler}
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded-2xl"
          >
            Pay
          </button>
        </form>
      </h1>
    </div>
  );
};

export default PaymentModal;
