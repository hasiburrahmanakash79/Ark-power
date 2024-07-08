import React from "react";
import { FaUps, FaUsers, FaLeanpub, FaHandshake} from "react-icons/fa6";
import useProducts from "../../../Hooks/useProducts";
import useNewsAndEvents from "../../../Hooks/useNewsAndEvents";
import useSubscriber from "../../../Hooks/useSubscriber";
import useUsers from "../../../Hooks/useUsers";

const AdminHome = () => {
  const { products } = useProducts();
  const { newsAndEvents } = useNewsAndEvents();
  const { subscribers } = useSubscriber();
  const { users } = useUsers();
  return (
    <div className="p-10">
      <div className="">
        <div className="">
          <img
            src="https://i.ibb.co/61nBkFS/ARK-power-ltd-main.png"
            alt=""
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-5 mt-14">
                <div className="bg-white border p-5 space-y-4 shadow-lg">
                    <FaUps className=" text-2xl"/>
                    <h1 className="text-xl font-semibold">Product</h1>
                    <div className="flex justify-between">
                    <p className="text-xs">Total products</p>
                    <p className="text-green-500 text-xs text-end">{products.length}</p>
                    </div>
                </div>
                <div className="bg-white border p-5 space-y-4 shadow-lg">
                    <FaUsers className=" text-2xl"/>
                    <h1 className="text-xl font-semibold">Users</h1>
                    <div className="flex justify-between">
                    <p className="text-xs">Total User</p>
                    <p className="text-green-500 text-xs text-end">{users.length}</p>
                    </div>
                </div>
                <div className="bg-white border p-5 space-y-4 shadow-lg">
                    <FaLeanpub className=" text-2xl"/>
                    <h1 className="text-xl font-semibold">News</h1>
                    <div className="flex justify-between">
                    <p className="text-xs">Total News</p>
                    <p className="text-green-500 text-xs text-end">{newsAndEvents.length}</p>
                    </div>
                </div>
                <div className="bg-white border p-5 space-y-4 shadow-lg">
                    <FaHandshake className=" text-2xl"/>
                    <h1 className="text-xl font-semibold">Subscriber</h1>
                    <div className="flex justify-between">
                    <p className="text-xs">Total Subscriber</p>
                    <p className="text-green-500 text-xs text-end">{subscribers.length}</p>
                    </div>
                </div>
            </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
