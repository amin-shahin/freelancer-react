import { HiBars3 } from "react-icons/hi2";
import useUser from "../authentication/useUser";

function UserAvatar({ setOpen }) {
  const { user } = useUser();
  return (
    <div className="flex gap-x-2 items-center">
      <div className="md:hidden " onClick={setOpen}>
        <HiBars3 className="w-6 h-6 text-primary-700" />
      </div>

      <div className="flex items-center gap-x-2">
        <img
          src="/user.jpg"
          alt="user-avatar"
          className="w-7 h-7 rounded-full object-cover object-center"
        />
        <span className="text-secondary-700 mt-1">{user?.name}</span>
      </div>
    </div>
  );
}

export default UserAvatar;
