import React from "react";
import { FaUps, FaUsers, FaLeanpub, FaHandshake } from "react-icons/fa6";
import useProducts from "../../../Hooks/useProducts";
import useNewsAndEvents from "../../../Hooks/useNewsAndEvents";
import useSubscriber from "../../../Hooks/useSubscriber";
import useUsers from "../../../Hooks/useUsers";
import axios from "axios";
import FileSaver from "file-saver";

const AdminHome = () => {
  const { products } = useProducts();
  const { newsAndEvents } = useNewsAndEvents();
  const { subscribers } = useSubscriber();
  const { users } = useUsers();

  const downloadSubscriberData = async () => {
    try {
      const response = await axios.get("https://ark-power-server.vercel.app/subscriberDownload", {
        responseType: "blob",
      });
      const blob = new Blob([response.data], { type: "text/csv" });
      FileSaver.saveAs(blob, "subscriber.csv");
    } catch (err) {
      console.error(err);
    }
  };
  const downloadNewsData = async () => {
    try {
      const response = await axios.get("https://ark-power-server.vercel.app/newsDownload", {
        responseType: "blob",
      });
      const blob = new Blob([response.data], { type: "text/csv" });
      FileSaver.saveAs(blob, "news.csv");
    } catch (err) {
      console.error(err);
    }
  };
  const downloadProductData = async () => {
    try {
      const response = await axios.get("https://ark-power-server.vercel.app/productsDownload", {
        responseType: "blob",
      });
      const blob = new Blob([response.data], { type: "text/csv" });
      FileSaver.saveAs(blob, "products.csv");
    } catch (err) {
      console.error(err);
    }
  };
  const downloadUserData = async () => {
    try {
      const response = await axios.get("https://ark-power-server.vercel.app/usersDownload", {
        responseType: "blob",
      });
      const blob = new Blob([response.data], { type: "text/csv" });
      FileSaver.saveAs(blob, "users.csv");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="p-10">
      <div className="">
        <div className="">
          <img src="https://i.ibb.co/61nBkFS/ARK-power-ltd-main.png" alt="" />
        </div>

        <div className="grid grid-cols-4 items-center gap-5 mt-14">
          <div className="bg-white border p-5 space-y-4 shadow-lg">
            <FaUps className=" text-2xl" />
            <div className="flex justify-between">
              <p className="text-xl font-semibold">Products</p>
              <p className="text-green-500 text-xl text-end">
                {products.length}
              </p>
            </div>
            <button
              className="text-primary hover:underline"
              onClick={downloadProductData}
            >
              Download Products data
            </button>
          </div>
          <div className="bg-white border p-5 space-y-4 shadow-lg">
            <FaUsers className=" text-2xl" />
            <div className="flex justify-between">
              <p className="text-xl font-semibold">User</p>
              <p className="text-green-500 text-xl text-end">{users.length}</p>
            </div>
            <button
              className="text-primary hover:underline"
              onClick={downloadUserData}
            >
              Download User data
            </button>
          </div>
          <div className="bg-white border p-5 space-y-4 shadow-lg">
            <FaLeanpub className=" text-2xl" />
            <div className="flex justify-between">
              <p className="text-xl font-semibold">News & Events</p>
              <p className="text-green-500 text-xl text-end">
                {newsAndEvents.length}
              </p>
            </div>
            <button
              className="text-primary hover:underline"
              onClick={downloadNewsData}
            >
              Download news data
            </button>
          </div>
          <div className="bg-white border p-5 space-y-4 shadow-lg">
            <FaHandshake className=" text-2xl" />
            <div className="flex justify-between">
              <p className="text-xl font-semibold">Subscriber</p>
              <p className="text-green-500 text-xl text-end">
                {subscribers.length}
              </p>
            </div>
            <button
              className="text-primary hover:underline"
              onClick={downloadSubscriberData}
            >
              Download subscriber data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
