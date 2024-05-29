import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="border-b border-t p-3">
        <div className="container mx-auto md:grid grid-cols-2 py-7">
          <div className="flex justify-between items-center gap-5">
            <div className="text-center">
              <h1 className="md:text-5xl text-2xl font-bold uppercase">
                Pathao
              </h1>
              <p className="md:text-xl text-sm font-bold">Tour Partner</p>
            </div>
            <div className="text-center">
              <p className="md:text-xl text-sm font-bold">Sponsor by</p>
              <h1 className="md:text-4xl text-2xl font-bold uppercase">ubar</h1>
            </div>
          </div>
          <div>
            <div className="flex md:justify-end justify-center items-center gap-5">
              <h1 className="my-5">Follow Us: </h1>
              <a href="#">
                <FaFacebook className="text-3xl hover:text-blue-700 " />
              </a>
              <a href="#">
                <FaInstagram className="text-3xl hover:text-pink-500" />
              </a>
              <a href="#">
                <FaYoutube className="text-3xl hover:text-red-600" />
              </a>
              <a href="#">
                <FaTwitter className="text-3xl hover:text-blue-700" />
              </a>
              <a href="#">
                <FaTelegram className="text-3xl hover:text-blue-700" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-gray-50 grid md:grid-cols-6 grid-cols-2 place-items-center text-sm text-center">
        <Link to="/" className="hover:underline p-3">
          Contact
        </Link>
        <Link to="/" className="hover:underline p-3">
          About Us
        </Link>
        <Link to="/" className="hover:underline p-3">
          Advertise with us
        </Link>
        <Link to="/" className="hover:underline p-3">
          Sustainability
        </Link>
        <Link to="/" className="hover:underline p-3">
          Accessibility
        </Link>
        <Link to="/" className="hover:underline p-3">
          Terms & Conditions
        </Link>
      </div>
      <div className="py-7 px-3">
        <p className="text-center pb-3">Affiliates and Content Partners</p>
        <div className="grid md:grid-cols-6 grid-cols-3 place-items-center md:w-2/3 mx-auto gap-7">
          <img
            className="md:w-14 w-8"
            src="https://www.bdosn.org//images/2019/03/21/bdosn-logo.jpg"
            alt=""
          />
          <img
            className="md:w-14 w-8"
            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
            alt=""
          />
          <img
            className="md:w-14 w-8"
            src="https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo.png"
            alt=""
          />
          <img
            className="md:w-14 w-8"
            src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Pathao-logo.jpg"
            alt=""
          />
          <img
            className="md:w-14 w-8"
            src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg"
            alt=""
          />
          <img
            className="md:w-14 w-8"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/1024px-PayPal_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <p className="text-[10px] text-center pb-7 px-3">
        Pathau & Partners is registered in Bangladesh under no. 723828923.
        Registered Office: Pathau & Partners, Mohakhali DOHS, Dhaka, Bangladesh,
        SE1 0LL. <br />
        Dhaka & Partners is the business growth and destination agency for
        DHaka. We are a social enterprise, combining purpose with commercial
        rigour. We are funded by grants, partners and our portfolio of venture
        businesses.
      </p>
      <p className="text-center pb-4 text-sm">
        C© All Rights Reserved, ARK POWER LTD.
      </p>
    </div>
  );
};

export default Footer;
