import {
  HiCollection,
  HiHome,
  HiOutlineViewGrid,
  HiUser,
} from "react-icons/hi";
import CustomNavLink from "../../ui/CustomNavlink";
import DashboardSidebar from "../mainComponent/DashboardSidebar";
import AppLayoutDashboard from "./AppLayoutDashboard";

function AdminLayout() {
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
          <HiOutlineViewGrid />
          <span>درخواست ها</span>
        </CustomNavLink>
        <CustomNavLink href={"users"}>
          <HiUser />
          <span>کاربران </span>
        </CustomNavLink>
      </DashboardSidebar>
    </AppLayoutDashboard>
  );
}

export default AdminLayout;
