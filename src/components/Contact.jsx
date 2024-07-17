import appstore from "../assets/images/appstore.png";
import googleplay from "../assets/images/googleplay.jpg";

const Contact = () => {
  return (
    <div className="flex justify-between gap-4 p-5 flex-wrap">
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold">About us</h3>
        <ul>
          <li>About B&S</li>
          <li>Careers</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Billing Policy</li>
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold">Support</h3>
        <ul>
          <li>support@b&s.co.ke</li>
          <li>Safety tips</li>
          <li>Contact us</li>
          <li>FAQs</li>
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold">Our Resources</h3>
        <ul>
          <li>LinkedIn</li>
          <li>Twitter</li>
          <li>Whatsapp</li>
          <li>Facebook</li>
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold">Our Apps</h3>
        <img src={appstore} alt="" />
        <img src={googleplay} alt="" />
      </div>
    </div>
  );
};

export default Contact;
