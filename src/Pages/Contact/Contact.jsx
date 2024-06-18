import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div>
      <div className="bg-[url('https://images.squarespace-cdn.com/content/v1/5876d8d6e3df28c4d83ae377/1485224208084-2QZTQMXNZGNF72C4MWMO/dhaka+new+market+rickshaws+2.jpg')] bg-cover">
        <div className="p-5 py-16 bg-black/20 text-white">
          <h2 className="text-2xl container mx-auto md:text-6xl font-semibold uppercase mt-14 md:mt-28">
            Get in Touch with Us
          </h2>
        </div>
      </div>
      <div className="container mx-auto py-10">
        <div>
          <h1 className="text-4xl uppercase font-bold mb-5 text-primary">
            Our Contact Address
          </h1>
          <div className="grid grid-cols-3 gap-10">
            <div className="col-span-2 ">
              <div className="grid grid-cols-2 gap-5">
                <div className="bg-slate-50 p-5 shadow-lg">
                  <h1 className="text-xl font-bold text-primary mb-3">
                    Corporate Branch:
                  </h1>
                  <span>
                    <p>
                      12B Ataturk Tower <br />
                      22 Kemal Ataturk Avenue
                    </p>
                    <p>Banani, Dhaka-1213,</p>
                  </span>
                </div>
                <div className="bg-slate-50 p-5 shadow-lg">
                  <h1 className="text-xl font-bold text-primary mb-3">
                    Business Branch:
                  </h1>
                  <p>
                    House No #450, Road No #31 <br />
                    Mohakhali DOHS <br />
                    Mohakhali, Dhaka-1206;
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-5 mt-5">
                <div className="bg-slate-50 p-5 shadow-lg">
                  <h1 className="text-xl font-bold text-primary mb-3">
                    Chattogram Office:
                  </h1>
                  <p>
                    Road # 3, House # 4, Block # G, Halishahar H/E, <br />{" "}
                    Chattogram- 4100
                  </p>
                </div>
                <div className="bg-slate-50 p-5 shadow-lg">
                  <h1 className="text-xl font-bold text-primary mb-3 ">
                    Khulna Office:
                  </h1>
                  <p>
                    House No # 16/E (GF), Road No # 28, Nirala R/A, <br />{" "}
                    Khulna-9100.
                  </p>
                </div>
                <div className="bg-slate-50 p-5 shadow-lg">
                  <h1 className="text-xl font-bold text-primary mb-3">
                    Bogura Office:
                  </h1>
                  <p>
                    Haider Bhaban, Betgari, Bonani <br /> Bogura.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-1 bg-slate-50 p-5 shadow-lg space-y-8">
              <div className="">
                <h1 className="text-xl font-bold text-primary ">Hot Line:</h1>
                <p>
                  Sales – 01678090037 <br />
                  Support – 01678090036.
                </p>
              </div>
              <div className="">
                <h1 className="text-xl font-bold text-primary ">Factory:</h1>
                <p>
                Hortokitola, Kaliakoir <br /> Gazipur.
                </p>
              </div>
              <div className="">
                <h1 className="text-xl font-bold text-primary ">E-mail:</h1>
                <p>
                info@arkpowerltd.com.bd
                </p>
              </div>
              <div className="">
                <h1 className="text-xl font-bold text-primary ">E-mail:</h1>
                <p>
                info@arkpowerltd.com.bd
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div>
        <ContactForm/>
    </div>
    </div>
  );
};

export default Contact;
