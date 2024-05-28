import axios from "axios";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSequre = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

export const useAxiosSequre = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status === 401 || error.response.status === 403) {
        logOut().then(() => navigate("/"));
      }
      return Promise.reject(error);
    }
  );
  return axiosSequre;
};
