import { Outlet } from "react-router";
import Header from "../mainComponent/Header";
import DashboardSidebar from "../mainComponent/DashboardSidebar";

function AppLayoutDashboard() {
  return (
    <div className="h-screen grid grid-cols-5 grid-rows-[auto_1fr]">
      <Header />
      <DashboardSidebar />
      <div className="col-span-4 bg-secondary-100  row-span-4 col-start-1 row-start-2 overflow-y-auto py-4">
        <div className="mx-auto max-w-screen-lg">
          <Outlet  />
        </div>
      </div>
    </div>
  );
}

export default AppLayoutDashboard;
