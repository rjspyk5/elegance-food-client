import Swal from "sweetalert2";
import { useAuth } from "../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { useAxiosSequre } from "../Hooks/useAxiosSequre";

export const FoodCard = ({ item }) => {
  const location = useLocation();
  const { name, price, image, recipe } = item;
  const axiosSequre = useAxiosSequre();
  const navigate = useNavigate();
  const { user } = useAuth();
  const handleAddCart = () => {
    if (user && user.email) {
      const cartitem = {
        menuId: item._id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSequre
        .post("/carts", cartitem)
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              text: `${name} added to cart successfully`,
              icon: "success",
            });
          }
        })
        .catch((er) => console.log(er));
    } else {
      navigate("/login", { state: { from: location } });
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
