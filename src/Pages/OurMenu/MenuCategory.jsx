import React from "react";
import { MenuIteam } from "../Home/Shared/MenuIteam";

export const MenuCategory = ({ item }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {item.map((el) => (
          <MenuIteam key={el._id} menu={el} />
        ))}
      </div>
    </div>
  );
};
