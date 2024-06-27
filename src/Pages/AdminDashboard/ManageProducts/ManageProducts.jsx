import React, { useState } from "react";
import useProducts from "../../../Hooks/useProducts";
import { Card, Typography } from "@material-tailwind/react";
import LoadingSpinner from "../../../Hooks/Loading/LoadingSpinner";
import Modal from "react-modal";
import Swal from "sweetalert2";

const ManageProducts = () => {
  const { products, isLoading, refetch } = useProducts();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editedProduct, setEditedProduct] = useState({
    name: "",
    price: "",
    description: "",
    imageUrl: ""
  });

  const TABLE_HEAD = [" ", "Name", "Price", "Description", "Action"];
  console.log(products);

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

  const handleSave = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const imageUrl = form.imageUrl.value;
    const description = form.description.value;
    const update = {
      name,
      price,
      imageUrl,
      description
    };
    console.log(update);

    try {
      const response = await fetch(`http://localhost:3000/products/${selectedProduct._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(update)
      });

      if (response.ok) {
        const updatedProduct = await response.json();
        if(updatedProduct){
          refetch(); // Refresh the product list after update
        Swal.fire("Updated!", "The product has been Updated.", "success");
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
    console.log(id);
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
        fetch(`http://localhost:3000/products/${id}`, {
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
              Swal.fire("Deleted!", "The product has been deleted.", "success");
            } else {
              Swal.fire("Error", "Failed to delete the product.", "error");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            Swal.fire("Error", "An error occurred while deleting the product.", "error");
          });
      }
    });
  };

  return (
    <Card className="h-full w-full">
      <h1 className="text-center text-primary font-bold text-2xl py-5">
        All Products
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
            {products.map((product, index) => (
              <tr key={index} className="even:bg-blue-gray-50/50">
                <td className="p-2 md:p-4">
                  <div className="avatar">
                    <div className="w-20 rounded">
                      <img
                        src={product.imageUrl}
                        alt="Product"
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
                    {product.name}
                  </Typography>
                </td>
                <td className="p-2 md:p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-xs md:text-base"
                  >
                    {product.price}
                  </Typography>
                </td>
                <td className="p-2 md:p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-xs md:text-base"
                  >
                    {product.description.slice(0, 50)}
                  </Typography>
                </td>
                <td className="p-2 flex gap-5 md:p-4 text-black">
                  <button className="btn-error" onClick={() => openModal(product)}>Edit</button>
                  <button className="btn-warning" onClick={() => handleDelete(product._id)}>Delete</button>
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
        className="modal w-1/2 mx-auto md:mt-32 mt-16 bg-blue-50 border rounded-lg p-10 shadow-2xl"
      >
        <h2 className="text-xl mb-4 text-center font-semibold">Edit Product</h2>
        <form onSubmit={handleSave}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              name="imageUrl"
              value={editedProduct.imageUrl}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
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
              Price
            </label>
            <input
              type="text"
              name="price"
              value={editedProduct.price}
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
              className="mt-1 p-2 block w-full border h-32 border-gray-300 rounded-md"
            ></textarea>
          </div>
          <div className="flex justify-end gap-5">
            <button
              type="button"
              className="btn-warning"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-Secondary"
            >
              Save Changes
            </button>
          </div>
        </form>
      </Modal>
    </Card>
  );
};

export default ManageProducts;
