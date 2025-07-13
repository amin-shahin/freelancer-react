import { useSearchParams } from "react-router";
import Select from "../ui/Select";
function FilterDropDown({ options, searchField }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(searchField) || "";
  function handleOnChange(e) {
    searchParams.set(searchField, e.target.value);
    setSearchParams(searchParams);
  }
  return <Select onChange={handleOnChange} value={value} options={options} />;
}

export default FilterDropDown;
