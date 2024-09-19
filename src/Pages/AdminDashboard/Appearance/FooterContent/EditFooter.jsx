// import React, { useState } from "react";
// import Swal from "sweetalert2";
// import useFooter from "../../../../Hooks/useFooter";
// import LoadingSpinner from "../../../../Hooks/Loading/LoadingSpinner";

// const EditFooter = () => {
//   const { footerContent, isLoading, refetch } = useFooter();
//   const [updatedFooterContent, setUpdatedFooterContent] = useState(footerContent || []);

//   // Handle input changes
//   const handleInputChange = (e, index) => {
//     const { name, value } = e.target;
//     const updatedContent = [...updatedFooterContent];
//     updatedContent[index] = {
//       ...updatedContent[index],
//       [name]: value,
//     };
//     setUpdatedFooterContent(updatedContent);
//   };

//   // Handle Save
//   const handleSave = async (event) => {
//     event.preventDefault();

//     const update = {
//       address: updatedFooterContent[0]?.address,
//       salesContact: updatedFooterContent[0]?.salesContact,
//       supportContact: updatedFooterContent[0]?.supportContact,
//       email: updatedFooterContent[0]?.email,
//       facebookUrl: updatedFooterContent[0]?.facebookUrl,
//       instagramUrl: updatedFooterContent[0]?.instagramUrl,
//       telegramUrl: updatedFooterContent[0]?.telegramUrl,
//       twitterUrl: updatedFooterContent[0]?.twitterUrl,
//       youtubeUrl: updatedFooterContent[0]?.youtubeUrl,
//     };

//     try {
//       Swal.fire({
//         title: "Updating...",
//         allowOutsideClick: false,
//         showConfirmButton: false,
//         didOpen: () => {
//           Swal.showLoading();
//         },
//       });

//       const response = await fetch(`http://localhost:3000/footer/${updatedFooterContent[0]?._id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(update),
//       });

//       if (response.ok) {
//         refetch();
//         Swal.fire("Updated!", "The footer information has been updated.", "success");
//       } else {
//         const errorText = await response.text();
//         Swal.fire("Error", `Failed to update footer: ${errorText}`, "error");
//       }
//     } catch (error) {
//       Swal.fire("Error", "Something went wrong. Please try again later.", "error");
//     }
//   };

//   if (isLoading) {
//     return <LoadingSpinner />;
//   }

//   return (
//     <form onSubmit={handleSave} className="rounded-3xl shadow-lg p-8">
//       <h2 className="text-4xl font-bold mb-8 text-blue-600 text-center">
//         Update Footer Information
//       </h2>

//       {/* Address Field */}
//       <div className="mb-6">
//         <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="address">
//           Office Address
//         </label>
//         <textarea
//           name="address"
//           value={updatedFooterContent[0]?.address || ''}
//           onChange={(e) => handleInputChange(e, 0)}
//           className="w-full px-4 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           rows="3"
//         />
//       </div>

//       {/* Contact Fields */}
//       <div className="mb-6">
//         <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="salesContact">
//           Hot Line
//         </label>
//         <input
//           type="text"
//           name="salesContact"
//           value={updatedFooterContent[0]?.salesContact || ''}
//           onChange={(e) => handleInputChange(e, 0)}
//           className="w-full px-4 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>
//       <div className="mb-6">
//         <input
//           type="text"
//           name="supportContact"
//           value={updatedFooterContent[0]?.supportContact || ''}
//           onChange={(e) => handleInputChange(e, 0)}
//           className="w-full px-4 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       {/* Email Field */}
//       <div className="mb-6">
//         <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">
//           Email
//         </label>
//         <input
//           type="email"
//           name="email"
//           value={updatedFooterContent[0]?.email || ''}
//           onChange={(e) => handleInputChange(e, 0)}
//           className="w-full px-4 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       {/* Social Media Fields */}
//       {['facebook', 'youtube', 'instagram', 'twitter', 'telegram'].map((platform) => (
//         <div className="mb-6" key={platform}>
//           <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor={platform}>
//             {`${platform.charAt(0).toUpperCase() + platform.slice(1)} URL`}
//           </label>
//           <input
//             type="url"
//             name={`${platform}Url`}
//             value={updatedFooterContent[0]?.[`${platform}Url`] || ''}
//             onChange={(e) => handleInputChange(e, 0)}
//             className="w-full px-4 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//       ))}

//       <button
//         type="submit"
//         className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full"
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

// export default EditFooter;


import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import useFooter from "../../../../Hooks/useFooter";
import LoadingSpinner from "../../../../Hooks/Loading/LoadingSpinner";

