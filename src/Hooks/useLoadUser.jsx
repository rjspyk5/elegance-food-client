import { useQuery } from "@tanstack/react-query";
import { useAxiosSequre } from "./useAxiosSequre";

export const useLoadUser = () => {
  const axiosSequre = useAxiosSequre();

  const {
    loading,
    refetch,
    data: user = [],
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSequre.get(`/user`);
      return res.data;
    },
  });
  return { loading, refetch, user };
};
