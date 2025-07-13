import { useProjects } from '../../projects/useProjects';
import Table from '../../../ui/Table';
import Loader from '../../../ui/Loader';
import Empty from '../../../ui/Empty';
import ProjectsRow from './ProjectsRow';

function ProjectsTable() {
    const { isLoading, projects } = useProjects();  
    console.log(isLoading,projects);
    
    

    if (isLoading) return <Loader />;

    if (!projects.length) return <Empty name={'پروژه ای'} />;
  
    return (
      
        <Table>
          <Table.Header>
            <th>#</th>
            <th>عتوان</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>وضعیت</th>
            <th>درخواست انجام پروژه</th>
          </Table.Header>
          <Table.Body>
            {projects.map((project, index) => (
              <ProjectsRow key={project._id} project={project} index={index} />
            ))}
          </Table.Body>
        </Table>
   
      
    );
  }
  

export default ProjectsTable