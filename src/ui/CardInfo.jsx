const CardInfo = ({ Icon, text ,id }) => {
  return (
    <div id={id} className="shadow-card dark:shadow-secondary-200/40 bg-secondary-0 flex flex-col gap-y-5 relative rounded-3xl w-96 md:w-3/4 lg:w-full h-32 items-center justify-center   p-2 mb-10">
      <p className="absolute top-[-5%] left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-full mb-10 shadow-lg dark:shadow-sm bg-secondary-0 ring-1 ring-gray-100  dark:ring-gray-700 dark:shadow-secondary-300  p-3">
        <Icon className="w-10 h-10 text-primary-700" />
      </p>
      <p className="font-semibold text-secondary-600 p-2">{text}</p>
    </div>
  );
};

export default CardInfo;
