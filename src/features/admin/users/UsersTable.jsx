import Table from "../../../ui/Table";
import useUsers from "../../authentication/useUsers";
import UsersRow from "./UsersRow";

function UsersTable() {
  const { users } = useUsers();
  if (users?.length === 0) return <Empty name={"کاربری "} />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>نام و نام خانوادگی</th>
        <th>شماره موبایل</th>
        <th>نقش</th>
        <th>ایمیل</th>
        <th>تاریخ عضویت</th>
        <th>وضعیت </th>
        <th>تغییر وضعبت </th>
      </Table.Header>
      <Table.Body>
        {users?.map((user, index) => (
          <UsersRow key={user._id} user={user} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default UsersTable;
