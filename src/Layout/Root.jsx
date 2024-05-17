import { Outlet } from "react-router-dom";
import { Footer } from "../Pages/Home/Shared/Footer";

export const Root = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};
