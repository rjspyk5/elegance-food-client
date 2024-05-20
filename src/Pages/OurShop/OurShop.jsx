import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Cover } from "../Home/Shared/Cover";
import bg from "../../assets/shop/banner2.jpg";
import { useParams } from "react-router-dom";
import { useState } from "react";
export const OurShop = () => {
  const { category } = useParams();
  const [tabindex, settabindex] = useState(1);
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
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};
