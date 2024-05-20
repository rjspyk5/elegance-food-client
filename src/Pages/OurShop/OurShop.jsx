import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Cover } from "../Home/Shared/Cover";
import bg from "../../assets/shop/banner2.jpg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMenu } from "./../../Hooks/useMenu";
import { FoodCard } from "../../Component/FoodCard";
export const OurShop = () => {
  const { category } = useParams();
  const [tabindex, settabindex] = useState(1);

  const [menu] = useMenu();

  const drinks = menu.filter((e) => e.category === "drinks");
  const soup = menu.filter((e) => e.category === "soup");
  const salad = menu.filter((e) => e.category === "salad");
  const pizza = menu.filter((e) => e.category === "pizza");

  return (
    <div>
      <Cover title={`Order Food`} im={bg} />
      <Tabs defaultIndex={tabindex} onSelect={(index) => settabindex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Drink</Tab>
        </TabList>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {salad.map((el) => (
              <FoodCard key={el._id} item={el} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          {pizza.map((el) => (
            <FoodCard key={el._id} item={el} />
          ))}
        </TabPanel>
        <TabPanel>
          {soup.map((el) => (
            <FoodCard key={el._id} item={el} />
          ))}
        </TabPanel>
        <TabPanel>
          {drinks.map((el) => (
            <FoodCard key={el._id} item={el} />
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};
