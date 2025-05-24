import useUser from "./useUser";
import { useLocation } from "react-router";
export default function useAuthorized() {
  const { isLoading, user } = useUser();
  const { pathname } = useLocation();

  let isAuthenticated = false;
  if (user) isAuthenticated = true;

  let isAuthorized = false;

  const ROLES = {
    admin: "ADMIN",
    owner: "OWNER",
    freelancer: "FREELANCER",
  };

  const role = pathname.split("/").at(1);

  if (Object.keys(ROLES).includes(role)) {
    if (user && user.role === ROLES[role]) isAuthorized = true;
  }

  return { user, isLoading, isAuthenticated, isAuthorized };
}
