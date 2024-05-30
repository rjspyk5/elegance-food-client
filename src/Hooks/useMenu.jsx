import { useQuery } from "@tanstack/react-query";
import { useAxiosPublic } from "./useAxiosPublic";

export const useMenu = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data = [],
    refetch,
    isLoading: loading,
  } = useQuery({
    queryKey: ["menus"],
    queryFn: async () => {
      const res = await axiosPublic.get("/menu");
      return res.data;
    },
  });
  return [data, loading, refetch];
};
