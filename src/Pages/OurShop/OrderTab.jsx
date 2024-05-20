import { FoodCard } from "../../Component/FoodCard";

export const OrderTab = ({ iteam }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {iteam.map((el) => (
          <FoodCard key={el._id} item={el} />
        ))}
      </div>
    </div>
  );
};
