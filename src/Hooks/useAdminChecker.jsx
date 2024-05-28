import { useQuery } from "@tanstack/react-query";

import { useAuth } from "./useAuth";
import { useAxiosSequre } from "./useAxiosSequre";

export const useAdminChecker = () => {
  const { user } = useAuth();
  const axiosSequre = useAxiosSequre();
  const { data: isAdmin } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      const result = await axiosSequre.get(`/user/admin/${user.email}`);
      return result.data;
    },
  });
  return [isAdmin];
};
