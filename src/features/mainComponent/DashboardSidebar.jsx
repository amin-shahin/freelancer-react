import { HiCollection, HiHome } from "react-icons/hi";
import { NavLink } from "react-router";

function DashboardSidebar() {
  return (
    <div className="row-span-5 bg-secondary-0 col-start-5 row-start-1 py-4 px-2 border-l border-secondary-200">
      <ul className="flex flex-col ">
        <li className="w-full ">
          <CustomNavLink href={"/owner/dashboard"}>
            <span>داشبورد</span>
            <HiHome />
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink href={"/owner/projects"}>
            <span>پروژه ها</span>
            <HiCollection />
          </CustomNavLink>
        </li>
      </ul>
    </div>
  );
}

export default DashboardSidebar;

function CustomNavLink({ children, href }) {
  const classes =
    "flex justify-end items-center gap-x-3 w-full rounded-md text-start hover:bg-primary-100/50   transition-colors duration-300 px-3 py-2";
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive ? `${classes} bg-primary-100 text-primary-900` : `${classes}`
      }
    >
      {children}
    </NavLink>
  );
}
