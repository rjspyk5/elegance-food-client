import { Link } from "react-router-dom";
import bg from "../assets/others/authentication.png";
import im from "../assets/others/authentication2.png";

export const Registration = () => {
  return (
    <div>
      <div style={{ backgroundImage: `url(${bg})` }}>
        <div className="hero min-h-screen ">
          <div className="hero-content shadow-2xl mt-10 rounded-lg grid grid-cols-1 md:grid-cols-2">
            <div className="text-center order-2 lg:text-left">
              <img src={im} alt="" />
            </div>
            <div className="card shrink-0 w-full max-w-sm  ">
              <form className="card-body">
                <h1 className="text-3xl font-bold text-center">Sign Up</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <button className="btn bg-[#D1A054] text-white">Login</button>
                </div>
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
