import React from "react";
import { MenuIteam } from "../Home/Shared/MenuIteam";
import { Cover } from "../Home/Shared/Cover";
import { Link } from "react-router-dom";

export const MenuCategory = ({ item, im, title }) => {
  return (
    <div>
      {title && <Cover im={im} title={title} />}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {item.map((el) => (
          <MenuIteam key={el._id} menu={el} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          to={`/shop/${title}`}
          className="my-14  border-b-2  border-black rounded-b"
        >
          Order Now
        </Link>
      </div>
    </div>
  );
};
