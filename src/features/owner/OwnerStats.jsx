import { HiOutlineCollection, HiOutlineViewGrid } from "react-icons/hi";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";

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
        <div className="aspect-square flex-1/3 rounded-full bg-primary-200 dark:bg-primary-600 p-3">
          <HiOutlineViewGrid className="w-full h-full text-primary-800 dark:text-secondary-900" />
        </div>
        <div className="flex  flex-col justify-around gap-y-4 flex-2/3 text-start text-secondary-700">
          <p className="text-lg">پروژه ها</p>
          <p className="text-3xl">{numberOfProjects}</p>
        </div>
      </div>

      <div className="flex  col-span-1 bg-secondary-0 rounded-2xl shadow dark:shadow-black/90 p-2 gap-x-4">
        <div className="aspect-square flex-1/3 rounded-full bg-primary-200 dark:bg-primary-600 p-3">
          <HiOutlineCurrencyDollar className="w-full h-full text-primary-800 dark:text-secondary-900" />
        </div>
        <div className="flex  flex-col justify-around gap-y-4 flex-2/3 text-start text-secondary-700">
          <p className="text-lg">پروژه های واگذار شده</p>
          <p className="text-3xl">{numberOfAcceptedProjects}</p>
        </div>
      </div>

      <div className="flex  col-span-1 bg-secondary-0 rounded-2xl shadow dark:shadow-black/90 p-2 gap-x-4">
        <div className="aspect-square flex-1/3 rounded-full bg-primary-200 dark:bg-primary-600 p-3">
          <HiOutlineCollection className="w-full h-full text-primary-800 dark:text-secondary-900" />
        </div>
        <div className="flex  flex-col justify-around gap-y-4 flex-2/3 text-start text-secondary-700">
          <p className="text-lg">درخواست ها</p>
          <p className="text-3xl">{numberOfProposal}</p>
        </div>
      </div>
    </div>
  );
}

export default OwnerStats;
