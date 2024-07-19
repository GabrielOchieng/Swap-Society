import { Link } from "react-router-dom";
import appstore from "../assets/images/appstore.png";
import googleplay from "../assets/images/googleplay.jpg";

const Contact = () => {
  return (
    <div className="flex justify-between gap-4 p-8  flex-wrap bg-gray-900">
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold text-white">About us</h3>
        <ul className="text-gray-500 text-sm flex flex-col">
          <Link to="/" className="hover:underline">
            About B&S
          </Link>
          <Link to="/" className="hover:underline">
            Careers
          </Link>
          <Link to="/" className="hover:underline">
            Terms & Conditions
          </Link>
          <Link to="/" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="/" className="hover:underline">
            Billing Policy
          </Link>
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold text-white">Support</h3>
        <ul className="text-gray-500 text-sm flex flex-col">
          <Link to="/" className="hover:underline">
            support@b&s.co.ke
          </Link>
          <Link to="/" className="hover:underline">
            Safety tips
          </Link>
          <Link to="/" className="hover:underline">
            Contact us
          </Link>
          <Link to="/" className="hover:underline">
            FAQs
          </Link>
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold text-white">Our Resources</h3>
        <ul className="text-gray-500 text-sm flex flex-col">
          <Link to="/" className="hover:underline">
            LinkedIn
          </Link>
          <Link to="/" className="hover:underline">
            Twitter
          </Link>
          <Link to="/" className="hover:underline">
            Whatsapp
          </Link>
          <Link to="/" className="hover:underline">
            Facebook
          </Link>
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold text-white">Our Apps</h3>
        <img src={appstore} alt="" />
        <img src={googleplay} alt="" />
      </div>
    </div>
  );
};

export default Contact;
