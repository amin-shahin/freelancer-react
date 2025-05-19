import useUser from "../authentication/useUser";

function UserAvatar() {
  const { user } = useUser();
  return (
    <div className="flex items-center gap-x-2">
      <img
        src="/user.jpg"
        alt="user-avatar"
        className="w-7 h-7 rounded-full object-cover object-center"
      />
      <span className="text-secondary-700">{user?.name}</span>
    </div>
  );
}

export default UserAvatar;
