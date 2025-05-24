import { HiCollection, HiHome } from "react-icons/hi";
import CustomNavLink from "../../ui/CustomNavlink";
import DashboardSidebar from "../mainComponent/DashboardSidebar";
import AppLayoutDashboard from "./AppLayoutDashboard";

function FreelancerLayout() {
  return (
    <AppLayoutDashboard>
      <DashboardSidebar>
        <CustomNavLink href={"dashboard"}>
          <HiHome />
          <span>داشبورد</span>
        </CustomNavLink>

        <CustomNavLink href={"projects"}>
          <HiCollection />
          <span>پروژه ها</span>
        </CustomNavLink>
        <CustomNavLink href={"proposals"}>
          <HiCollection />
          <span>درخواست ها</span>
        </CustomNavLink>
      </DashboardSidebar>
    </AppLayoutDashboard>
  );
}

export default FreelancerLayout;
