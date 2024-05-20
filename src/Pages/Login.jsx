import bg from "../assets/others/authentication.png";
import im from "../assets/others/authentication2.png";

export const Login = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <div className="hero min-h-screen ">
        <div className="hero-content shadow-2xl mt-10 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="text-center lg:text-left">
            <img src={im} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm  ">
            <form className="card-body">
              <h1 className="text-3xl font-bold text-center">Login</h1>
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
              <div className="form-control">
                <input
                  type="text"
                  placeholder="captha"
                  className="input input-bordered"
                />
                <label className="label">
                  <span className="label-text text-blue-500">
                    Reload captcha
                  </span>
                </label>
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Type Here"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#D1A054] text-white">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
