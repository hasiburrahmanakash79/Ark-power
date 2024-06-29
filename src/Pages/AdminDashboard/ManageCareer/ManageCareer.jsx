import React from "react";
import useCareer from "../../../Hooks/useCareer";
import LoadingSpinner from "../../../Hooks/Loading/LoadingSpinner";
import { Typography } from "@material-tailwind/react";
import Swal from "sweetalert2";

const ManageCareer = () => {
  const { careerContent, isLoading, refetch } = useCareer();
  const TABLE_HEAD = [" ", "Name", "Category", "Action"];

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const handleDelete = (id) => {
    console.log(id);
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
        fetch(`http://localhost:3000/career/${id}`, {
          method: "DELETE",
        })
          .then((res) => {
            console.log(res);
            if (!res.ok) {
              throw new Error(`Network response was not ok - ${res.status} ${res.statusText}`);
            }
            return res.json();
          })
          .then((data) => {
            // Handle successful response
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "The Career has been deleted.", "success");
            } else {
              Swal.fire("Error", "Failed to delete the Career.", "error");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            Swal.fire("Error", "An error occurred while deleting the Career.", "error");
          });
      }
    });
  };
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
            {careerContent.map(({ _id, title, category }, index) => (
              <tr key={index} className="even:bg-blue-gray-50/50">
                <td className="p-2 md:p-4">{index + 1}</td>
                <td className="p-2 md:p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-xs md:text-base"
                  >
                    {title}
                  </Typography>
                </td>
                <td className="p-2 md:p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-xs md:text-base"
                  >
                    {category}
                  </Typography>
                </td>
                <td className="p-2 flex gap-5 md:p-4 text-black">
                  <button className="btn-warning" onClick={() => handleDelete(_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCareer;
