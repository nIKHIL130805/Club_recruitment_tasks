import { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";

function SearchBar({ onSearch }) {
  const [org, setOrg] = useState("");
  const debouncedOrg = useDebounce(org, 500);

  useEffect(() => {
    if (debouncedOrg.trim()) {
      onSearch(debouncedOrg.trim());
    }
  }, [debouncedOrg, onSearch]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub organization name"
        value={org}
        onChange={(e) => setOrg(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
