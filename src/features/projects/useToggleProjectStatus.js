import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  editProjectApi,
  toggleProjectStatusApi,
} from "../../services/projectService";
import toast from "react-hot-toast";

export default function useToggleProjectStatus() {
  const queryClient = useQueryClient();

  const { mutateAsync: toggleProjectStatus, isPending: isToggleLoading } =
    useMutation({
      mutationFn: toggleProjectStatusApi,
      mutationKey: ["owner-projects"],
      onSuccess: (data) => {
        const { message } = data;
        toast.success(message);
        queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
      },
      onError: (err) => {
        toast.error(err?.response?.data?.message);
      },
    });

  return { toggleProjectStatus, isToggleLoading };
}
