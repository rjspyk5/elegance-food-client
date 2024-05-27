import { createBrowserRouter } from "react-router-dom";
import { Root } from "../Layout/Root";
import { Home } from "../Pages/Home/Home";
import { OurMenu } from "../Pages/OurMenu/OurMenu";
import { OurShop } from "../Pages/OurShop/OurShop";
import { Login } from "../Pages/Login";
import { Registration } from "../Pages/Registration";
import { ContactUs } from "../Pages/ContactUs";
import { Cart } from "../Pages/Dashboard/Cart";
import { Admin } from "../Pages/Dashboard/Admin";
import { PrivateRoute } from "./../Component/PrivateRoute";
import { AllUser } from "../Pages/Dashboard/AllUser";
import { AdminHome } from "./../Pages/Dashboard/AdminHome";
import { AddItem } from "../Pages/Dashboard/AddItem";
import { ManageItem } from "../Pages/Dashboard/ManageItem";
import { ManageBookings } from "./../Pages/Dashboard/ManageBookings";

export const Routing = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <OurMenu />,
      },
      {
        path: "/shop/:category",
        element: <OurShop />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/reg",
        element: <Registration />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Admin />
      </PrivateRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "users",
        element: <AllUser />,
      },
      {
        path: "adminHome",
        element: <AdminHome />,
      },
      {
        path: "additem",
        element: <AddItem />,
      },
      {
        path: "manageItem",
        element: <ManageItem />,
      },
      {
        path: "ManageBookings",
        element: <ManageBookings />,
      },
    ],
  },
]);
