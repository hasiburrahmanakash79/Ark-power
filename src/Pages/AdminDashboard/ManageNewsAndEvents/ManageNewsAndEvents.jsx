// import useNewsAndEvents from "../../../Hooks/useNewsAndEvents";
// import { Typography } from "@material-tailwind/react";
// import LoadingSpinner from "../../../Hooks/Loading/LoadingSpinner";
// import Swal from "sweetalert2";
// import Modal from "react-modal";
// import { useState } from "react";

// const ManageNewsAndEvents = () => {
//   const { newsAndEvents, refetch, isLoading } = useNewsAndEvents();
//   const TABLE_HEAD = [" ", "Name", "Date", "Category", "Action"];
//   // console.log(newsAndEvents);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedNews, setSelectedNews] = useState(null);
//   const [editedNews, setEditedNews] = useState({
//     title: "",
//     date: "",
//     details: "",
//     imageUrl: "",
//   });

//   if (isLoading) {
//     return <LoadingSpinner />;
//   }

//   const openModal = (newsAndEvents) => {
//     setSelectedNews(newsAndEvents);
//     setEditedNews(newsAndEvents);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedNews({ ...editedNews, [name]: value });
//   };

//   const handleSave = async (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const title = form.title.value;
//     const date = form.date.value;
//     const imageUrl = form.imageUrl.value;
//     const details = form.details.value;
//     const update = {
//       title,
//       date,
//       imageUrl,
//       details,
//     };
//     console.log(update);
//     try {
//       const response = await fetch(
//         `https://ark-power-server.vercel.app/news/${selectedNews._id}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(update),
//         }
//       );

