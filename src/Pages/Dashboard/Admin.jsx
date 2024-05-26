import { FaHome, FaShoppingCart } from "react-icons/fa";
import { FaAddressBook, FaCalendar, FaList } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
export const Admin = () => {
  return (
    <div className="flex">
      <div className="w-[20%] min-h-screen bg-yellow-500">
        <ul className="w-full">
          <li className="w-full">
            <NavLink
              to="/dashboard/userHome"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-blue-300 flex items-center gap-3"
                  : " gap-3 flex items-center"
              }
            >
              <FaHome />
              UserHome
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              to="/dashboard/reservation"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-blue-300 flex items-center gap-3"
                  : " gap-3 flex items-center"
              }
            >
              <FaCalendar />
              Reservation
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              to="/dashboard/review"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-blue-300 flex items-center gap-3"
                  : " gap-3 flex items-center"
              }
            >
              <FaAddressBook />
              Add a review
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              to="/dashboard/bookings"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-blue-300 flex items-center gap-3"
                  : " gap-3 flex items-center"
              }
            >
              <FaList />
              My Bookings
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              to="/dashboard/cart"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-blue-300 flex items-center gap-3"
                  : " gap-3 flex items-center"
              }
            >
              <FaShoppingCart />
              MyCart
            </NavLink>
          </li>
          <div className="divider"></div>
          <li className="w-full">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-blue-300 flex items-center gap-3"
                  : " gap-3 flex items-center"
              }
            >
              <FaHome />
              Home
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              to="/shop/salad"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-blue-300 flex items-center gap-3"
                  : " gap-3 flex items-center"
              }
            >
              <FaShoppingCart />
              Menu
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};
