/* eslint-disable react/react-in-jsx-scope */
import { useSearchParams } from "react-router-dom";
import { Select } from "./Select";

/* eslint-disable react/prop-types */
export function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy");
  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <Select
      options={options}
      type="white"
      value={sortBy}
      onChange={handleChange}
    />
  );
}
