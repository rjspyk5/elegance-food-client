import { FaHome, FaShoppingCart } from "react-icons/fa";
import { FaBook, FaList, FaUser, FaUtensils } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { useAdminChecker } from "../../Hooks/useAdminChecker";
export const Admin = () => {
  // TODO: have to get isAdmin data from database

  const [isAdmin] = useAdminChecker();

  return (
    <div className="flex">
      <div className="w-[20%] min-h-screen bg-yellow-500">
        <ul className="w-full">
          {isAdmin ? (
            <>
              {" "}
              <li className="w-full">
                <NavLink
                  to="/dashboard/adminHome"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-blue-300 flex items-center gap-3"
                      : " gap-3 flex items-center"
                  }
                >
                  <FaHome />
                  AdminHome
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink
                  to="/dashboard/additem"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-blue-300 flex items-center gap-3"
                      : " gap-3 flex items-center"
                  }
                >
                  <FaUtensils />
                  Add Item
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink
                  to="/dashboard/manageItem"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-blue-300 flex items-center gap-3"
                      : " gap-3 flex items-center"
                  }
                >
                  <FaList />
                  Manage Iteam
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink
                  to="/dashboard/manageBookings"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-blue-300 flex items-center gap-3"
                      : " gap-3 flex items-center"
                  }
                >
                  <FaBook />
                  Manage Bookings
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink
                  to="/dashboard/users"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-blue-300 flex items-center gap-3"
                      : " gap-3 flex items-center"
                  }
                >
                  <FaUser />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <></>
          )}
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
