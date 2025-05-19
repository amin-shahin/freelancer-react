import { HiCollection, HiHome } from "react-icons/hi";
import { NavLink } from "react-router";

function DashboardSidebar({children}) {
  return (
    <div className="row-span-5 bg-secondary-0 col-start-1 row-start-1 py-4 px-2 border-l border-secondary-200">
      <ul className="flex flex-col ">
      {children}
      </ul>
    </div>
  );
}

export default DashboardSidebar;


