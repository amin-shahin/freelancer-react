import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { logoutApi } from "../../services/authService";
import { useNavigate } from "react-router";

export default function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutateAsync: logout, isPending } = useMutation({
    mutationFn: logoutApi,
    retry: false,
    onSuccess: (data) => {
      queryClient.removeQueries();
      navigate("/");
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { logout, isPending };
}
