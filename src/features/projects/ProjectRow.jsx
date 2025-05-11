import { HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import Table from "../../ui/Table";
import convertDateToLocalDate from "../../utils/convertDateToLocalDate";
import { toPersianNumbersWithComma } from "../../utils/convertToPersianNumber";
import toTruncateText from "../../utils/toTruncateText";
import Modal from "../../ui/Modal";
import { useState } from "react";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useRemoveProject } from "./useRemoveProject";


function ProjectRow({ project, index }) {
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const { deleteProject, isDeletingProject } = useRemoveProject();


  return (
    <Table.Row key={project._id}>
      <td>{index + 1}</td>
      <td>{toTruncateText(project.title, 20)}</td>
      <td>{project.category.title}</td>
      <td>{project.freelancer?.name || "-"}</td>
      <td>{toPersianNumbersWithComma(project.budget) + " ریال "}</td>
      <td>{convertDateToLocalDate(project.deadline)}</td>
      <td>
        {project.status === "OPEN" ? (
          <span className="badge badge--success">باز</span>
        ) : (
          <span className="badge badge--danger">بسته</span>
        )}
      </td>
      <td className="flex flex-wrap gap-x-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="badge badge--secondary flex place-items-center"
          >
            {tag}
          </span>
        ))}
      </td>
      <td>
        <div className="flex gap-x-4 items-center">
          <>
            <HiOutlineTrash
              onClick={() => setIsOpenDeleteModal(true)}
              className="w-5 h-5 cursor-pointer text-rose-500"
            />
            <Modal
              open={isOpenDeleteModal}
              onClose={() => setIsOpenDeleteModal(false)}
              title={`حذف ${project.title}`}
            >
              <ConfirmDelete
                disabled={false}
                onClose={() => setIsOpenDeleteModal(false)}
                resourceName={project.title}
                confirm={() =>
                  deleteProject(project._id, {
                    onSuccess: () => setIsOpenDeleteModal(false),
                  })
                }
              />
            </Modal>
          </>
          <>
            <TbPencilMinus
              onClick={() => setIsOpenEditModal(true)}
              className="w-5 h-5 cursor-pointer text-primary-800"
            />
            <Modal
              open={isOpenEditModal}
              onClose={() => setIsOpenEditModal(false)}
              title={`ویرایش ${project.title}`}
            >
              this is edit modal ....
            </Modal>
          </>
        </div>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
