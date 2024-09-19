// import React from "react";
// import { FaUps, FaUsers, FaLeanpub, FaHandshake } from "react-icons/fa6";
// import useProducts from "../../../Hooks/useProducts";
// import useNewsAndEvents from "../../../Hooks/useNewsAndEvents";
// import useSubscriber from "../../../Hooks/useSubscriber";
// import useUsers from "../../../Hooks/useUsers";
// import axios from "axios";
// import FileSaver from "file-saver";

// const AdminHome = () => {
//   const { products } = useProducts();
//   const { newsAndEvents } = useNewsAndEvents();
//   const { subscribers } = useSubscriber();
//   const { users } = useUsers();

//   const downloadSubscriberData = async () => {
//     try {
//       const response = await axios.get("https://ark-power-server.vercel.app/subscriberDownload", {
//         responseType: "blob",
//       });
//       const blob = new Blob([response.data], { type: "text/csv" });
//       FileSaver.saveAs(blob, "subscriber.csv");
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   const downloadNewsData = async () => {
//     try {
//       const response = await axios.get("https://ark-power-server.vercel.app/newsDownload", {
//         responseType: "blob",
//       });
//       const blob = new Blob([response.data], { type: "text/csv" });
//       FileSaver.saveAs(blob, "news.csv");
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   const downloadProductData = async () => {
//     try {
//       const response = await axios.get("https://ark-power-server.vercel.app/productsDownload", {
//         responseType: "blob",
//       });
//       const blob = new Blob([response.data], { type: "text/csv" });
//       FileSaver.saveAs(blob, "products.csv");
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   const downloadUserData = async () => {
//     try {
//       const response = await axios.get("https://ark-power-server.vercel.app/usersDownload", {
//         responseType: "blob",
//       });
//       const blob = new Blob([response.data], { type: "text/csv" });
//       FileSaver.saveAs(blob, "users.csv");
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   return (
//     <div className="p-10">
//       <div className="">
//         <div className="">
//           <img src="https://i.ibb.co/61nBkFS/ARK-power-ltd-main.png" alt="" />
//         </div>

//         <div className="grid grid-cols-4 items-center gap-5 mt-14">
//           <div className="bg-white border p-5 space-y-4 shadow-lg">
//             <FaUps className=" text-2xl" />
//             <div className="flex justify-between">
//               <p className="text-xl font-semibold">Products</p>
//               <p className="text-green-500 text-xl text-end">
//                 {products.length}
//               </p>
//             </div>
//             <button
//               className="text-primary hover:underline"
//               onClick={downloadProductData}
//             >
//               Download Products data
//             </button>
//           </div>
//           <div className="bg-white border p-5 space-y-4 shadow-lg">
//             <FaUsers className=" text-2xl" />
//             <div className="flex justify-between">
//               <p className="text-xl font-semibold">User</p>
//               <p className="text-green-500 text-xl text-end">{users.length}</p>
//             </div>
//             <button
//               className="text-primary hover:underline"
//               onClick={downloadUserData}
//             >
//               Download User data
//             </button>
//           </div>
//           <div className="bg-white border p-5 space-y-4 shadow-lg">
//             <FaLeanpub className=" text-2xl" />
//             <div className="flex justify-between">
//               <p className="text-xl font-semibold">News & Events</p>
//               <p className="text-green-500 text-xl text-end">
//                 {newsAndEvents.length}
//               </p>
//             </div>
//             <button
//               className="text-primary hover:underline"
//               onClick={downloadNewsData}
//             >
//               Download news data
//             </button>
//           </div>
//           <div className="bg-white border p-5 space-y-4 shadow-lg">
//             <FaHandshake className=" text-2xl" />
//             <div className="flex justify-between">
//               <p className="text-xl font-semibold">Subscriber</p>
//               <p className="text-green-500 text-xl text-end">
//                 {subscribers.length}
//               </p>
//             </div>
//             <button
//               className="text-primary hover:underline"
//               onClick={downloadSubscriberData}
//             >
//               Download subscriber data
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminHome;


import React from "react";
import { FaUps, FaUsers, FaLeanpub, FaHandshake } from "react-icons/fa6";
import useProducts from "../../../Hooks/useProducts";
import useNewsAndEvents from "../../../Hooks/useNewsAndEvents";
import useSubscriber from "../../../Hooks/useSubscriber";
import useUsers from "../../../Hooks/useUsers";
import axios from "axios";
import FileSaver from "file-saver";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement,
} from "chart.js";
import { Bar, Pie, Line, Doughnut } from "react-chartjs-2";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,  // For Pie and Doughnut charts
  LineElement,
  PointElement
);

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

  // Chart data for each category
  const productData = {
    labels: products.map((product) => product.name), // Assuming products have a 'name' field
    datasets: [
      {
        label: "Products",
        data: products.map((product) => product.quantity), // Assuming products have a 'quantity' field
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const userData = {
    labels: users.map((user) => user.name), // Assuming users have a 'name' field
    datasets: [
      {
        label: "Users",
        data: users.map((user) => user.activityScore), // Assuming users have an 'activityScore' field
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const newsData = {
    labels: newsAndEvents.map((event) => event.title), // Assuming newsAndEvents have a 'title' field
    datasets: [
      {
        label: "News & Events",
        data: newsAndEvents.map((event) => event.attendance), // Assuming newsAndEvents have an 'attendance' field
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
    ],
  };

  const subscriberData = {
    labels: ["Subscribed", "Unsubscribed"], // Example categories
    datasets: [
      {
        label: "Subscribers",
        data: [subscribers.filter((sub) => sub.subscribed).length, subscribers.filter((sub) => !sub.subscribed).length],
        backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-10">
      <div>
        <div>
          <img src="https://i.ibb.co/61nBkFS/ARK-power-ltd-main.png" alt="" />
        </div>

        <div className="grid grid-cols-4 items-center gap-5 mt-14">
          <div className="bg-white border p-5 space-y-4 shadow-lg">
            <FaUps className="text-2xl" />
            <div className="flex justify-between">
              <p className="text-xl font-semibold">Products</p>
              <p className="text-green-500 text-xl text-end">{products.length}</p>
            </div>
            <button
              className="text-primary hover:underline"
              onClick={downloadProductData}
            >
              Download Products data
            </button>
            <Bar data={productData} options={{ responsive: true }} />
          </div>

          <div className="bg-white border p-5 space-y-4 shadow-lg">
            <FaUsers className="text-2xl" />
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
            <Line data={userData} options={{ responsive: true }} />
          </div>

          <div className="bg-white border p-5 space-y-4 shadow-lg">
            <FaLeanpub className="text-2xl" />
            <div className="flex justify-between">
              <p className="text-xl font-semibold">News & Events</p>
              <p className="text-green-500 text-xl text-end">{newsAndEvents.length}</p>
            </div>
            <button
              className="text-primary hover:underline"
              onClick={downloadNewsData}
            >
              Download news data
            </button>
            <Doughnut data={newsData} options={{ responsive: true }} />
          </div>

          <div className="bg-white border p-5 space-y-4 shadow-lg">
            <FaHandshake className="text-2xl" />
            <div className="flex justify-between">
              <p className="text-xl font-semibold">Subscriber</p>
              <p className="text-green-500 text-xl text-end">{subscribers.length}</p>
            </div>
            <button
              className="text-primary hover:underline"
              onClick={downloadSubscriberData}
            >
              Download subscriber data
            </button>
            <Pie data={subscriberData} options={{ responsive: true }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
