import { useQuery } from "@tanstack/react-query";
import { getAllProposalApi } from "../../services/proposalServices";

export default function useProposals() {
  const { data, isLoading } = useQuery({
    queryFn: getAllProposalApi,
    queryKey: ["proposals"],
    refetchOnReconnect: true,
    retry: false,
  });

  const { proposals } = data || {};

  return { proposals, isLoading };
}
