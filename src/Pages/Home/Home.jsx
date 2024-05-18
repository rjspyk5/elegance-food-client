import React from "react";
import { Carasoul } from "./Carasoul";
import { MenuCarasoul } from "./MenuCarasoul/MenuCarasoul";
import { ChefService } from "./ChefService";

export const Home = () => {
  return (
    <div>
      <Carasoul />
      <MenuCarasoul />
      <ChefService />
    </div>
  );
};
