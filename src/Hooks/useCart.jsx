import { useQuery } from "@tanstack/react-query";
import { useAxiosSequre } from "./useAxiosSequre";
import { useAuth } from "./useAuth";

export const useCart = () => {
  const { user } = useAuth();
  const axiosSequre = useAxiosSequre();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSequre.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};
