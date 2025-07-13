import { useState } from "react";
import Table from "../../../ui/Table";
import convertDateToLocalDate from "../../../utils/convertDateToLocalDate";
import Modal from "../../../ui/Modal";
import ChangeUserStatusSelect from "./ChangeUserStatusSelect";

const userStatus = [
  { label: "رد شده", className: "badge badge--danger" },
  { label: "در انتظار تایید", className: "badge badge--secondary" },
  { label: "تایید شده", className: "badge badge--success" },
];

function UsersRow({ user, index }) {
  const { name, phoneNumber, role, email, createdAt, status } = user;
  const [open, setOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{phoneNumber}</td>
      <td>{role}</td>
      <td>{email}</td>
      <td>{convertDateToLocalDate(createdAt)}</td>
      <td>
        <span className={`${userStatus[status].className}`}>
          {userStatus[status].label}
        </span>
      </td>
      <td>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={"تغییر وضعیت کاربر"}
        >
          <ChangeUserStatusSelect
            userId={user._id}
            onClose={() => setOpen(false)}
          />
        </Modal>

        <button onClick={() => setOpen(true)}>تغییر </button>
      </td>
    </Table.Row>
  );
}

export default UsersRow;
