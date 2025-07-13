import Filter from "../../../ui/Filter";
import FilterDropDown from "../../../ui/FilterDropDown";
import useCategories from "../../categories/useCategories";

function ProjectsHeader() {
  const { transformedCategories } = useCategories();
  const sortOptions = [
    {
      label: "مرتب سازی(جدیدترین)",
      value: "latest",
    },
    {
      label: "مرتب سازی(قدبمی ترین)",
      value: "earliest",
    },
  ];

  const statusOptions = [
    { label: "همه", value: "ALL" },
    { label: "باز", value: "OPEN" },
    { label: "بسته", value: "CLOSED" },
  ];

  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="font-bold text-lg text-secondary-700">لیست پروژه ها</h1>
      <div className="flex items-center gap-x-2  text-secondary-700">
        <Filter searchField={'status'} options={statusOptions}/>
        <FilterDropDown searchField={"sort"} options={sortOptions} />
        <FilterDropDown
          options={[
            { value: "ALL", label: "دسته بندی(همه)" },
            ...transformedCategories,
          ]}
          searchField={"category"}
        />
      </div>
    </div>
  );
}

export default ProjectsHeader;
