import { Helmet } from "react-helmet-async";
import bg from "../../assets/menu/banner3.jpg";
import { Cover } from "../Home/Shared/Cover";

export const OurMenu = () => {
  return (
    <div>
      <Helmet>
        <title>Elegance | menu</title>
      </Helmet>
      <Cover im={bg} title="OUR MENU" />
    </div>
  );
};
