import { useQuery } from "@tanstack/react-query";
import { userInformation } from "../../services/authService";

function useUser() {
 return useQuery({
    queryKey: ["get-user"],
    queryFn: userInformation,
    refetchOnReconnect: true,
  });

   
}

export default useUser;
