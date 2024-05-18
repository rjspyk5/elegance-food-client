import React from "react";

export const MenuIteam = ({ menu: { name, image, price, recipe } }) => {
  return (
    <div className="flex space-x-4">
      <img className="w-20 rounded-b-full rounded-tr-full" src={image} alt="" />
      <div>
        <h3>{name}........</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-300">${price}</p>
    </div>
  );
};
