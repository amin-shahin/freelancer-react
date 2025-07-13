import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";

export function useRemoveProject() {
  const queryClient = useQueryClient();
  const { mutateAsync: deleteProject, isPending: isDeletingProject } = useMutation({
    mutationFn: deleteProjectApi,
    mutationKey: ["owner-projects"],
    retry:false,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({queryKey:["owner-projects"]});
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { deleteProject, isDeletingProject };
}
