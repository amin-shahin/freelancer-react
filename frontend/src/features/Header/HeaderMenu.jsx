import { HiBars3, HiOutlineUser } from "react-icons/hi2";
import Logout from "../authentication/Logout";
import ToggleTheme from "../Theme/ToggleTheme";
import { Link } from "react-router";

function HeaderMenu() {
  return (
    <div className="flex gap-x-5 items-center ">


      <Link to={"dashboard"}>
        <HiOutlineUser className="w-5 h-5 text-primary-900 cursor-pointer" />
      </Link>
      <ToggleTheme />
      <Logout />
    </div>
  );
}

export default HeaderMenu;
