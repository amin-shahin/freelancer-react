import Loader from "../../ui/Loader";
import { useOwnerProject } from "../projects/useOwnerProjects";
import OwnerDashboardTitle from "./OwnerDashboardTitle";
import OwnerStats from "./OwnerStats";

function OwnerDashboardMainContent() {
  const { isLoading, projects } = useOwnerProject();
  if (isLoading) return <Loader />;
  return (
    <div className="px-4">
      <OwnerDashboardTitle />
      <OwnerStats projects={projects} />
    </div>
  );
}

export default OwnerDashboardMainContent;
