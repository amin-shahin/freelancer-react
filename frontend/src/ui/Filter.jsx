import { useSearchParams } from "react-router";

function Filter({ searchField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(searchField) || options.at(0).value;
  function handleOnChange(value) {
    searchParams.set(searchField, value);
    setSearchParams(searchParams);
  }
  return (
    <div className="flex items-center px-2 gap-x-1 text-xs rounded-lg bg-secondary-0">
      <span>وضعیت</span>
      {options.map((item) => {
        const isActive = item.value === value;        
        return (
          <button
            onClick={() => handleOnChange(item.value)}
            key={item.value}
            disabled={isActive}
            className={`whitespace-nowrap font-bold transition-all duration-200 rounded-md px-4 py-2
             ${isActive ? " !bg-primary-900 text-white" :" bg-secondary-0 text-secondary-800"}`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

export default Filter;
