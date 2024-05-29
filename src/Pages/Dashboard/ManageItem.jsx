import React from "react";
import { useMenu } from "../../Hooks/useMenu";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const ManageItem = () => {
  const [menu, loading] = useMenu();
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-2xl font-bold">Total Items :{menu.length} </h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-yellow-600 text-white ">
            <tr>
              <th></th>
              <th>Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((el, idx) => {
              return (
                <tr key={el._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={el.image} alt="item image" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{el.name}</td>
                  <td>{el.price}</td>
                  <th>
                    <button
                      onClick={() => navigate(`/dashboard/edititem/${el._id}`)}
                      className="btn btn-ghost btn-xs"
                    >
                      <FaEdit />
                    </button>
                  </th>
                  <th>
                    <button className="btn btn-ghost btn-xs">
                      <FaTrash />
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
