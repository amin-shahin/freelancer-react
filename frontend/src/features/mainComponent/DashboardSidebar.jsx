import { HiCollection, HiHome } from "react-icons/hi";
import { NavLink } from "react-router";

function DashboardSidebar({ children }) {
  return (
    <div className="h-screen w-full overflow-y-auto bg-secondary-0  py-4 px-2 border-l border-secondary-200">
      <ul className="flex flex-col ">{children}</ul>
    </div>
  );
}

export default DashboardSidebar;
