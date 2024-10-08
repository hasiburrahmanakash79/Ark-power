import React, { useState } from "react";
import useProducts from "../../../Hooks/useProducts";
import { Typography } from "@material-tailwind/react";
import LoadingSpinner from "../../../Hooks/Loading/LoadingSpinner";
import Modal from "react-modal";
import Swal from "sweetalert2";
import { FaSearch } from "react-icons/fa";

const img_hosting_token = import.meta.env.VITE_img_hosting_key;
const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

const ManageProducts = () => {
  const { products, isLoading, refetch } = useProducts();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editedProduct, setEditedProduct] = useState({
    name: "",
    description: "",
    imageUrl: "",
  });
  const [searchQuery, setSearchQuery] = useState("");

  const TABLE_HEAD = [" ", "Name", "Description", "Action"];

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const openModal = (product) => {
    setSelectedProduct(product);
    setEditedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      // Upload to imgbb
      fetch(img_hosting_url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setEditedProduct((prev) => ({
              ...prev,
              imageUrl: data.data.display_url,
            }));
          } else {
            Swal.fire("Error", "Failed to upload image", "error");
          }
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
          Swal.fire(
            "Error",
            "An error occurred while uploading the image",
            "error"
          );
        });
    }
  };

  const handleSave = async (event) => {
    event.preventDefault();
    const { name, imageUrl, description } = editedProduct;
    const update = {
      name,
      imageUrl,
      description,
    };

    try {
      const response = await fetch(
        `https://ark-power-server.vercel.app/products/${selectedProduct._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(update),
        }
      );

      if (response.ok) {
        const updatedProduct = await response.json();
        if (updatedProduct) {
          refetch();
          Swal.fire("Updated!", "The product has been updated.", "success");
          closeModal();
        }
      } else {
        console.error("Failed to update product");
        const errorText = await response.text();
        console.error("Error response:", errorText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to remove this product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://ark-power-server.vercel.app/products/${id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error(
                `Network response was not ok - ${res.status} ${res.statusText}`
              );
            }
            return res.json();
          })
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "The product has been deleted.", "success");
            } else {
              Swal.fire("Error", "Failed to delete the product.", "error");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            Swal.fire(
              "Error",
              "An error occurred while deleting the product.",
              "error"
            );
          });
      }
    });
  };

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`w-full overflow-x-auto mx-auto ${isModalOpen ? "blur-lg bg-black" : ""}`}>
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-center text-primary font-bold text-2xl py-5">
          All Products
        </h1>
        <div className="relative w-1/2 md:w-1/3">
          <FaSearch className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search product"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="">
        <table className="min-w-full table-auto text-left">
          <thead>
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
            {filteredProducts.map((product, index) => (
              <tr key={index} className="even:bg-blue-gray-50/50">
                <td className="p-2 md:p-4">
                  <div className="avatar">
                    <div className="w-10 h-10 rounded">
                      <img src={product.imageUrl} alt="Product" />
                    </div>
                  </div>
                </td>
                <td className="p-2 md:p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-xs md:text-base"
                  >
                    {product.name}
                  </Typography>
                </td>
                <td className="p-2 md:p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-xs md:text-base"
                  >
                    {product.description.slice(0, 110)}...
                  </Typography>
                </td>
                <td className="p-2 flex gap-5 md:p-4 text-black">
                  <button
                    className="btn-error"
                    onClick={() => openModal(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn-warning"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Edit Product"
        ariaHideApp={false}
        className="modal w-full max-w-3xl mx-auto mt-16 bg-white border rounded-lg p-8 shadow-2xl"
      >
        <h2 className="text-2xl mb-4 text-center font-semibold">
          Edit Product
        </h2>
        <form onSubmit={handleSave} >
          <div className="grid grid-cols-2 gap-10">
            <div className="mb-4">
              {editedProduct.imageUrl && (
                <div className="mt-2 flex justify-center">
                  <img
                    src={editedProduct.imageUrl}
                    alt="Product Preview"
                    className="w-full h-72 object-cover border rounded"
                  />
                </div>
              )}
              <label className="block text-sm font-medium text-gray-700">
                Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={editedProduct.name}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  name="description"
                  value={editedProduct.description}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full border h-64 border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-5 w-full">
            <button
              type="button"
              className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-200"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
            >
              Save Changes
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ManageProducts;
