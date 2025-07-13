import { HiOutlineCollection, HiOutlineViewGrid } from "react-icons/hi";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import Stat from "../../ui/stat";

function OwnerStats({ projects }) {
  const numberOfProjects = projects.length;
  const numberOfAcceptedProjects = projects.map((p) => p.status === 2).length;

  const numberOfProposal = projects.reduce(
    (acc, curr) => curr.proposals.length + acc,
    0
  );

  console.log(projects);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 ">
      <div className="flex  col-span-1 bg-secondary-0 rounded-2xl shadow dark:shadow-black/90 p-2 gap-x-4">
        <Stat
          CustomIcon={HiOutlineViewGrid}
          title={"پروژه ها"}
          numberOfItem={numberOfProjects}
        />
      </div>

      <div className="flex  col-span-1 bg-secondary-0 rounded-2xl shadow dark:shadow-black/90 p-2 gap-x-4">
        <Stat
          CustomIcon={HiOutlineCurrencyDollar}
          title={"پروژه های واگذار شده"}
          numberOfItem={numberOfAcceptedProjects}
        />
      </div>

      <div className="flex  col-span-1 bg-secondary-0 rounded-2xl shadow dark:shadow-black/90 p-2 gap-x-4">
        <Stat
          CustomIcon={HiOutlineCollection}
          title={"درخواست ها"}
          numberOfItem={numberOfProposal}
        />
      </div>
    </div>
  );
}

export default OwnerStats;
