import React from "react";

export const Admin = () => {
  return (
    <div className="pt-20">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a>Admin Home</a>
            </li>
            <li>
              <a>Add Items</a>
            </li>
            <li>
              <a>Manage Items</a>
            </li>
            <li>
              <a>Manage Bookings</a>
            </li>
            <li>
              <a>All Users</a>
            </li>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Menu</a>
            </li>
            <li>
              <a>Shop</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
