import { FaGoogle } from "react-icons/fa6";
import { useAuth } from "../Hooks/useAuth";
import { useAxiosPublic } from "../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

export const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const handleGoogleSignIn = () => {
    googleLogin().then((res) => {
      const name = res.user?.displayName;
      const email = res.user?.email;
      axiosPublic.post("/user", { name, email }).then((res) => {
        console.log(res);
        navigate("/");
      });
    });
  };
  return (
    <button onClick={handleGoogleSignIn} className="btn">
      <FaGoogle />
    </button>
  );
};
