import { useQuery } from "@tanstack/react-query";
import { getAllProposalApi } from "../../services/proposalServices";

export default function useFreelancerProposal() {
  const data = useQuery({
    queryFn: getAllProposalApi,
    // queryKey:['proposals']
  });

  return data;
}
