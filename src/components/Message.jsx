import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { format } from "timeago.js";

const Message = ({ message, own }) => {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <IoPersonCircleSharp className="messageImg" />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
};

export default Message;
