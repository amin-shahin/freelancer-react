import { HiCollection } from "react-icons/hi";
import CustomNavLink from "../../ui/CustomNavlink";
import DashboardSidebar from "../mainComponent/DashboardSidebar";
import AppLayoutDashboard from "./AppLayoutDashboard";
import { HiHome, HiHomeModern } from "react-icons/hi2";

function OwnerLayout({ children }) {
  return (
    <AppLayoutDashboard>
      <DashboardSidebar>
        <CustomNavLink href={"/"}>
          <HiHomeModern />
          <span>خانه</span>
        </CustomNavLink>
        <CustomNavLink href={"/owner/dashboard"}>
          <HiHome />
          <span>داشبورد</span>
        </CustomNavLink>

        <CustomNavLink href={"/owner/projects"}>
          <HiCollection />
          <span>پروژه ها</span>
        </CustomNavLink>
      </DashboardSidebar>
    </AppLayoutDashboard>
  );
}

export default OwnerLayout;
