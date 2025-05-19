import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import useLogout from "./useLogout";
import Loader from "../../ui/Loader";
function Logout() {
  const { logout, isPending } = useLogout();
  return (
    <>
      {isPending ? (
        <Loader />
      ) : (
        <HiOutlineArrowRightOnRectangle
          onClick={logout}
          className="w-5 h-5 text-primary-900 hover:text-error transition-all duration-150 cursor-pointer"
        />
      )}
    </>
  );
}

export default Logout;
