import { useQuery } from "@tanstack/react-query";
import { getAllProjects } from "../../services/projectService";
import { useLocation } from "react-router";
import queryString from "query-string";

export function useProjects() {
  const { search } = useLocation();
  const queryStringParse = queryString.parse(search);
  const { data, isLoading } = useQuery({
    queryFn: () => getAllProjects(search),
    queryKey: ["all-projects", queryStringParse],
    refetchOnReconnect: true,
    retry: false,
  });

  const { projects } = data || {};

  return { projects, isLoading };
}
