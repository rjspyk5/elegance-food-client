import { Link, useNavigate } from "react-router-dom";
import bg from "../assets/others/authentication.png";
import im from "../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import { useAuth } from "./../Hooks/useAuth";
import { GoogleLogin } from "../Component/GoogleLogin";
import Swal from "sweetalert2";
import { useAxiosPublic } from "../Hooks/useAxiosPublic";
export const Registration = () => {
  const { createUser, updateUser, logOut } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(() => {
        updateUser(data?.name)
          .then(() => {
            // userinfo set on database
            axiosPublic
              .post("/user", { name: data.name, email: data.email })
              .then((res) => {
                if (res.data.insertedId) {
                  console.log("user added to the database");
                  Swal.fire({
                    text: "Registration Successfully and now you can login",
                    icon: "success",
                  });
                  reset();
                  logOut().then(() => navigate("/login"));
                }
              });
          })
          .catch((er) => alert(er));
      })
      .catch((er) => console.log(er));
  };

  return (
    <div>
      <div style={{ backgroundImage: `url(${bg})` }}>
        <div className="hero min-h-screen ">
          <div className="hero-content shadow-2xl mt-10 rounded-lg grid grid-cols-1 md:grid-cols-2">
            <div className="text-center order-2 lg:text-left">
              <img src={im} alt="" />
            </div>
            <div className="card shrink-0 w-full max-w-sm  ">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <h1 className="text-3xl font-bold text-center">Sign Up</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    {...register("name")}
                    aria-invalid={errors.name ? "true" : "false"}
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      pattern: /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)$/,
                    })}
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  {errors.password?.type === "required" && (
                    <span className="text-red-500">This field is required</span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-500">
                      Minimum length has to be 6
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="text-red-500">
                      Minimum one uppercase one lowercase and special char
                    </span>
                  )}
                </div>

                <div className="form-control mt-6">
                  <button className="btn bg-[#D1A054] text-white">Login</button>
                </div>
                <GoogleLogin />
              </form>
              <h1 className="text-center text-[#D1A054]">
                Already Have An Account?{" "}
                <Link to="/login" className="cursor-pointer font-bold">
                  Login Now
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
