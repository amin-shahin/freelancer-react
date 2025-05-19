import useUser from "../authentication/useUser";
import HeaderMenu from "../Header/HeaderMenu";
import UserAvatar from "../Header/UserAvatar";

function Header() {
  const { isLoading } = useUser();

  return (
    <div className="col-span-4 bg-secondary-0 border-b border-secondary-200 px-8 py-4">
      <div
        className={`container xl:max-w-screen flex items-center justify-end gap-x-5  transition-all duration-200
        ${isLoading ? "blur-sm opacity-50" : ""}
        `}
      >
        <UserAvatar />
        <HeaderMenu />
      </div>
    </div>
  );
}

export default Header;
