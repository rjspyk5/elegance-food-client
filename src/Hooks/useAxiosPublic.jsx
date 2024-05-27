import axios from "axios";

const axiossequre = axios.create({ baseURL: "http://localhost:5000" });
export const useAxiosPublic = () => {
  return axiossequre;
};
