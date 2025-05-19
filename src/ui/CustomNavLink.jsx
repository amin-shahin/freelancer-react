import { NavLink } from "react-router";

function CustomNavLink({ children, href }) {
  const classes =
    "flex  text-secondary-700 items-center gap-x-3 w-full rounded-md text-start hover:bg-primary-100/50   transition-colors duration-300 px-3 py-2";
  return (
    <li>
      <NavLink
        to={href}
        className={({ isActive }) =>
          isActive ? `${classes} bg-primary-100 text-primary-900 dark:text-secondary-700 dark:bg-primary-600` : `${classes}`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

export default CustomNavLink;
