import { useQuery } from "@tanstack/react-query";
import { getAllOwnerProjects } from "../../services/projectService";

export function useOwnerProject() {
  const { data, isLoading } = useQuery({
    queryFn: getAllOwnerProjects,
    queryKey: ["owner-projects"],
    refetchOnReconnect: true,
  });

  const { projects } = data || {};

  return { projects, isLoading };
}
