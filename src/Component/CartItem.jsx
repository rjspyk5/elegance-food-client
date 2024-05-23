export const CartItem = ({ item: { image, name, price } }) => {
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
        {" "}
        <div>
          <div className="font-bold">{name}</div>
        </div>
      </td>
      <td>{price}</td>
      <td>
        <button className="btn btn-ghost bg-red-500 text-white btn-xs">
          Delete From Cart
        </button>
      </td>
    </tr>
  );
};
