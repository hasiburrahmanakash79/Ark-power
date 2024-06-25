import useNewsAndEvents from '../../../Hooks/useNewsAndEvents';
import { Card, Typography } from '@material-tailwind/react';
import LoadingSpinner from '../../../Hooks/Loading/LoadingSpinner';
import Swal from 'sweetalert2';

const ManageNewsAndEvents = () => {
    const {newsAndEvents, refetch, isLoading} = useNewsAndEvents();
    const TABLE_HEAD = [" ", "Name", "Date", "Category", "Action"];
    console.log(newsAndEvents);
  
    if(isLoading){
      return <LoadingSpinner/>
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
          fetch(`http://localhost:3000/news/${id}`, {
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
                Swal.fire("Deleted!", "The news has been deleted.", "success");
              } else {
                Swal.fire("Error", "Failed to delete the product.", "error");
              }
            })
            .catch((error) => {
              console.error("Error:", error);
              Swal.fire("Error", "An error occurred while deleting the news.", "error");
            });
        }
      });
    };
  
    // const handleDelete = (id) => {
    //   console.log("Deleting ID:", id); // Verify the ID being passed
    //   Swal.fire({
    //     title: "Are you sure?",
    //     text: "You won't be able to remove this news!",
    //     icon: "warning",
    //     showCancelButton: true,
    //     confirmButtonColor: "#3085d6",
    //     cancelButtonColor: "#d33",
    //     confirmButtonText: "Yes, delete it!",
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       fetch(`http://localhost:3000/news/${id}`, {
    //         method: "DELETE",
    //       })
    //         .then((res) => {
    //           if (!res.ok) {
    //             throw new Error(`Network response was not ok - ${res.status} ${res.statusText}`);
    //           }
    //           return res.json();
    //         })
    //         .then((data) => {
    //           if (data.deletedCount > 0) {
    //             refetch();
    //             Swal.fire("Deleted!", "The news has been deleted.", "success");
    //           } else {
    //             Swal.fire("Error", "Failed to delete the news.", "error");
    //           }
    //         })
    //         .catch((error) => {
    //           console.error("Error:", error);
    //           Swal.fire("Error", "An error occurred while deleting the news.", "error");
    //         });
    //     }
    //   });
    // };
    
    return (
      <Card className="h-full w-full">
        <h1 className="text-center text-primary font-bold text-2xl py-5">
          All News 
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
              {newsAndEvents.map(({ _id, imageUrl, title, date, Category}, index) => (
                <tr key={index} className="even:bg-blue-gray-50/50">
                  <td className="p-2 md:p-4">
                    <div className="avatar">
                      <div className="w-20 rounded">
                        <img
                          src={imageUrl}
                          alt="Tailwind-CSS-Avatar-component"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="p-2 md:p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-xs md:text-base"
                    >
                      {title.slice(0,50)}
                    </Typography>
                  </td>
                  <td className="p-2 md:p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-xs md:text-base"
                    >
                      {date}
                    </Typography>
                  </td>
                  <td className="p-2 md:p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-xs md:text-base"
                    >
                      {Category}
                    </Typography>
                  </td>
                  <td className="p-2 flex gap-5 md:p-4 text-black">
                    <button className="btn bg-orange-400 p-2">Edit</button>
                    <button className="btn bg-red-400 p-2" onClick={() => handleDelete(_id)}>Delete</button>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    );
};

export default ManageNewsAndEvents;