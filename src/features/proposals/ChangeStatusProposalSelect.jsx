import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFSelect";
import { useChangeStatusProposal } from "./useChangeStatusProposal";
import Loader from "../../ui/Loader";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";

function ChangeStatusProposalSelect({ proposalId, onClose }) {
  const options = [
    { label: "رد", value: 0 },
    { label: "در انتظار تایید", value: 1 },
    { label: "تایید", value: 2 },
  ];


  const { register, handleSubmit } = useForm();
  const { changeStatusProposal, isChangeLoading } = useChangeStatusProposal();


  const {projectId} = useParams()
  const queryClient = useQueryClient();
  const onSubmit =  (data) => {
     changeStatusProposal(
      { proposalId, projectId ,...data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({
            queryKey: ["project", `${projectId}`],
          });
        },
      }
    );
  };

  return (
    <div>
      <form className="flex flex-col gap-y-5" onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect register={register} name={"status"} options={options} />
        {isChangeLoading ? (
          <Loader />
        ) : (
          <button className="btn btn--primary w-full">تایید</button>
        )}
      </form>
    </div>
  );
}

export default ChangeStatusProposalSelect;
