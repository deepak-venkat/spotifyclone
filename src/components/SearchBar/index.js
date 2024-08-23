import { SearchCont, Input, SearchIcon } from "./styledComponents";
import { useState } from "react";
import { debounce } from "lodash";

const SearchBar = ({ onChangeSearch }) => {
  const [input, setInput] = useState("");

  const debouncedSearch = debounce((value) => {
    onChangeSearch(value);
  }, 500);

  const handleChange = (event) => {
    setInput(event.target.value);
    debouncedSearch(event.target.value);
  };
  return (
    <SearchCont>
      <Input
        type="search"
        placeholder="Search Song, Artist"
        value={input}
        onChange={handleChange}
      />
      <SearchIcon />
    </SearchCont>
  );
};

export default SearchBar;
