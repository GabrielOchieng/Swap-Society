import { useEffect, useRef, useState } from "react";
import Conversation from "../components/Conversation";
import Message from "../components/Message";
import ChatOnline from "../components/ChatOnline";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import { IoPersonCircleSharp } from "react-icons/io5";

const ChatPage = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [fetchedUser, setFetchedUser] = useState(null);

  const [arrivalMessage, setArrivalMessage] = useState(null);
  const { sellerId } = useParams();
  const socket = useRef();

  const { user } = userInfo;

  const scrollRef = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8900");

    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      console.log(users);
    });
  }, [user]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/messages/${currentChat?._id}`
        );
        setMessages(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getMessages();
  }, [currentChat]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/conversations/" + user._id
        );

        setConversations(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user._id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage,
    });

    try {
      const res = await axios.post("http://localhost:5000/messages", message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleUserFetched = (chatter) => {
    setFetchedUser(chatter);
    console.log(fetchedUser);
    // Do something with the fetched user data here, if needed
  };

  return (
    <div className="messenger flex flex-col md:flex-row">
      <div className="chatMenu w-full md:w-[20%] border-r">
        <div className="chatMenuWrapper px-4">
          <input
            type="text"
            placeholder="Search for friends"
            className="chatMenuInput w-full py-2 border-b border-gray-200 focus:outline-none"
          />
          {conversations.map((c) => (
            <div
              key={c._id}
              onClick={() => setCurrentChat(c)}
              className="cursor-pointer hover:bg-gray-100 px-4 py-2"
            >
              <Conversation
                conversation={c}
                currentUser={user}
                onUserFetched={handleUserFetched}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="chatBox w-full md:w-[80%] p-2 md:p-4 ">
        {fetchedUser && (
          <div className="flex items-center gap-3 py-4 ">
            <IoPersonCircleSharp className="conversationImg h-8 w-8" />

            <span className="conversationName">{fetchedUser?.name}</span>
          </div>
        )}
        <div className="chatBoxWrapper flex flex-col">
          {currentChat ? (
            <>
              <div className="chatBoxTop h-screen overflow-y-auto  px-4 py-2">
                {messages?.map((m) => (
                  <div ref={scrollRef} key={m._id}>
                    <Message message={m} own={m.sender === user._id} />
                  </div>
                ))}
              </div>
              <div className="chatBoxBottom flex items-center justify-between px-4 py-2">
                <textarea
                  className="chatMessageInput w-full h-24 resize-none py-2 px-4 border border-gray-200 focus:outline-none rounded-md"
                  placeholder="Type your message here..."
                  onChange={(e) => setNewMessage(e.target.value)}
                  value={newMessage}
                />
                <button
                  className="chatSubmitButton px-4 py-2 ml-2 text-white bg-teal-500 rounded-md hover:bg-teal-700"
                  onClick={handleSubmit}
                >
                  Send
                </button>
              </div>
            </>
          ) : (
            <span className="noConversationText text-3xl h-screen text-gray-400">
              Open a conversation to start a chat.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatPage;