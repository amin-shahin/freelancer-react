import Loader from "../../ui/Loader";
import useProposals from "../proposals/useProposals";
import FreelancerDashboardTitle from "./FreelancerDashboardTitle";
import FreelancerStats from "./FreelancerStats";

function FreelancerDashboardMainContent() {
  const { isLoading, proposals } = useProposals();

  if (isLoading) return <Loader />;
  return (
    <div className="px-4">
      <FreelancerDashboardTitle />
      <FreelancerStats proposals={proposals} />
    </div>
  );
}

export default FreelancerDashboardMainContent;
