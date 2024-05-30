import axios from "axios";
import { useForm } from "react-hook-form";
import { useAxiosSequre } from "../../Hooks/useAxiosSequre";
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";

export const EditItem = () => {
  const axiosSequre = useAxiosSequre();
  const navigate = useNavigate();
  const { data } = useLoaderData();
  const url = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMG_API
  }`;

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (dataum) => {
    if (dataum.image.length === 0) {
      dataum.image = data.image;
    } else {
      const imageFile = { image: dataum.image[0] };
      const res = await axios.post(url, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      const image = res.data.data.display_url;
      dataum.image = image;
    }
    const result = await axiosSequre.patch(`/menu/${data._id}`, dataum);
    if (result.data.acknowledged) {
      alert("Successfully Update");
      navigate("/dashboard/manageItem");
    }
  };
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-center mb-10">Add Iteam</h1>
        <form className="bg-[#F3F3F3] p-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe name*</span>
            </label>
            <input
              defaultValue={data.name}
              type="text"
              {...register("name", { required: true })}
              placeholder="Recipe name"
              className="input input-bordered"
            />
            {errors.name && <span>This field is required</span>}
          </div>
          <div className="flex gap-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>

              <select
                defaultValue={data.category}
                {...register("category")}
                className="select select-bordered w-full "
              >
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="drink">Drink</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                defaultValue={data.price}
                type="number"
                {...register("price")}
                placeholder="Price"
                className="input input-bordered"
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details*</span>
            </label>
            <textarea
              defaultValue={data.recipe}
              className="input-bordered input min-h-36 "
              {...register("recipe", { required: true })}
            ></textarea>
            {errors.name && <span>This field is required</span>}
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="file"
              {...register("image")}
              className="file-input file-input-bordered w-full"
            />
          </div>
          <div className="flex justify-center">
            <input
              className="bg-gradient-to-r  btn mt-6 text-white from-[#835D23] to-[#B58130]"
              type="submit"
              value="Update Recipe Details"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
