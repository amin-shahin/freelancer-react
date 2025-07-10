import React from "react";

function Stat({ CustomIcon, title, numberOfItem }) {
  return (
    <>
      <div className="aspect-square flex-1/3 rounded-full bg-primary-200 dark:bg-primary-600 p-8 sm:p-10 md:p-3">
        <CustomIcon className="w-full h-full text-primary-800 dark:text-secondary-900" />
      </div>
      <div className="flex  flex-col justify-around gap-y-4 flex-2/3 text-start text-secondary-700">
        <p className="text-lg"> {title}</p>
        <p className="text-3xl">{numberOfItem}</p>
      </div>
    </>
  );
}

export default Stat;
