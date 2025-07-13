import { useEffect } from "react";
import useAuthorized from "../features/authentication/useAuthorized";
import { useNavigate } from "react-router";
import Loader from "../ui/Loader";
import toast from "react-hot-toast";

function ProtectedRoute({ children }) {
  const { isAuthenticated, isAuthorized, isLoading, user ,isVerified } = useAuthorized();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isAuthorized && !isLoading) navigate("/not-access", { replace: true });
    if (!isVerified && !isLoading) {
      toast.error('پروفایل شما هنوز تایید نشده است')
      navigate("/not-access", { replace: true });
    }
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
