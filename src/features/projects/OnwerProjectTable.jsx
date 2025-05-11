import Empty from "../../ui/Empty";
import Loader from "../../ui/Loader";
import Table from "../../ui/Table";
import convertDateToLocalDate from "../../utils/convertDateToLocalDate";
import {
  convertToPersianNumber,
  toPersianNumbersWithComma,
} from "../../utils/convertToPersianNumber";
import toTruncateText from "../../utils/toTruncateText";
import ProjectRow from "./ProjectRow";
import { useOwnerProject } from "./useOwnerProjects";

function OnwerProjectTable() {
  const { isLoading, projects } = useOwnerProject();
  console.log(projects);

  if (isLoading) return <Loader />;
  if (!projects.length) return <Empty />;

  return (
    
      <Table>
        <Table.Header>
          <th>#</th>
          <th>عتوان</th>
          <th>دسته بندی</th>
          <th>فریلنسر</th>
          <th>بودجه</th>
          <th>ددلاین</th>
          <th>وضعیت</th>
          <th>تگ ها</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          {projects.map((project, index) => (
            <ProjectRow project={project} index={index} />

      
          
          ))}
        </Table.Body>
      </Table>
 
    
  );
}

export default OnwerProjectTable;
