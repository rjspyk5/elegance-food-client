import React from "react";
import { useAuth } from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const FoodCard = ({ item }) => {
  const { name, price, image, recipe } = item;
  const navigate = useNavigate();
  const { user } = useAuth();
  const handleAddCart = () => {
    if (user && user.email) {
      console.log(item);
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="relative">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">{name}</h2>
          <p>{recipe}</p>
          <div className="flex justify-center">
            <button onClick={handleAddCart} className="btn btn-primary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <p className="absolute right-7 top-3 px-5 py-1 text-white bg-black">
        ${price}
      </p>
    </div>
  );
};
