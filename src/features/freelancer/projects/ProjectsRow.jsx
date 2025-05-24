import Modal from "../../../ui/Modal";
import Table from "../../../ui/Table";
import convertDateToLocalDate from "../../../utils/convertDateToLocalDate";
import { toPersianNumbersWithComma } from "../../../utils/convertToPersianNumber";
import toTruncateText from "../../../utils/toTruncateText";
import { MdAssignmentAdd } from "react-icons/md";
import CreateProposalForm from "../../proposals/CreateProposalForm";
import { useState } from "react";
function ProjectsRow({ project, index }) {
  const [openCreateProposal, setIsOpenCreateProposal] = useState(false);

  const { status, title } = project;
  const statusStyle = {
    OPEN: {
      label: "باز",
      className: "badge--success",
    },
    CLOSED: {
      label: "بسته",
      className: "badge--danger",
    },
  };
  return (
    <Table.Row key={project._id}>
      <td>{index + 1}</td>
      <td>{toTruncateText(project.title, 20)}</td>
      <td>{toPersianNumbersWithComma(project.budget) + " ریال "}</td>
      <td>{convertDateToLocalDate(project.deadline)}</td>
      <td>
        {
          <span className={`badge ${statusStyle[status].className}`}>
            {statusStyle[status].label}
          </span>
        }
      </td>
      <td>
        <button onClick={() => setIsOpenCreateProposal(true)}>
          <MdAssignmentAdd className="w-5 h-5 text-primary-900" />
        </button>
        <>
          <Modal
            rtl={"rtl"}
            open={openCreateProposal}
            onClose={() => setIsOpenCreateProposal(false)}
            title={`درخواست انجام ${title}`}
          >
            <CreateProposalForm
              onClose={() => setIsOpenCreateProposal(false)}
              projectId={project._id}
            />
          </Modal>
        </>
      </td>
    </Table.Row>
  );
}

export default ProjectsRow;
