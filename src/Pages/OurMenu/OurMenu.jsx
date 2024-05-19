import { Helmet } from "react-helmet-async";
import bg from "../../assets/menu/banner3.jpg";
import { Cover } from "../Home/Shared/Cover";
import { useMenu } from "./../../Hooks/useMenu";
import { HeadingSection } from "../Home/Shared/HeadingSection";
import { MenuCategory } from "./MenuCategory";

export const OurMenu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((e) => e.category === "dessert");
  const soup = menu.filter((e) => e.category === "soup");
  const salad = menu.filter((e) => e.category === "salad");
  const pizza = menu.filter((e) => e.category === "pizza");
  const offered = menu.filter((e) => e.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Elegance | menu</title>
      </Helmet>
      <Cover im={bg} title="OUR MENU" />
      <HeadingSection heading="From Our Menu" subheading="Popular Items" />
      <MenuCategory item={offered} />
    </div>
  );
};
