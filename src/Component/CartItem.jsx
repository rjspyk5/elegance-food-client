import { useAxiosSequre } from "../Hooks/useAxiosSequre";
import { useCart } from "../Hooks/useCart";

export const CartItem = ({ item: { image, name, price, _id } }) => {
  const [, refetch] = useCart();
  const axiosSequre = useAxiosSequre();
  const handleDelete = () => {
    axiosSequre
      .delete(`/carts/${_id}`)
      .then(() => {
        refetch();
      })
      .catch((er) => console.log(er));
  };
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>
        <div>
          <div className="font-bold">{name}</div>
        </div>
      </td>
      <td>{price}</td>
      <td>
        <button
          onClick={handleDelete}
          className="btn btn-ghost bg-red-500 text-white btn-xs"
        >
          Delete From Cart
        </button>
      </td>
    </tr>
  );
};
