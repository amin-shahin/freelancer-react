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
        <div className="w-full" onClick={logout}>
          <div className="flex justify-center items-center gap-x-2 hover:text-error transition-all duration-150 cursor-pointer">
            <HiOutlineArrowRightOnRectangle
              className={`h-5 w-5 ${
                text
                  ? ""
                  : "text-primary-900  hover:text-error transition-all duration-300"
              }`}
            />
            <p>{text}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Logout;
