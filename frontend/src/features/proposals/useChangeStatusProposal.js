import { useMutation } from "@tanstack/react-query";
import { changeStatusProposalApi } from "../../services/proposalServices";
import toast from "react-hot-toast";

export function useChangeStatusProposal() {
  const { isPending: isChangeLoading, mutateAsync: changeStatusProposal } =
    useMutation({
      mutationFn: changeStatusProposalApi,
      retry: false,
      onSuccess: (data) => {
        toast.success(data?.message);
      },
      onError: (err) => {
        toast.error(err?.response?.data?.message);
      },
    });

  return { isChangeLoading, changeStatusProposal };
}
