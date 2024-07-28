import { useEffect, useState } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { useParams } from "react-router";
import axios from "axios";

const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);
  const { sellerId } = useParams();

  useEffect(() => {
    const getFriendId = () => {
      if (conversation.members && conversation.members.length > 1) {
        const friendId = conversation.members.find(
          (memberId) => memberId !== currentUser._id
        );
        return friendId;
      }
      return null; // Return null if no friend found
    };

    const friendId = getFriendId();

    const getUser = async () => {
      if (friendId) {
        try {
          const res = await axios.get(
            `https://swap-society-api.onrender.com/users/${friendId}`
          );
          setUser(res.data);
        } catch (err) {
          console.log(err);
        }
      }
    };

    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversation flex items-center gap-3 py-2">
      <IoPersonCircleSharp className="conversationImg h-8 w-8" />
      <span className="conversationName">{user?.name || "Loading..."}</span>
      <hr className="text-red-950" />
    </div>
  );
};

export default Conversation;
