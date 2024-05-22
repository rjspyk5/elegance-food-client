import { HeadingSection } from "./Shared/HeadingSection";
import { MenuIteam } from "./Shared/MenuIteam";
import { useMenu } from "../../Hooks/useMenu";

export const HomeMenu = () => {
  const [menu] = useMenu();
  const popularmenu = menu.filter((e) => e.category === "popular");

  return (
    <div>
      <HeadingSection heading="FROM OUR MENU" subheading="---Check it out---" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {popularmenu.map((el) => (
          <MenuIteam key={el._id} menu={el} />
        ))}
      </div>
    </div>
  );
};
