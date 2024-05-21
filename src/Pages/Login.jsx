import { Link } from "react-router-dom";
import bg from "../assets/others/authentication.png";
import im from "../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useRef, useState } from "react";

export const Login = () => {
  const capthcha = useRef(null);
  const [isDisable, setisDisable] = useState(true);

  // Captcha generator
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleValidate = () => {
    if (validateCaptcha(capthcha.current.value) == true) {
      setisDisable(false);
    } else {
      setisDisable(true);
    }
  };
  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <div className="hero min-h-screen ">
        <div className="hero-content shadow-2xl mt-10 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="text-center lg:text-left">
            <img src={im} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm  ">
            <form className="card-body bg-white">
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
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
              </div>
              <div className="form-control">
                <input
                  ref={capthcha}
                  type="text"
                  placeholder="Type Here"
                  className="input input-bordered"
                  required
                />
              </div>
              <button onClick={handleValidate} className="btn btn-xs">
                Validate
              </button>
              <div className="form-control mt-6">
                <button
                  disabled={isDisable}
                  className="btn bg-[#D1A054] text-white"
                >
                  Login
                </button>
              </div>
            </form>
            <h1 className="text-center text-[#D1A054]">
              New here?{" "}
              <Link to="/reg" className="cursor-pointer font-bold">
                Create An Account
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
