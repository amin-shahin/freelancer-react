import { HiOutlineViewGrid, HiUsers } from "react-icons/hi";
import Stat from "../../ui/stat";
import { HiOutlineDocumentCurrencyDollar } from "react-icons/hi2";

function AdminStats({ projects, proposals ,users}) {
  const numberOfProposals = proposals?.length;
  const numberOfProjects = projects?.length;
  const numberOfUsers = users?.length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 ">
      <div className="flex  col-span-1 bg-secondary-0 rounded-2xl shadow dark:shadow-black/90 p-2 gap-x-4">
        <Stat
          CustomIcon={HiOutlineViewGrid}
          title={"درخواست ها"}
          numberOfItem={numberOfProposals}
        />
      </div>

      <div className="flex  col-span-1 bg-secondary-0 rounded-2xl shadow dark:shadow-black/90 p-2 gap-x-4">
        <Stat
          CustomIcon={HiOutlineDocumentCurrencyDollar}
          title={"پروژه ها"}
          numberOfItem={numberOfProjects}
        />
      </div>

       <div className="flex  col-span-1 bg-secondary-0 rounded-2xl shadow dark:shadow-black/90 p-2 gap-x-4">
          <Stat
            CustomIcon={HiUsers}
            title={"کاربران"}
            numberOfItem={numberOfUsers}
          />
        </div> 
    </div>
  );
}

export default AdminStats;
