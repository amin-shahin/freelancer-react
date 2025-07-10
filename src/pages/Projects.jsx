import { Link } from "react-router";
import useUser from "../features/authentication/useUser";
import { useProjects } from "../features/projects/useProjects";
import Loader from "../ui/Loader";
import { toPersianNumbersWithComma } from "../utils/convertToPersianNumber";

const Projects = () => {
  const { isLoading, projects } = useProjects();
  const {user} = useUser()
  if (isLoading) return <Loader />;

  return (
   <div className=" p-5 ">
    <h1 className="text-2xl font-bold text-shadow-secondary-900 text-start my-10 text-secondary-900">لیست پروژه ها</h1>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
      {projects.map((project) => (
        <div className="flex flex-col bg-secondary-100 justify-between items-center shadow-lg p-4 rounded-xl hover:shadow-2xl transition-all duration-500">
          <p className="text-secondary-900 font-bold text-xl mb-8">
            {project?.title}
          </p>

          <div className="flex flex-col gap-y-2">
            <p className="text-base text-secondary-700">
              دسته بندی : {project?.category?.englishTitle}
            </p>
            <p className="text-secondary-800  wrap-anywhere text-sm">
              {project?.description}
            </p>
            <p className="mt-3">
              {project.tags &&
                project.tags.map((tag) => (
                  <span className="badge badge--secondary p-2 mx-1 text-xs">
                    {tag}
                  </span>
                ))}
            </p>
          </div>
          <p className="btn btn--outline mt-4">
            {toPersianNumbersWithComma(project?.budget)} تومان
          </p>
          {!user && <Link to={'/auth'} className="badge badge--secondary p-1">جهت ثبت درخواست وارد حساب کاربری خود شوید</Link>}
          {
            user && user.role === 'FREELANCER' && <Link to={'/freelancer/projects'} className="btn btn--primary w-full mt-4">درخواست انجام پروژه</Link>
          }
        </div>
      ))}
    </div>
   </div>
  );
};

export default Projects;
