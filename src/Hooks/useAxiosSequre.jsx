import axios from "axios";

const axiosSequre = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

export const useAxiosSequre = () => {
  return axiosSequre;
};
