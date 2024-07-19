import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import BackTop from "./components/BackTop";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <main>
        <Outlet />
      </main>
      <div className="w-full h-[1px] bg-gray-400"></div>
      <BackTop />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
