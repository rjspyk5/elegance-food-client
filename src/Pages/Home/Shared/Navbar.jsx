import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const menu = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-lime-500 focus:text-lime-500 uppercase font-bold"
              : "uppercase font-bold text-white"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-lime-500 focus:text-lime-500 uppercase font-bold"
              : "uppercase font-bold text-white"
          }
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-lime-500 focus:text-lime-500 uppercase font-bold"
              : "uppercase font-bold text-white"
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive
              ? "text-lime-500 focus:text-lime-500 uppercase font-bold"
              : "uppercase font-bold text-white"
          }
        >
          Our menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive
              ? "text-lime-500 focus:text-lime-500 uppercase font-bold"
              : "uppercase font-bold text-white"
          }
        >
          Our shop
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-black bg-opacity-30 fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>

          <Link className=" font-bold text-2xl bg-gradient-to-r from-[white]  to-[#888787] inline-block text-transparent bg-clip-text">
            ElegacneFood
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-md btn-ghost text-white font-bold text-lg">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};