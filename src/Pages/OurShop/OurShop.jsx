import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Cover } from "../Home/Shared/Cover";
import bg from "../../assets/shop/banner2.jpg";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useMenu } from "./../../Hooks/useMenu";

import { OrderTab } from "./OrderTab";
export const OurShop = () => {
  const categories = ["salad", "Pizza", "Soup", "DESSERTS"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabindex, settabindex] = useState(initialIndex);

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
          <OrderTab iteam={salad} />
        </TabPanel>
        <TabPanel>
          <OrderTab iteam={pizza} />
        </TabPanel>
        <TabPanel>
          <OrderTab iteam={soup} />
        </TabPanel>
        <TabPanel>
          <OrderTab iteam={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};
