import useUser from "../authentication/useUser";
import HeaderMenu from "../Header/HeaderMenu";
import UserAvatar from "../Header/UserAvatar";

function Header({ setOpen }) {
  const { isLoading } = useUser();

  return (
    <div className="w-full bg-secondary-0 border-b border-secondary-200 px-8 py-4">
      <div
        className={`container xl:max-w-screen flex items-center justify-between  gap-x-5  transition-all duration-200
        ${isLoading ? "blur-sm opacity-50" : ""}
        `}
      >
        <UserAvatar setOpen={setOpen} />
        <HeaderMenu />
      </div>
    </div>
  );
}

export default Header;
