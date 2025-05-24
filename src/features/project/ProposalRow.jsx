import { useState } from "react";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import { toPersianNumbersWithComma } from "../../utils/convertToPersianNumber";
import toTruncateText from "../../utils/toTruncateText";
import ChangeStatusProposalSelect from "../proposals/ChangeStatusProposalSelect";

function ProposalRow({ proposal, index }) {
  const { status } = proposal;
  
  const [open, setOpen] = useState(false);
  const statusStyle = [
    {
      className: "badge--danger",
      text: "رد شده",
    },
    {
      className: "badge--secondary",
      text: "در انتظار تایید",
    },
    {
      className: "badge--success",
      text: "تایید",
    },
  ];

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{proposal.user.name}</td>
      <td>{toTruncateText(proposal.description, 50)}</td>
      <td>{proposal.duration}</td>
      <td>{toPersianNumbersWithComma(proposal.price)}</td>
      <td>
        <span className={`badge  ${statusStyle[status].className}`}>
          {statusStyle[status].text}
        </span>
      </td>
      <td>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={"تغییر وضعیت درخواست"}
        >
          <ChangeStatusProposalSelect
            proposalId={proposal._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
        <button onClick={() => setOpen(true)}>تغییر وضعیت </button>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
