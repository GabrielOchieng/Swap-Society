import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { format } from "timeago.js";

const Message = ({ message, own }) => {
  return (
    <div className={`message flex flex-col ${own ? "items-end" : ""}`}>
      <div className="flex">
        {!own && (
          <IoPersonCircleSharp className="messageImg w-8 h-8 rounded-full mr-2" />
        )}
        <p
          className={`messageText px-4 py-2 rounded-lg max-w-md ${
            own ? "bg-gray-200 text-gray-800" : "bg-blue-500 text-white"
          }`}
        >
          {message.text}
        </p>
      </div>
      <div className="messageBottom text-sm mt-2">
        {format(message.createdAt)}
      </div>
    </div>
  );
};

export default Message;