const EditFooter = () => {
  const { footerContent, isLoading, refetch } = useFooter();
  const [updatedFooterContent, setUpdatedFooterContent] = useState([]);

  // Update the state after fetching footerContent
  useEffect(() => {
    if (footerContent && footerContent.length > 0) {
      setUpdatedFooterContent(footerContent);
    }
  }, [footerContent]);

  // Handle input changes
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedContent = [...updatedFooterContent];
    updatedContent[index] = {
      ...updatedContent[index],
      [name]: value,
    };
    setUpdatedFooterContent(updatedContent);
  };

  // Handle Save
  const handleSave = async (event) => {
    event.preventDefault();

    const update = {
      address: updatedFooterContent[0]?.address,
      salesContact: updatedFooterContent[0]?.salesContact,
      supportContact: updatedFooterContent[0]?.supportContact,
      email: updatedFooterContent[0]?.email,
      facebookUrl: updatedFooterContent[0]?.facebookUrl,
      instagramUrl: updatedFooterContent[0]?.instagramUrl,
      telegramUrl: updatedFooterContent[0]?.telegramUrl,
      twitterUrl: updatedFooterContent[0]?.twitterUrl,
      youtubeUrl: updatedFooterContent[0]?.youtubeUrl,
    };

    try {
      Swal.fire({
        title: "Updating...",
        allowOutsideClick: false,
        showConfirmButton: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      const response = await fetch(`http://localhost:3000/footer/${updatedFooterContent[0]?._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(update),
      });

      if (response.ok) {
        refetch();
        Swal.fire("Updated!", "The footer information has been updated.", "success");
      } else {
        const errorText = await response.text();
        Swal.fire("Error", `Failed to update footer: ${errorText}`, "error");
      }
    } catch (error) {
      Swal.fire("Error", "Something went wrong. Please try again later.", "error");
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    // <form onSubmit={handleSave} className="rounded-3xl shadow-lg p-8 bg-white max-w-7xl mx-auto">
    //   <h2 className="text-4xl font-bold mb-8 text-blue-600 text-center">
    //     Update Footer Information
    //   </h2>

    //   {/* Grid Layout for Form */}
    //   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    //     {/* Address Field */}
    //     <div className="sm:col-span-2">
    //       <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="address">
    //         Office Address
    //       </label>
    //       <textarea
    //         name="address"
    //         value={updatedFooterContent[0]?.address || ""}
    //         onChange={(e) => handleInputChange(e, 0)}
    //         className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //         rows="3"
    //       />
    //     </div>

    //     {/* Contact Fields */}
    //     <div>
    //       <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="salesContact">
    //         Hot Line
    //       </label>
    //       <input
    //         type="text"
    //         name="salesContact"
    //         value={updatedFooterContent[0]?.salesContact || ""}
    //         onChange={(e) => handleInputChange(e, 0)}
    //         className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //       />
    //     </div>
    //     <div>
    //       <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="supportContact">
    //         Support Contact
    //       </label>
    //       <input
    //         type="text"
    //         name="supportContact"
    //         value={updatedFooterContent[0]?.supportContact || ""}
    //         onChange={(e) => handleInputChange(e, 0)}
    //         className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //       />
    //     </div>

    //     {/* Email Field */}
    //     <div className="sm:col-span-2">
    //       <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
    //         Email
    //       </label>
    //       <input
    //         type="email"
    //         name="email"
    //         value={updatedFooterContent[0]?.email || ""}
    //         onChange={(e) => handleInputChange(e, 0)}
    //         className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //       />
    //     </div>

    //     {/* Social Media Fields */}
    //     {["facebook", "youtube", "instagram", "twitter", "telegram"].map((platform) => (
    //       <div key={platform}>
    //         <label
    //           className="block text-gray-700 text-sm font-medium mb-2"
    //           htmlFor={`${platform}Url`}
    //         >
    //           {`${platform.charAt(0).toUpperCase() + platform.slice(1)} URL`}
    //         </label>
    //         <input
    //           type="url"
    //           name={`${platform}Url`}
    //           value={updatedFooterContent[0]?.[`${platform}Url`] || ""}
    //           onChange={(e) => handleInputChange(e, 0)}
    //           className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //         />
    //       </div>
    //     ))}
    //   </div>

    //   {/* Submit Button */}
    //   <div className="mt-8">
    //     <button
    //       type="submit"
    //       className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300"
    //     >
    //       Update Footer
    //     </button>
    //   </div>
    // </form>

    <form onSubmit={handleSave} className="w-full max-w-7xl mx-auto p-4 bg-white rounded-lg shadow-lg">
  <h2 className="text-3xl font-bold mb-8 text-blue-600 text-center">
    Update Footer Information
  </h2>

  {/* Grid layout for larger screens */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

    {/* Address Field */}
    <div className="col-span-1 md:col-span-2 lg:col-span-3">
      <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="address">
        Office Address
      </label>
      <textarea
        name="address"
        value={updatedFooterContent[0]?.address || ''}
        onChange={(e) => handleInputChange(e, 0)}
        className="w-full px-4 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="3"
      />
    </div>

    {/* Contact Fields */}
    <div>
      <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="salesContact">
        Hot Line
      </label>
      <input
        type="text"
        name="salesContact"
        value={updatedFooterContent[0]?.salesContact || ''}
        onChange={(e) => handleInputChange(e, 0)}
        className="w-full px-4 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="supportContact">
        Support Contact
      </label>
      <input
        type="text"
        name="supportContact"
        value={updatedFooterContent[0]?.supportContact || ''}
        onChange={(e) => handleInputChange(e, 0)}
        className="w-full px-4 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Email Field */}
    <div>
      <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">
        Email
      </label>
      <input
        type="email"
        name="email"
        value={updatedFooterContent[0]?.email || ''}
        onChange={(e) => handleInputChange(e, 0)}
        className="w-full px-4 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Social Media Fields */}
    {['facebook', 'youtube', 'instagram', 'twitter', 'telegram'].map((platform) => (
      <div key={platform}>
        <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor={platform}>
          {`${platform.charAt(0).toUpperCase() + platform.slice(1)} URL`}
        </label>
        <input
          type="url"
          name={`${platform}Url`}
          value={updatedFooterContent[0]?.[`${platform}Url`] || ''}
          onChange={(e) => handleInputChange(e, 0)}
          className="w-full px-4 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    ))}
  </div>

  {/* Submit Button */}
  <div className="mt-6">
    <button
      type="submit"
      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      Submit
    </button>
  </div>
</form>

  );
};

export default EditFooter;
