import { Carasoul } from "./Carasoul";
import { MenuCarasoul } from "./MenuCarasoul/MenuCarasoul";
import { ChefService } from "./ChefService";
import { HomeMenu } from "./HomeMenu";
import { ChefRecommand } from "./ChefRecommand";
import { Featured } from "./Featured";
import { Helmet } from "react-helmet-async";

export const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Elegance | Home</title>
      </Helmet>
      <Carasoul />
      <MenuCarasoul />
      <ChefService />
      <HomeMenu />
      <div className="p-20 my-14 bg-black text-center text-white">
        <h1 className="font-bold text-3xl">CAll US 01684883865</h1>
      </div>
      <ChefRecommand />
      <Featured />
    </div>
  );
};
