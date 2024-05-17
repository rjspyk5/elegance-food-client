import { createBrowserRouter } from "react-router-dom";
import { Root } from "../Layout/Root";
import { Home } from "../Pages/Home/Home";

export const Routing = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
