import React, { useEffect, useLayoutEffect, useState } from "react";
import { HeadingSection } from "./Shared/HeadingSection";
import { MenuIteam } from "./Shared/MenuIteam";

export const HomeMenu = () => {
  const [menu, setmenu] = useState([]);
  useLayoutEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((res) => {
        const popularMenu = res.filter((el) => el.category === "popular");
        setmenu(popularMenu);
      });
  }, []);
  console.log(menu);
  return (
    <div>
      <HeadingSection heading="FROM OUR MENU" subheading="---Check it out---" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {menu.map((el) => (
          <MenuIteam key={el._id} menu={el} />
        ))}
      </div>
    </div>
  );
};
