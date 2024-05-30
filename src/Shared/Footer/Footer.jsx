import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaTelegram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black/70 text-white">
      <div className="grid grid-cols-4 py-10 px-5 gap-5">
        <div>
          <img
            src="https://www.arkpowerltd.com.bd/assets/images/arkpower/logo.jpg"
            alt=""
          />
          <p className="text-[10px] mt-3">
            Ark Power is a leading integrated Power, Electronic & communication
            technology company that develops, manufactures, markets and sells
            the related equipments. The Company is dedicated to improving power
            protection & generation all the sectors throughout the Bangladesh.
            Ark is focused on improving timely delivery, enhancing the quality
            and customers satisfaction. Located at a prime business location at
            Banani, Dhaka, the Capital of Bangladesh.
          </p>
        </div>
        <div className="ps-10">
          <h1 className="text-xl font-bold uppercase opacity-80 pb-3">
            Quick Link
          </h1>
          <ul className="space-y-2">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>About us</Link>
            </li>
            <li>
              <Link>Our Products</Link>
            </li>
            <li>
              <Link>Our Clients</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
            <li>
              <Link>Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-bold uppercase opacity-80 pb-3">
            Address
          </h1>
          <ul className="space-y-2">
            <li>
              <Link className="flex items-center gap-3">
                <FaLocationDot className="text-3xl" />
                <p>
                  12B ATATURK TOWER, 22 KEMAL ATATURK AVENUE, BANANI, DHAKA-1213
                </p>
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-3">
                <FaPhone className="text-xl" />
                <p>
                  <span className="font-bold">Hot Line</span> <br />
                  Sales - 01678090037 <br />
                  Support - 01678090036
                </p>
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-3">
                <FaEnvelope className="text-xl" />
                <p>info@arkpowerltd.com.bd</p>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-bold uppercase opacity-80 pb-3">
            KEEP IN TOUCH
          </h1>
          <ul className="space-y-2 pr-5">
            <li>
              <p>Subscribe to Our Newsletter to get Important News & Offers</p>
              <div className="mt-3">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="p-2"
                />
                <button className="bg-[#00ADF2] p-2">SEND</button>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-black p-4 text-sm flex justify-between items-center">
        <p className="">© All Rights Reserved, ARK POWER LTD.</p>
        <div className="flex items-center gap-3">
          <p>Follow us: </p>
          <FaFacebook className="text-xl"/>
          <FaTelegram className="text-xl"/>
          <FaTwitter className="text-xl"/>
          <FaInstagram className="text-xl"/>
          <FaYoutube className="text-xl"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
