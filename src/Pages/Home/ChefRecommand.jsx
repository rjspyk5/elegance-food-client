import React from "react";
import { HeadingSection } from "./Shared/HeadingSection";
import salad from "../../assets/menu/salad-bg.jpg";

export const ChefRecommand = () => {
  return (
    <div>
      <HeadingSection heading="CHEF RECOMMENDS" subheading="---Should Try---" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 my-20">
        <div className="bg-base-200">
          <img className="w-full h-56" src={salad} alt="" />
          <div className="text-center">
            <p className="font-bold text-lg">Caeser Salad</p>
            <p className="w-3/5 mx-auto">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
        <div className="bg-base-200">
          <img className="w-full h-56" src={salad} alt="" />
          <div className="text-center">
            <p className="font-bold text-lg">Caeser Salad</p>
            <p className="w-3/5 mx-auto">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
        <div className="bg-base-200">
          <img className="w-full h-56" src={salad} alt="" />
          <div className="text-center">
            <p className="font-bold text-lg">Caeser Salad</p>
            <p className="w-3/5 mx-auto">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
