import ContactForm from "./ContactForm";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[url('https://images.squarespace-cdn.com/content/v1/5876d8d6e3df28c4d83ae377/1485224208084-2QZTQMXNZGNF72C4MWMO/dhaka+new+market+rickshaws+2.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        <div className="relative p-5 py-16 text-white">
          <h2 className="text-3xl container mx-auto md:text-6xl font-bold uppercase mt-14 md:mt-28">
            Get in Touch with Us
          </h2>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="container mx-auto py-16 px-5">
        <div>
          <h1 className="text-5xl uppercase font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
            Our Contact Address
          </h1>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Left Section */}
            <div className="md:col-span-2 space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-blue-200">
                  <h1 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
                    <FaMapMarkerAlt className="inline-block mr-3 text-blue-600 text-3xl" />{" "}
                    Corporate Branch:
                  </h1>
                  <p className="text-gray-700 leading-relaxed">
                    12B Ataturk Tower <br />
                    22 Kemal Ataturk Avenue, Banani, Dhaka-1213.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-blue-200">
                  <h1 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
                    <FaMapMarkerAlt className="inline-block mr-3 text-blue-600 text-3xl" />{" "}
                    Business Branch:
                  </h1>
                  <p className="text-gray-700 leading-relaxed">
                    House No #450, Road No #31 <br />
                    Mohakhali DOHS, Dhaka-1206.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-blue-200">
                  <h1 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
                    <FaMapMarkerAlt className="inline-block mr-3 text-blue-600 text-3xl" />{" "}
                    Chattogram Office:
                  </h1>
                  <p className="text-gray-700 leading-relaxed">
                    Road # 3, House # 4, Block # G, Halishahar H/E,
                    Chattogram-4100.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-blue-200">
                  <h1 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
                    <FaMapMarkerAlt className="inline-block mr-3 text-blue-600 text-3xl" />{" "}
                    Khulna Office:
                  </h1>
                  <p className="text-gray-700 leading-relaxed">
                    House No #16/E (GF), Road No #28, Nirala R/A, Khulna-9100.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-blue-200">
                  <h1 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
                    <FaMapMarkerAlt className="inline-block mr-3 text-blue-600 text-3xl" />{" "}
                    Bogura Office:
                  </h1>
                  <p className="text-gray-700 leading-relaxed">
                    Haider Bhaban, Betgari, Bonani, Bogura.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-blue-200 space-y-8">
              <div className="">
                <h1 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
                  <FaPhone className="inline-block mr-3 text-blue-600 text-3xl" />{" "}
                  Hot Line:
                </h1>
                <p className="text-gray-700 leading-relaxed">
                  Sales – 01678090037 <br /> Support – 01678090036
                </p>
              </div>
              <div className="">
                <h1 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
                  <FaMapMarkerAlt className="inline-block mr-3 text-blue-600 text-3xl" />{" "}
                  Factory:
                </h1>
                <p className="text-gray-700 leading-relaxed">
                  Hortokitola, Kaliakoir, Gazipur.
                </p>
              </div>
              <div className="">
                <h1 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
                  <FaEnvelope className="inline-block mr-3 text-blue-600 text-3xl" />{" "}
                  E-mail:
                </h1>
                <p className="text-gray-700 leading-relaxed">
                  info@arkpowerltd.com.bd
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;