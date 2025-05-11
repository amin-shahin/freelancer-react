import Table from "../../ui/Table";
import convertDateToLocalDate from "../../utils/convertDateToLocalDate";
import { toPersianNumbersWithComma } from "../../utils/convertToPersianNumber";
import toTruncateText from "../../utils/toTruncateText";

function ProjectRow({ project, index }) {
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
      <td>...</td>
    </Table.Row>
  );
}

export default ProjectRow;
