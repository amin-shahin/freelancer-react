import Empty from "../../ui/Empty";
import Loader from "../../ui/Loader";
import convertDateToLocalDate from "../../utils/convertDateToLocalDate";
import { convertToPersianNumber, toPersianNumbersWithComma } from "../../utils/convertToPersianNumber";
import toTruncateText from "../../utils/toTruncateText";
import { useOwnerProject } from "./useOwnerProjects";

function OnwerProjectTable() {
  const { isLoading, projects } = useOwnerProject();
  console.log(projects);

  if (isLoading) return <Loader />;
  if (!projects.length) return <Empty />;

  return (
    <div>
      <table dir="rtl" className="shadow-lg">
        <thead>
          <tr className="title-row">
            <th>#</th>
            <th>عتوان</th>
            <th>دسته بندی</th>
            <th>فریلنسر</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>وضعیت</th>
            <th>تگ ها</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody className="bg-secondary-0">
          {projects.map((project, index) => (
            <tr key={project._id}>
              <td>{index + 1}</td>
              <td>{toTruncateText(project.title , 20)}</td>
              <td>{project.category.title}</td>
              <td>{project.freelancer?.name || "-"}</td>
              <td>{toPersianNumbersWithComma(project.budget)+ ' ریال '}</td>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OnwerProjectTable;
