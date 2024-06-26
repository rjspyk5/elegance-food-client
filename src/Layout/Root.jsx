import { Outlet } from "react-router-dom";
import { Footer } from "../Pages/Home/Shared/Footer";
import { Navbar } from "./../Pages/Home/Shared/Navbar";

export const Root = () => {
  return (
    <div>
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};
