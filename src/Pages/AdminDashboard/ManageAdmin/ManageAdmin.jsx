import React, { useState } from "react";
import useUsers from "../../../Hooks/useUsers";
import LoadingSpinner from "../../../Hooks/Loading/LoadingSpinner";
import { Typography } from "@material-tailwind/react";
import Swal from "sweetalert2";

const MAnageAdmin = () => {
  const { users, isLoading, refetch } = useUsers();
  const [searchTerm, setSearchTerm] = useState(""); // Search term state
  const [suggestions, setSuggestions] = useState([]); // Suggestions state

  const TABLE_HEAD = [" ", "User Name", "Email", "Role", "Action"];

  if (isLoading) {
    return <LoadingSpinner />;
  }

  // Handle user search based on email
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter users based on search input
    if (value) {
      const filteredUsers = users.filter((user) =>
        user.email.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredUsers);
    } else {
      setSuggestions([]);
    }
  };

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
              Swal.fire("Deleted!", "User has been deleted.", "success");
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
      <div className="flex justify-between items-center py-4">
        <div>
          <h1 className="text-3xl font-semibold">All User</h1>
        </div>
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by email"
            className="border p-2"
          />
          {suggestions.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-white border max-h-40 overflow-auto z-10">
              {suggestions.map((user) => (
                <div
                  key={user._id}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setSearchTerm(user.email)} // Set email to input on click
                >
                  {user.email}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <table className="min-w-full table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-2 md:p-4"
                style={{ width: "200px" }} // Set a fixed width for each column
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
          {users
            .filter((user) =>
              user.email.toLowerCase().includes(searchTerm.toLowerCase())
            ) // Filter users based on search term
            .map(({ _id, displayName, email, role }, index) => (
              <tr key={index} className="even:bg-blue-gray-50/50">
                <td className="p-2 md:p-4" style={{ width: "50px" }}>{index + 1}</td>
                <td className="p-2 md:p-4" style={{ width: "200px" }}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-xs md:text-base"
                  >
                    {displayName}
                  </Typography>
                </td>
                <td className="p-2 md:p-4" style={{ width: "250px" }}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-xs md:text-base"
                  >
                    {email}
                  </Typography>
                </td>
                <td className="p-2 md:p-4" style={{ width: "100px" }}>
                  <Typography
                    variant="small"
                    color={role === "suspend" ? "red" : "blue-gray"}
                    className="font-normal text-xs md:text-base uppercase"
                  >
                    {role}
                  </Typography>
                </td>
                <td className="p-2 flex gap-5 md:p-4 text-black" style={{ width: "250px" }}>
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
                  <button
                    onClick={() => handleDelete(_id)}
                    className="btn-warning"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MAnageAdmin;

