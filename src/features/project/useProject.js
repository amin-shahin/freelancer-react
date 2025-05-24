import { useQuery } from "@tanstack/react-query";
import { getProjectByIdApi } from "../../services/projectService";
import { useParams } from "react-router";

export default function useProject() {
  const { projectId } = useParams();
  const { data, isLoading } = useQuery({
    queryFn: () => getProjectByIdApi(projectId),
    queryKey: ["project", projectId],
    retry: false,
  });

  const { project } = data || {};

  return { project, isLoading };
}