//       if (response.ok) {
//         const updatedNews = await response.json();
//         if (updatedNews) {
//           refetch();
//           Swal.fire("Updated!", "The News has been Updated.", "success");
//           closeModal();
//         }
//       } else {
//         console.error("Failed to update News");
//         const errorText = await response.text();
//         console.error("Error response:", errorText);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const handleDelete = (id) => {
//     console.log(id);
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to remove this news!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`https://ark-power-server.vercel.app/news/${id}`, {
//           method: "DELETE",
//         })
//           .then((res) => {
//             console.log(res);
//             if (!res.ok) {
//               throw new Error(
//                 `Network response was not ok - ${res.status} ${res.statusText}`
//               );
//             }
//             return res.json();
//           })
//           .then((data) => {
//             // Handle successful response
//             if (data.deletedCount > 0) {
//               refetch();
//               Swal.fire("Deleted!", "The news has been deleted.", "success");
//             } else {
//               Swal.fire("Error", "Failed to delete the News.", "error");
//             }
//           })
//           .catch((error) => {
//             console.error("Error:", error);
//             Swal.fire(
//               "Error",
//               "An error occurred while deleting the news.",
//               "error"
//             );
//           });
//       }
//     });
//   };

//   return (
//     <div className="h-full w-full">
//       <h1 className="text-center text-primary font-bold text-2xl py-5">
//         All News
//       </h1>
//       <div className="overflow-x-auto">
//         <table className="min-w-full table-auto text-left">
//           <thead className="">
//             <tr>
//               {TABLE_HEAD.map((head) => (
//                 <th
//                   key={head}
//                   className="border-b border-blue-gray-100 bg-blue-gray-50 p-2 md:p-4"
//                 >
//                   <Typography
//                     variant="small"
//                     color="blue-gray"
//                     className="font-normal leading-none opacity-70 text-xs md:text-base"
//                   >
//                     {head}
//                   </Typography>
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {newsAndEvents.map(
//               (news, index) => (
//                 <tr key={index} className="even:bg-blue-gray-50/50">
//                   <td className="p-2 md:p-4">
//                     <div className="avatar">
//                       <div className="w-20 rounded">
//                         <img
//                           src={news.imageUrl}
//                           alt="Tailwind-CSS-Avatar-component"
//                         />
//                       </div>
//                     </div>
//                   </td>
//                   <td className="p-2 md:p-4">
//                     <Typography
//                       variant="small"
//                       color="blue-gray"
//                       className="font-normal text-xs md:text-base"
//                     >
//                       {news.title.slice(0, 50)}
//                     </Typography>
//                   </td>
//                   <td className="p-2 md:p-4">
//                     <Typography
//                       variant="small"
//                       color="blue-gray"
//                       className="font-normal text-xs md:text-base"
//                     >
//                       {news.date}
//                     </Typography>
//                   </td>
//                   <td className="p-2 md:p-4">
//                     <Typography
//                       variant="small"
//                       color="blue-gray"
//                       className="font-normal text-xs md:text-base"
//                     >
//                       {news.Category}
//                     </Typography>
//                   </td>
//                   <td className="p-2 flex gap-5 md:p-4 text-black">
//                     <button
//                       className="btn-error"
//                       onClick={() => openModal(news)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="btn-warning"
//                       onClick={() => handleDelete(news._id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               )
//             )}
//           </tbody>
//         </table>
//       </div>

//       <Modal
//         isOpen={isModalOpen}
//         onRequestClose={closeModal}
//         contentLabel="Edit News"
//         ariaHideApp={false}
//         className="modal w-1/2 mx-auto md:mt-32 mt-16 bg-blue-50 border rounded-lg p-10 shadow-2xl"
//       >
//         <h2 className="text-xl mb-4 text-center font-semibold">Edit News</h2>
//         <form onSubmit={handleSave}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Image URL
//             </label>
//             <input
//               type="text"
//               name="imageUrl"
//               value={editedNews.imageUrl}
//               onChange={handleInputChange}
//               className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Name
//             </label>
//             <input
//               type="text"
//               name="title"
//               value={editedNews.title}
//               onChange={handleInputChange}
//               className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Date
//             </label>
//             <input
//               type="text"
//               name="date"
//               value={editedNews.date}
//               onChange={handleInputChange}
//               className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Description
//             </label>
//             <textarea
//               name="details"
//               value={editedNews.details}
//               onChange={handleInputChange}
//               className="mt-1 p-2 block w-full border h-32 border-gray-300 rounded-md"
//             ></textarea>
//           </div>
//           <div className="flex justify-end gap-5">
//             <button type="button" className="btn-warning" onClick={closeModal}>
//               Cancel
//             </button>
//             <button type="submit" className="btn-Secondary">
//               Save Changes
//             </button>
//           </div>
//         </form>
//       </Modal>
//     </div>
//   );
// };

// export default ManageNewsAndEvents;


// import useNewsAndEvents from "../../../Hooks/useNewsAndEvents";
// import { Typography } from "@material-tailwind/react";
// import LoadingSpinner from "../../../Hooks/Loading/LoadingSpinner";
// import Swal from "sweetalert2";
// import Modal from "react-modal";
// import { useState } from "react";
// import { HiCamera } from "react-icons/hi"; // Make sure to import the HiCamera icon

// const img_hosting_token = import.meta.env.VITE_img_hosting_key;
// const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

// const ManageNewsAndEvents = () => {
//   const { newsAndEvents, refetch, isLoading } = useNewsAndEvents();
//   const TABLE_HEAD = [" ", "Name", "Date", "Category", "Action"];
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedNews, setSelectedNews] = useState(null);
//   const [editedNews, setEditedNews] = useState({
//     title: "",
//     date: "",
//     details: "",
//     imageUrl: "",
//   });

//   if (isLoading) {
//     return <LoadingSpinner />;
//   }

//   const openModal = (news) => {
//     setSelectedNews(news);
//     setEditedNews(news);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedNews({ ...editedNews, [name]: value });
//   };

//   const handleImageChange = async (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const formData = new FormData();
//       formData.append("image", file);

//       try {
//         const response = await fetch(img_hosting_url, {
//           method: "POST",
//           body: formData,
//         });

//         const data = await response.json();
//         if (data.success) {
//           setEditedNews({ ...editedNews, imageUrl: data.data.url });
//         } else {
//           console.error("Image upload failed:", data);
//         }
//       } catch (error) {
//         console.error("Error uploading image:", error);
//       }
//     }
//   };

//   // const handleSave = async (event) => {
//   //   event.preventDefault();
//   //   const update = { ...editedNews };
//   //   try {
//   //     const response = await fetch(
//   //       `https://ark-power-server.vercel.app/news/${selectedNews._id}`,
//   //       {
//   //         method: "PUT",
//   //         headers: {
//   //           "Content-Type": "application/json",
//   //         },
//   //         body: JSON.stringify(update),
//   //       }
//   //     );

//   //     if (response.ok) {
//   //       await response.json();
//   //       refetch();
//   //       Swal.fire("Updated!", "The News has been Updated.", "success");
//   //       closeModal();
//   //     } else {
//   //       console.error("Failed to update News");
//   //     }
//   //   } catch (error) {
//   //     console.error("Error:", error);
//   //   }
//   // };


//   const handleSave = async (event) => {
//     event.preventDefault();
//     const update = { ...editedNews };
//     try {
//       const response = await fetch(
//         `http://localhost:3000/news/${selectedNews._id}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(update),
//         }
//       );
  
//       if (!response.ok) {
//         const errorText = await response.text(); // Get the error message
//         console.error("Failed to update News:", errorText);
//         throw new Error(`Error: ${response.status} ${response.statusText}`);
//       }
  
//       await response.json();
//       refetch();
//       Swal.fire("Updated!", "The News has been Updated.", "success");
//       closeModal();
//     } catch (error) {
//       console.error("Error:", error);
//       Swal.fire("Error", "An error occurred while updating the news.", "error");
//     }
//   };

  
//   const handleDelete = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to remove this news!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`https://ark-power-server.vercel.app/news/${id}`, {
//           method: "DELETE",
//         })
//           .then((res) => {
//             if (!res.ok) {
//               throw new Error(`Network response was not ok - ${res.status} ${res.statusText}`);
//             }
//             return res.json();
//           })
//           .then((data) => {
//             if (data.deletedCount > 0) {
//               refetch();
//               Swal.fire("Deleted!", "The news has been deleted.", "success");
//             } else {
//               Swal.fire("Error", "Failed to delete the News.", "error");
//             }
//           })
//           .catch((error) => {
//             console.error("Error:", error);
//             Swal.fire("Error", "An error occurred while deleting the news.", "error");
//           });
//       }
//     });
//   };

//   return (
//     <div className="h-full w-full">
//       <div className="flex justify-between items-center">
//       <h1 className="text-primary font-bold text-2xl py-5">All News</h1>
//       <div>
//         sort field
//       </div>
//       </div>
//       <div className="overflow-x-auto">
//         <table className="min-w-full table-auto text-left">
//           <thead>
//             <tr>
//               {TABLE_HEAD.map((head) => (
//                 <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-2 md:p-4">
//                   <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70 text-xs md:text-base">
//                     {head}
//                   </Typography>
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {newsAndEvents.map((news, index) => (
//               <tr key={index} className="even:bg-blue-gray-50/50">
//                 <td className="p-2 md:p-4">
//                   <div className="avatar">
//                     <div className="w-20 rounded">
//                       <img src={news.imageUrl} alt="Tailwind-CSS-Avatar-component" />
//                     </div>
//                   </div>
//                 </td>
//                 <td className="p-2 md:p-4">
//                   <Typography variant="small" color="blue-gray" className="font-normal text-xs md:text-base">
//                     {news.title.slice(0, 50)}
//                   </Typography>
//                 </td>
//                 <td className="p-2 md:p-4">
//                   <Typography variant="small" color="blue-gray" className="font-normal text-xs md:text-base">
//                     {news.date}
//                   </Typography>
//                 </td>
//                 <td className="p-2 md:p-4">
//                   <Typography variant="small" color="blue-gray" className="font-normal text-xs md:text-base">
//                     {news.Category}
//                   </Typography>
//                 </td>
//                 <td className="p-2 flex gap-5 md:p-4 text-black">
//                   <button className="btn-error" onClick={() => openModal(news)}>Edit</button>
//                   <button className="btn-warning" onClick={() => handleDelete(news._id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <Modal
//         isOpen={isModalOpen}
//         onRequestClose={closeModal}
//         contentLabel="Edit News"
//         ariaHideApp={false}
//         className="modal w-1/2 mx-auto mt-16 bg-white rounded-lg shadow-lg p-8"
//       >
//         <h2 className="text-xl mb-4 text-center font-semibold">Edit News</h2>
//         <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Image Section */}
//           <div className="relative border-dashed border-2 border-gray-300 rounded-lg p-4 flex flex-col items-center">
//             <label className="block text-gray-700 text-sm font-medium mb-2">Product Image</label>
//             <div className="w-full flex justify-center mb-4">
//               <div className="w-48 h-48 bg-gray-100 border border-gray-300 rounded-lg overflow-hidden flex items-center justify-center relative">
//                 {editedNews.imageUrl ? (
//                   <img src={editedNews.imageUrl} alt="Image Preview" className="w-full h-full object-cover" />
//                 ) : (
//                   <HiCamera className="text-gray-400 text-4xl" />
//                 )}
//               </div>
//             </div>
//             <input
//               type="file"
//               name="imageUrl"
//               onChange={handleImageChange}
//               className="w-full p-2 border rounded"
//             />
//           </div>

//           {/* Other Fields Section */}
//           <div className="space-y-6 col-span-1 md:col-span-1">
//             <div>
//               <label className="block text-gray-700">Title</label>
//               <input
//                 type="text"
//                 name="title"
//                 value={editedNews.title}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700">Category</label>
//               <select
//                 name="Category"
//                 value={editedNews.Category}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border rounded"
//               >
//                 <option value="News">News</option>
//                 <option value="Events">Events</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-gray-700">Date</label>
//               <input
//                 type="text"
//                 name="date"
//                 value={editedNews.date}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//           </div>

//           {/* Details Field */}
//           <div className="col-span-1 md:col-span-2">
//             <label className="block text-gray-700">Details</label>
//             <textarea
//               name="details"
//               value={editedNews.details}
//               onChange={handleInputChange}
//               className="w-full p-2 border rounded h-32"
//             ></textarea>
//           </div>

//           <div className="flex justify-end gap-5 col-span-1 md:col-span-2">
//             <button type="button" className="btn-warning" onClick={closeModal}>
//               Cancel
//             </button>
//             <button type="submit" className="btn-Secondary">
//               Save Changes
//             </button>
//           </div>
//         </form>
//       </Modal>
//     </div>
//   );
// };

// export default ManageNewsAndEvents;

import useNewsAndEvents from "../../../Hooks/useNewsAndEvents";
import { Typography } from "@material-tailwind/react";
import LoadingSpinner from "../../../Hooks/Loading/LoadingSpinner";
import Swal from "sweetalert2";
import Modal from "react-modal";
import { useState } from "react";
import { HiCamera } from "react-icons/hi";

const img_hosting_token = import.meta.env.VITE_img_hosting_key;
const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

const ManageNewsAndEvents = () => {
  const { newsAndEvents, refetch, isLoading } = useNewsAndEvents();
  const TABLE_HEAD = [" ", "Name", "Date", "Category", "Action"];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);
  const [editedNews, setEditedNews] = useState({
    title: "",
    date: "",
    details: "",
    imageUrl: "",
  });
  
  // State for sorting
  const [sortOption, setSortOption] = useState("name"); // Default sort by name

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const openModal = (news) => {
    setSelectedNews(news);
    setEditedNews(news);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedNews({ ...editedNews, [name]: value });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      try {
        const response = await fetch(img_hosting_url, {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        if (data.success) {
          setEditedNews({ ...editedNews, imageUrl: data.data.url });
        } else {
          console.error("Image upload failed:", data);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const handleSave = async (event) => {
    event.preventDefault();
    const update = { ...editedNews };
    try {
      const response = await fetch(
        `http://localhost:3000/news/${selectedNews._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(update),
        }
      );
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Failed to update News:", errorText);
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      await response.json();
      refetch();
      Swal.fire("Updated!", "The News has been Updated.", "success");
      closeModal();
    } catch (error) {
      console.error("Error:", error);
      Swal.fire("Error", "An error occurred while updating the news.", "error");
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to remove this news!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://ark-power-server.vercel.app/news/${id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error(`Network response was not ok - ${res.status} ${res.statusText}`);
            }
            return res.json();
          })
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "The news has been deleted.", "success");
            } else {
              Swal.fire("Error", "Failed to delete the News.", "error");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            Swal.fire("Error", "An error occurred while deleting the news.", "error");
          });
      }
    });
  };

  // Sorting logic
  const sortedNewsAndEvents = [...newsAndEvents].sort((a, b) => {
    if (sortOption === "date") {
      return new Date(a.date) - new Date(b.date); // Sort by date
    }
    return a.title.localeCompare(b.title); // Sort by title
  });

  return (
    <div className="h-full w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-primary font-bold text-2xl py-5">All News</h1>
        <div>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="name">Sort by Name</option>
            <option value="date">Sort by Date</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-2 md:p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70 text-xs md:text-base">
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedNewsAndEvents.map((news, index) => (
              <tr key={index} className="even:bg-blue-gray-50/50">
                <td className="p-2 md:p-4">
                  <div className="avatar">
                    <div className="w-20 rounded">
                      <img src={news.imageUrl} alt="Tailwind-CSS-Avatar-component" />
                    </div>
                  </div>
                </td>
                <td className="p-2 md:p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal text-xs md:text-base">
                    {news.title.slice(0, 50)}
                  </Typography>
                </td>
                <td className="p-2 md:p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal text-xs md:text-base">
                    {news.date}
                  </Typography>
                </td>
                <td className="p-2 md:p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal text-xs md:text-base">
                    {news.Category}
                  </Typography>
                </td>
                <td className="p-2 flex gap-5 md:p-4 text-black">
                  <button className="btn-error" onClick={() => openModal(news)}>Edit</button>
                  <button className="btn-warning" onClick={() => handleDelete(news._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

 <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Edit News"
        ariaHideApp={false}
        className="modal w-1/2 mx-auto mt-16 bg-white rounded-lg shadow-lg p-8"
      >
        <h2 className="text-xl mb-4 text-center font-semibold">Edit News</h2>
        <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image Section */}
          <div className="relative border-dashed border-2 border-gray-300 rounded-lg p-4 flex flex-col items-center">
            <label className="block text-gray-700 text-sm font-medium mb-2">Product Image</label>
            <div className="w-full flex justify-center mb-4">
              <div className="w-48 h-48 bg-gray-100 border border-gray-300 rounded-lg overflow-hidden flex items-center justify-center relative">
                {editedNews.imageUrl ? (
                  <img src={editedNews.imageUrl} alt="Image Preview" className="w-full h-full object-cover" />
                ) : (
                  <HiCamera className="text-gray-400 text-4xl" />
                )}
              </div>
            </div>
            <input
              type="file"
              name="imageUrl"
              onChange={handleImageChange}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Other Fields Section */}
          <div className="space-y-6 col-span-1 md:col-span-1">
            <div>
              <label className="block text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                value={editedNews.title}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Category</label>
              <select
                name="Category"
                value={editedNews.Category}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              >
                <option value="News">News</option>
                <option value="Events">Events</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                value={editedNews.date}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          {/* Details Field */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-gray-700">Details</label>
            <textarea
              name="details"
              value={editedNews.details}
              onChange={handleInputChange}
              className="w-full p-2 border rounded h-32"
            ></textarea>
          </div>

          <div className="flex justify-end gap-5 col-span-1 md:col-span-2">
            <button type="button" className="btn-warning" onClick={closeModal}>
              Cancel
            </button>
            <button type="submit" className="btn-Secondary">
              Save Changes
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ManageNewsAndEvents;

