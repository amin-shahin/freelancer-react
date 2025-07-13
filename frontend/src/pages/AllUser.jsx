import UsersTable from "../features/admin/users/UsersTable";

function AllUser() {
  
  return (
    <div className="px-4">
      <div className="flex justify-between my-5">
        <h1 className="text-bold text-xl text-secondary-700">کاربران</h1>
      </div>
      <UsersTable />
    </div>
  );
}

export default AllUser;
