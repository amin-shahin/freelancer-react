import { HiOutlineCollection, HiOutlineViewGrid } from "react-icons/hi";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import Stat from "../../ui/stat";
import { toPersianNumbersWithComma } from "../../utils/convertToPersianNumber";

function FreelancerStats({ proposals }) {
  const numberOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((p) => p.status === 2);

  const balance = acceptedProposals.reduce((acc, curr) => curr.price + acc, 0);

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
          CustomIcon={HiOutlineCurrencyDollar}
          title={"درخواست های تایید شده"}
          numberOfItem={acceptedProposals.length}
        />
      </div>

      <div className="flex  col-span-1 bg-secondary-0 rounded-2xl shadow dark:shadow-black/90 p-2 gap-x-4">
        <Stat
          CustomIcon={HiOutlineCollection}
          title={"کیف پول"}
          numberOfItem={toPersianNumbersWithComma(balance)}
        />
      </div>
    </div>
  );
}

export default FreelancerStats;
