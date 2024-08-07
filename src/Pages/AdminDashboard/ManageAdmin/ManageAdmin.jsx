import React from "react";
import useUsers from "../../../Hooks/useUsers";
import LoadingSpinner from "../../../Hooks/Loading/LoadingSpinner";
import { Typography } from "@material-tailwind/react";
import Swal from "sweetalert2";

const MAnageAdmin = () => {
  const { users, isLoading, refetch } = useUsers();

  const TABLE_HEAD = [" ", "User Name", "Email", "Role", "Action"];

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to remove this user!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://ark-power-server.vercel.app/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "User has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };

  const handleAdmin = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to change this role!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, change it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://ark-power-server.vercel.app/users/${id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            if (data.modifiedCount) {
              Swal.fire({
                showConfirmButton: false,
                timer: 1500,
                title: "This user is admin now",
                icon: "success",
              });
            }
          });
      }
    });
  };

  const handleSuspend = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to change this role!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, change it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://ark-power-server.vercel.app/suspend/${id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            if (data.modifiedCount) {
              Swal.fire({
                showConfirmButton: false,
                timer: 1500,
                title: "This user is Suspended",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
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
          {users.map(({ _id, displayName, email, role }, index) => (
            <tr key={index} className="even:bg-blue-gray-50/50">
              <td className="p-2 md:p-4">{index + 1}</td>
              <td className="p-2 md:p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal text-xs md:text-base"
                >
                  {displayName}
                </Typography>
              </td>
              <td className="p-2 md:p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal text-xs md:text-base"
                >
                  {email}
                </Typography>
              </td>
              <td className="p-2 md:p-4">
                <Typography
                  variant="small"
                  color={role === "suspend" ? "red" : "blue-gray"}
                  className="font-normal text-xs md:text-base uppercase"
                >
                  {role}
                </Typography>
              </td>
              <td className="p-2 flex gap-5 md:p-4 text-black">
                {role === "suspend" ? null : role === "user" ? (
                  <button
                    onClick={() => handleAdmin(_id)}
                    className="btn-Secondary"
                  >
                    Make Admin
                  </button>
                ) : (
                  <button
                    onClick={() => handleSuspend(_id)}
                    className="btn-error"
                  >
                    Suspend
                  </button>
                )}

                <button onClick={() => handleDelete(_id)} className="btn-warning">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MAnageAdmin;
