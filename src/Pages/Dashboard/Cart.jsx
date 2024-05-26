import { useCart } from "../../Hooks/useCart";
import { CartItem } from "../../Component/CartItem";

export const Cart = () => {
  const [cart] = useCart();

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((el) => (
              <CartItem key={el._id} item={el} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
