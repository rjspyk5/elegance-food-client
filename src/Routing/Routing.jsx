import { createBrowserRouter } from "react-router-dom";
import { Root } from "../Layout/Root";
import { Home } from "../Pages/Home/Home";
import { OurMenu } from "../Pages/OurMenu/OurMenu";
import { OurShop } from "../Pages/OurShop/OurShop";
import { Login } from "../Pages/Login";
import { Registration } from "../Pages/Registration";
import { ContactUs } from "../Pages/ContactUs";
import { Cart } from "../Pages/Cart";
import { Admin } from "../Pages/Admin";

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
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
]);
