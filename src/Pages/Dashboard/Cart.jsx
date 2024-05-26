import { useCart } from "../../Hooks/useCart";
import { CartItem } from "../../Component/CartItem";

export const Cart = () => {
  const [cart] = useCart();
  const total = cart.reduce((acc, current) => acc + current.price, 0);
  console.log();

  return (
    <div>
      <div className="py-10 flex justify-around">
        <h2 className="text-2xl font-bold">Items : {cart.length}</h2>
        <h2 className="text-2xl font-bold">Total : ${Math.ceil(total)}</h2>
        <button className="btn ">Pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((el, idx) => (
              <CartItem key={el._id} item={el} idx={idx} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
