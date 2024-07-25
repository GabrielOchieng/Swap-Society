import { useEffect, useState } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { useParams } from "react-router";
import axios from "axios";

const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);
  const { sellerId } = useParams();

  // useEffect(() => {
  //   // const friendId = conversation.members.find(
  //   //   (m) => m._id !== currentUser._id
  //   // );

  //   const getFriendId = () => {
  //     if (conversation.members && conversation.members.length > 1) {
  //       const friendId = conversation.members.find(
  //         (memberId) => memberId !== currentUser._id
  //       );
  //       return friendId;
  //     }
  //     return null; // Return null if no friend found
  //   };

  //   const friendId = getFriendId();

  //   console.log("CONVO", conversation.members);
  //   console.log("CURRENTUSERID", currentUser._id);
  //   console.log("FRIEND ID", friendId);

  //   const getUser = async () => {
  //     try {
  //       const res = await axios.get(`http://localhost:5000/users/${friendId}`); // Use friendId for specific user
  //       console.log("GET USER", res.data);
  //       setUser(res.data); // Only set user if data matches friendId
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   // Call getUser only if friendId exists
  //   if (friendId) {
  //     getUser();
  //   }
  // }, [currentUser, conversation]);

  // useEffect(() => {
  //   const friendId = conversation.members.find(
  //     (m) => m._id !== currentUser._id
  //   );
  //   console.log("CONVO", conversation);
  //   console.log("FRIEND ID", friendId);

  //   const getUser = async () => {
  //     try {
  //       const res = await axios(
  //         // "http://localhost:5000/users"
  //       );
  //       console.log("GET USER", res.data);

  //       setUser(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getUser();
  // }, [currentUser, conversation]);
  //   const getUser = async () => {
  //     try {
  //       const res = await axios.get(
  //         `http://localhost:5000/users/id=${friendId}`
  //       );
  //       console.log("GET USER", res);
  //       setUser(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

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

    console.log("CONVO", conversation.members);
    console.log("FRIEND ID", friendId);

    const getUser = async () => {
      if (friendId) {
        try {
          const res = await axios.get(
            `http://localhost:5000/users/${friendId}`
          );
          console.log("GET USER", res.data);
          setUser(res.data);
        } catch (err) {
          console.log(err);
        }
      }
    };

    getUser();
  }, [currentUser, conversation]);

  console.log("USER", user);
  return (
    <div className="conversation flex items-center gap-3 py-2">
      <IoPersonCircleSharp className="conversationImg h-8 w-8" />

      <span className="conversationName">{user?.name}</span>
    </div>
  );
};

export default Conversation;
