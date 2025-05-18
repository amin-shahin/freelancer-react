import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";

export default function useCreateProjectForm() {
  const queryClient = useQueryClient();

  const { mutateAsync: createProject, isPending: isCreatingLoading } =
    useMutation({
      mutationFn: createProjectApi,
      mutationKey: ["owner-projects"],
      retry: false,
      onSuccess: (data) => {
        const { message } = data;
        toast.success(message);
        queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
      },
      onError: (err) => {
        toast.error(err?.response?.data?.message);
      },
    });

  return { createProject, isCreatingLoading };
}
