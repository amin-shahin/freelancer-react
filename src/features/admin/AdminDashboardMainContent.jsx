import Loader from "../../ui/Loader";
import AdminDashboardTitle from "./AdminDashboardTitle";
import useProposals from "../proposals/useProposals";
import { useProjects } from "../projects/useProjects";
import AdminStats from "./AdminStats";
import useUsers from "../authentication/useUsers";

function AdminDashboardMainContent() {
  const { isLoading, proposals } = useProposals();
  const { isLoading: isLoadingUsers, users } = useUsers();
  const { isLoading: isLoadingProjects, projects } = useProjects();

  if (isLoading && isLoadingProjects && isLoadingUsers) return <Loader />;
  return (
    <div className="px-4">
      <AdminDashboardTitle />
      <AdminStats proposals={proposals} projects={projects} users={users} />
    </div>
  );
}

export default AdminDashboardMainContent;
