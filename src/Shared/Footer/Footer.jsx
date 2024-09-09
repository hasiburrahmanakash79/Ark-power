import axios from "axios";
import { useForm } from "react-hook-form";
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
import Swal from "sweetalert2";
import useFooter from "../../Hooks/useFooter";

const Footer = () => {
  const {footerContent,} = useFooter()
  

  console.log(footerContent[0]?.address);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (subscriber) => {
    axios.post("https://ark-power-server.vercel.app/subscriber", subscriber).then((data) => {
      if (data.data.insertedId) {
        reset();
        Swal.fire({
          showConfirmButton: false,
          timer: 1500,
          title: "Subscribe Successfully",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="bg-black/15 text-black/70">
      <div>
        <div className="grid md:grid-cols-4 grid-cols-1 py-10 px-5 md:gap-5">
        <div>
              <img src="https://i.ibb.co/61nBkFS/ARK-power-ltd-main.png" alt="ARK Power Ltd." />
              <div className="text-center my-4">
                <p>Follow us: </p>
                <div className="flex justify-center items-center gap-3 mt-2">
                  <a href={footerContent[0]?.facebookUrl} target="_blank"><FaFacebook className="text-xl" /></a>
                  <a href={footerContent[0]?.telegramUrl} target="_blank"><FaTelegram className="text-xl" /></a>
                  <a href={footerContent[0]?.twitterUrl} target="_blank"><FaTwitter className="text-xl" /></a>
                  <a href={footerContent[0]?.instagramUrl} target="_blank"><FaInstagram className="text-xl" /></a>
                  <a href={footerContent[0]?.youtubeUrl} target="_blank"><FaYoutube className="text-xl" /></a>
                </div>
              </div>
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
                  <Link className="flex items-center uppercase gap-3">
                    <FaLocationDot className="text-3xl" />
                    <p>{footerContent[0]?.address}</p>
                  </Link>
                </li>
                <li>
                  <Link className="flex items-center gap-3">
                    <FaPhone className="text-2xl" />
                    <p>
                      <span className="font-bold">Hot Line</span> <br />
                      {footerContent[0]?.salesContact} <br /> {footerContent[0]?.supportContact}
                    </p>
                  </Link>
                </li>
                <li>
                  <Link className="flex items-center gap-3">
                    <FaEnvelope className="text-xl" />
                    <p><span>{footerContent[0]?.email}</span></p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:block flex flex-col justify-center items-center">
            <h1 className="text-xl font-bold uppercase opacity-80 pb-3">
              KEEP IN TOUCH
            </h1>

            <ul className="space-y-2 pr-5">
              <li>
                <p className="md:text-start text-center">
                  Subscribe to Our Newsletter to get Important News & Offers
                </p>
              </li>
              <li>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-3 md:block flex items-center justify-center"
                >
                  <input
                    type="email"
                    id="subscriber"
                    {...register("subscriber", { required: true })}
                    placeholder="Enter Your Email"
                    className="p-2"
                  />
                  <button type="submit" className="bg-[#209fd1] p-2">
                    Subscribe
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-black p-4 text-sm">
          <p className="text-center text-white">
            © All Rights Reserved, ARK POWER LTD.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
