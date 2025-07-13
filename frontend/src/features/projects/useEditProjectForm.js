import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";

export default function useEditProjectForm() {
  const queryClient = useQueryClient();

  const { mutateAsync: editProject, isPending: isEditingLoading } = useMutation(
    {
      mutationFn: editProjectApi,
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
    }
  );

  return { editProject, isEditingLoading };
}
