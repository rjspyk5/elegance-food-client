import axios from "axios";
import { useForm } from "react-hook-form";

export const AddItem = () => {
  const url = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMG_API
  }`;
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axios.post(url, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const image = res.data.data.display_url;
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-10">Add Iteam</h1>
      <form className="bg-[#F3F3F3] p-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe name*</span>
          </label>
          <input
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
              <span className="label-text">Price*</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Price"
              className="input input-bordered"
            />
            {errors.price && <span>This field is required</span>}
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe Details*</span>
          </label>
          <textarea
            className="input-bordered input min-h-36 "
            {...register("recipe", { required: true })}
          ></textarea>
          {errors.name && <span>This field is required</span>}
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Image*</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full"
          />
          {errors.image && <span>This field is required</span>}
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
  );
};
