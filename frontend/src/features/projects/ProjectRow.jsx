import { HiEye, HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import Table from "../../ui/Table";
import convertDateToLocalDate from "../../utils/convertDateToLocalDate";
import { toPersianNumbersWithComma } from "../../utils/convertToPersianNumber";
import toTruncateText from "../../utils/toTruncateText";
import Modal from "../../ui/Modal";
import { useState } from "react";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useRemoveProject } from "./useRemoveProject";
import CreateProjectForm from "./CreateProjectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";
import { Link } from "react-router";

function ProjectRow({ project, index }) {
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const { deleteProject, isDeletingProject } = useRemoveProject();

  console.log(project);

  return (
    <Table.Row key={project._id}>
      <td>{index + 1}</td>
      <td>{toTruncateText(project.title, 20)}</td>
      <td>{project.category.title}</td>
      <td>{project.freelancer?.name || "-"}</td>
      <td>{toPersianNumbersWithComma(project.budget) + " ریال "}</td>
      <td>{convertDateToLocalDate(project.deadline)}</td>
      <td>
        <ToggleProjectStatus project={project} />
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
              <CreateProjectForm
                toEditProject={project}
                onClose={() => setIsOpenEditModal(false)}
              />
            </Modal>
          </>
        </div>
      </td>
      <td>
        <Link
          to={project._id}
          className="w-full flex items-center justify-center"
        >
          <HiEye className="w-5 h-5 text-primary-700" />
        </Link>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
