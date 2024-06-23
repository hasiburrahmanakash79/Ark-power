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
      <div>
        <div className="grid md:grid-cols-4 grid-cols-1 py-10 px-5 md:gap-5">
          <div>
            <img
              src="https://www.arkpowerltd.com.bd/assets/images/arkpower/logo.jpg"
              alt=""
            />
            <p className="text-[10px] mt-3">
              Ark Power is a leading integrated Power, Electronic &
              communication technology company that develops, manufactures,
              markets and sells the related equipments. The Company is dedicated
              to improving power protection & generation all the sectors
              throughout the Bangladesh. Ark is focused on improving timely
              delivery, enhancing the quality and customers satisfaction.
              Located at a prime business location at Banani, Dhaka, the Capital
              of Bangladesh.
            </p>
          </div>
          <div className="grid grid-cols-2 md:my-0 my-5 col-span-2">
            <div className="md:ps-10">
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
                      12B ATATURK TOWER, 22 KEMAL ATATURK AVENUE, BANANI,
                      DHAKA-1213
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
          </div>
          <div className="md:block flex flex-col justify-center items-center">
            <h1 className="text-xl font-bold uppercase opacity-80 pb-3">
              KEEP IN TOUCH
            </h1>
            <div className="flex items-center gap-3 mb-2">
            <p>Follow us: </p>
            <FaFacebook className="text-xl" />
            <FaTelegram className="text-xl" />
            <FaTwitter className="text-xl" />
            <FaInstagram className="text-xl" />
            <FaYoutube className="text-xl" />
          </div>
            <ul className="space-y-2 pr-5">
              <li>
              <p>
                  Subscribe to Our Newsletter to get Important News & Offers
                </p>
              </li>
              <li>
                <div className="mt-3 md:block flex items-center justify-center">
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
        <div className="bg-black p-4 text-sm">
          <p className="text-center">© All Rights Reserved, ARK POWER LTD.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
