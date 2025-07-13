
import useProposals from "../proposals/useProposals";
import ProposalTable from "../proposals/ProposalTable";

function FreelancerProposals() {
  const { proposals ,isLoading} = useProposals();
  return (
    <div>
      <div className="px-4">
        <div className="flex justify-between my-5">
          <h1 className="text-bold text-xl text-secondary-900">پروژه های درخواست شده </h1>
        </div>
        <ProposalTable proposals={proposals} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default FreelancerProposals;
