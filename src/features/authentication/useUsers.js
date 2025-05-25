import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../services/authService";

function useUsers() {
  const { data, isLoading } = useQuery({
    queryKey: ["all-users"],
    queryFn: getAllUsers,
    refetchOnReconnect: true,
    retry: false,
  });
  const { users} = data || {};
  return { users, isLoading };
}

export default useUsers;
