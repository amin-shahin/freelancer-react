import { useQuery } from "@tanstack/react-query";
import { userInformation } from "../../services/authService";

function useUser() {
  const { data, isLoading } = useQuery({
    queryKey: ["get-user"],
    queryFn: userInformation,
    refetchOnReconnect: true,
    retry: false,
  });
  const { user } = data || {};
  return { user, isLoading };
}

export default useUser;
