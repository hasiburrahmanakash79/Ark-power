// import React from "react";
// import useCareer from "../../../Hooks/useCareer";
// import LoadingSpinner from "../../../Hooks/Loading/LoadingSpinner";
// import { Typography } from "@material-tailwind/react";
// import Swal from "sweetalert2";

// const ManageCareer = () => {
//   const { careerContent, isLoading, refetch } = useCareer();
//   const TABLE_HEAD = [" ", "Name", "Category", "Action"];

//   if (isLoading) {
//     return <LoadingSpinner />;
//   }

//   const handleEdit = (id) => {
//     console.log(id);
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
//         fetch(`https://ark-power-server.vercel.app/career/${id}`, {
//           method: "DELETE",
//         })
//           .then((res) => {
//             console.log(res);
//             if (!res.ok) {
//               throw new Error(`Network response was not ok - ${res.status} ${res.statusText}`);
//             }
//             return res.json();
//           })
//           .then((data) => {
//             // Handle successful response
//             if (data.deletedCount > 0) {
//               refetch();
//               Swal.fire("Deleted!", "The Career has been deleted.", "success");
//             } else {
//               Swal.fire("Error", "Failed to delete the Career.", "error");
//             }
//           })
//           .catch((error) => {
//             console.error("Error:", error);
//             Swal.fire("Error", "An error occurred while deleting the Career.", "error");
//           });
//       }
//     });
//   };
//   return (
//     <div>
//         <h1 className="text-center text-primary font-bold text-2xl py-5">
//           Career Manage
//         </h1>
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
//             {careerContent.map(({ _id, title, category }, index) => (
//               <tr key={index} className="even:bg-blue-gray-50/50">
//                 <td className="p-2 md:p-4">{index + 1}</td>
//                 <td className="p-2 md:p-4">
//                   <Typography
//                     variant="small"
//                     color="blue-gray"
//                     className="font-normal text-xs md:text-base"
//                   >
//                     {title}
//                   </Typography>
//                 </td>
//                 <td className="p-2 md:p-4">
//                   <Typography
//                     variant="small"
//                     color="blue-gray"
//                     className="font-normal text-xs md:text-base"
//                   >
//                     {category}
//                   </Typography>
//                 </td>
//                 <td className="p-2 flex gap-5 md:p-4 text-black">
//                   <button className="btn-error" onClick={() => handleEdit(_id)}>Edit</button>
//                   <button className="btn-warning" onClick={() => handleDelete(_id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ManageCareer;

