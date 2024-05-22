import { Link, useNavigate } from "react-router-dom";
import bg from "../assets/others/authentication.png";
import im from "../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../Hooks/useAuth";

export const Login = () => {
  const capthcha = useRef(null);
  const [isDisable, setisDisable] = useState(true);
  const { logIn } = useAuth();
  const navigate = useNavigate();

  // Captcha generator
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.pass.value;

    logIn(email, pass)
      .then(() => navigate("/"))
      .catch((er) => alert(er));
  };

  const handleValidate = (e) => {
    if (validateCaptcha(e.target.value) == true) {
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
            <form onSubmit={handleLogin} className="card-body bg-white">
              <h1 className="text-3xl font-bold text-center">Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>

                <input
                  name="email"
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
                  name="pass"
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
                  onBlur={handleValidate}
                  name="captacha"
                  type="text"
                  placeholder="Type Here"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control mt-6">
                <button
                  disabled={isDisable}
                  type="submit"
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
