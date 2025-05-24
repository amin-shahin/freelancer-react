import { useEffect } from "react";
import useAuthorized from "../features/authentication/useAuthorized";
import { useNavigate } from "react-router";
import Loader from "../ui/Loader";

function ProtectedRoute({ children }) {
  const { isAuthenticated, isAuthorized, isLoading, user } = useAuthorized();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isAuthorized && !isLoading) navigate("/not-access");
  }, [isAuthenticated, isAuthorized, isLoading]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen w-full bg-secondary-0">
        <Loader />
      </div>
    );
  if (isAuthenticated && isAuthorized) return children;
}

export default ProtectedRoute;
