import { useEffect } from "react";
import useProject from "../features/project/useProject";
import ProjectHeader from "../features/project/ProjectHeader";
import ProposalTable from "../features/project/ProposalTable";
import Loader from "../ui/Loader";

function OwnerSingleProject() {
  const { project, isLoading } = useProject();
  if (isLoading) return <Loader />;

  return (
    <div className="px-4">
      <div className="flex flex-col justify-between gap-y-5 my-5">
        <ProjectHeader project={project} />
        <ProposalTable proposals={project?.proposals} />
      </div>
    </div>
  );
}

export default OwnerSingleProject;