import React, { useState } from "react";
import useCareer from "../../../Hooks/useCareer";
import LoadingSpinner from "../../../Hooks/Loading/LoadingSpinner";
import { Typography } from "@material-tailwind/react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ManageCareer = () => {
  const { careerContent, isLoading, refetch } = useCareer();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [editorContent, setEditorContent] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const TABLE_HEAD = [" ", "Name", "Category", "Action"];

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const handleEdit = (career) => {
    setSelectedCareer(career);
    setEditorContent(career.details); // Pre-fill the editor content
    setValue("title", career.title); // Pre-fill the form inputs
    setValue("email", career.email);
    setValue("seat", career.seat);
    setValue("category", career.category);
    setModalOpen(true); // Open modal
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to remove this career!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/career/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "The Career has been deleted.", "success");
            } else {
              Swal.fire("Error", "Failed to delete the Career.", "error");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            Swal.fire(
              "Error",
              "An error occurred while deleting the Career.",
              "error"
            );
          });
      }
    });
  };

  const onSubmit = (data) => {
    const updatedCareer = {
      ...data,
      details: editorContent,
    };
console.log(selectedCareer);
    fetch(`http://localhost:3000/career/${selectedCareer._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedCareer),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          setModalOpen(false);
          refetch();
          Swal.fire("Updated!", "The Career has been updated.", "success");
        } else {
          Swal.fire("Error", "Failed to update the Career.", "error");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire(
          "Error",
          "An error occurred while updating the Career.",
          "error"
        );
      });
  };

  const handleCancel = () => {
    setModalOpen(false);
    reset();
  };

  const handleChange = (value) => {
    setEditorContent(value);
  };

  const modules = {
    toolbar: [
      [{ font: [] }, { size: [] }],
      ["bold", "italic", "underline", "strike"],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ color: [] }, { background: [] }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "align",
    "color",
    "background",
    "link",
    "image",
  ];

  return (
    <div>
      <h1 className="text-center text-primary font-bold text-2xl py-5">
        Career Manage
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-left">
          <thead className="">
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-2 md:p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70 text-xs md:text-base"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {careerContent.map((career, index) => (
              <tr key={index} className="even:bg-blue-gray-50/50">
                <td className="p-2 md:p-4">{index + 1}</td>
                <td className="p-2 md:p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-xs md:text-base"
                  >
                    {career.title}
                  </Typography>
                </td>
                <td className="p-2 md:p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-xs md:text-base"
                  >
                    {career.category}
                  </Typography>
                </td>
                <td className="p-2 flex gap-5 md:p-4 text-black">
                  <button
                    className="btn-error"
                    onClick={() => handleEdit(career)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn-warning"
                    onClick={() => handleDelete(career._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-xl shadow-lg w-2/3">
            <h2 className="text-xl font-bold mb-4">Edit Career</h2>{" "}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className=""
            >
              {" "}
              <div className="grid grid-cols-2 gap-10">
                {" "}
                {/* Left side inputs */}{" "}
                <div>
                  {" "}
                  <div className="mb-6">
                    {" "}
                    <label className="block text-gray-700 font-semibold mb-2">
                      {" "}
                      Job Title{" "}
                    </label>{" "}
                    <input
                      type="text"
                      {...register("title", { required: true })}
                      placeholder="Enter job title"
                      className={`w-full p-3 border rounded-md ${
                        errors.title ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-blue-400`}
                    />{" "}
                    {errors.title && (
                      <p className="text-red-500 text-sm mt-1">
                        Title is required
                      </p>
                    )}{" "}
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      {...register("email", { required: true })}
                      placeholder="Enter contact email"
                      className={`w-full p-3 border rounded-md ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-blue-400`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        Contact email is required
                      </p>
                    )}
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Available Position
                    </label>
                    <input
                      type="number"
                      {...register("seat", { required: true })}
                      placeholder="Number of available positions"
                      className={`w-full p-3 border rounded-md ${
                        errors.seat ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-blue-400`}
                    />
                    {errors.seat && (
                      <p className="text-red-500 text-sm mt-1">
                        Available positions are required
                      </p>
                    )}
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Job Category
                    </label>
                    <select
                      {...register("category", { required: true })}
                      className={`w-full p-3 border rounded-md ${
                        errors.category ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-blue-400`}
                    >
                      <option value="" disabled>
                        Select job category
                      </option>
                      <option value="Job">Job</option>
                      <option value="Internship">Internship</option>
                    </select>
                    {errors.category && (
                      <p className="text-red-500 text-sm mt-1">
                        Job category is required
                      </p>
                    )}
                  </div>
                </div>
                {/* Right side editor */}
                <div className="">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Job Details
                  </label>
                  <ReactQuill
                    value={editorContent}
                    onChange={handleChange}
                    modules={modules}
                    formats={formats}
                    placeholder="Describe the job in detail..."
                    className="h-72"
                  />
                  {errors.details && (
                    <p className="text-red-500 text-sm mt-1">
                      Job details are required
                    </p>
                  )}
                </div>
              </div>
              {/* Buttons */}
              <div className="flex justify-end gap-4 mt-8">
                <button
                  type="button"
                  className="bg-gray-300 text-black p-3 rounded-md hover:bg-gray-400 transition-all"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Update Career
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageCareer;
