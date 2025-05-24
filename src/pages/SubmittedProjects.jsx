import ProjectsHeader from "../features/freelancer/projects/ProjectsHeader"
import ProjectsTable from "../features/freelancer/projects/ProjectsTable"

function SubmittedProjects() {
  return (
    <div className="px-4">
      <ProjectsHeader/>
      <ProjectsTable/>
    </div>
  )
}

export default SubmittedProjects