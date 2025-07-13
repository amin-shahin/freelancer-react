import { HiPlus } from "react-icons/hi";
import OnwerProjectTable from "../features/projects/OnwerProjectTable";
import Modal from "../ui/Modal";
import { useState } from "react";
import CreateProjectForm from "../features/projects/CreateProjectForm";

function OwnerProjects() {
  const [isOpenCreateProject, setIsOpenCreateProject] = useState(false);
  return (
    <div className="px-4">
      <div className="flex justify-between my-5">
        <h1 className="text-bold text-xl">پروژه های شما</h1>

        <>
          <button
            onClick={() => setIsOpenCreateProject(true)}
            className="flex gap-x-3 items-center btn btn--primary"
          >
            <span>اضافه کردن پروژه</span>
            <HiPlus />
          </button>
          <Modal
            rtl={"rtl"}
            open={isOpenCreateProject}
            onClose={() => setIsOpenCreateProject(false)}
            title={"اضافه کردن پروژه جدید"}
          >
            <CreateProjectForm  onClose={() => setIsOpenCreateProject(false)} />
          </Modal>
        </>
      </div>
      <OnwerProjectTable />
    </div>
  );
}

export default OwnerProjects;
