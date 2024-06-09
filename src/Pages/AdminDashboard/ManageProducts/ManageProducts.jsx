import React from "react";
import useProducts from "../../../Hooks/useProducts";
import { Card, Typography } from "@material-tailwind/react";
import AdminSpinner from "../../../Hooks/Loading/AdminSpinner";

const ManageProducts = () => {
  const [products, isLoading] = useProducts();
  const TABLE_HEAD = [" ", "Name", "Price", "Description", "Action"];
  console.log(products);

  if(isLoading){
    return <AdminSpinner/>
  }

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
            {products.map(({ name, price, description, imageUrl }, index) => (
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
                    {name}
                  </Typography>
                </td>
                <td className="p-2 md:p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-xs md:text-base"
                  >
                    {price}
                  </Typography>
                </td>
                <td className="p-2 md:p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-xs md:text-base"
                  >
                    {description.slice(0, 50)}
                  </Typography>
                </td>
                <td className="p-2 flex gap-5 md:p-4 text-black">
                  <button className="btn bg-orange-400 p-2">Edit</button>
                  <button className="btn bg-red-400 p-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default ManageProducts;
