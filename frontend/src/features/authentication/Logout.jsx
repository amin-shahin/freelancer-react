import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import useLogout from "./useLogout";
import Loader from "../../ui/Loader";
function Logout({ text = "" }) {
  const { logout, isPending } = useLogout();
  return (
    <>
      {isPending ? (
        <Loader />
      ) : (
        <div className="flex justify-center items-center gap-x-2 hover:text-error transition-all duration-150 cursor-pointer">
          <HiOutlineArrowRightOnRectangle
            onClick={logout}
            className={`h-5 w-5 ${text ? '' :'text-primary-900  hover:text-error transition-all duration-300'}`}
          />
          <p>{text}</p>
        </div>
      )}
    </>
  );
}

export default Logout;
