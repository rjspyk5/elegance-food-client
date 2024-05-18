import React, { useEffect } from "react";
import { HeadingSection } from "./Shared/HeadingSection";

export const HomeMenu = () => {
  return (
    <div>
      <HeadingSection heading="FROM OUR MENU" subheading="---Check it out---" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
    </div>
  );
};
