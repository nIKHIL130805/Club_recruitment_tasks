import { useState } from "react";

function SearchBar({ onSearch }) {
  const [org, setOrg] = useState("");

  const handleSearch = () => {
    if (!org.trim()) return;
    onSearch(org.trim());
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub organization name"
        value={org}
        onChange={(e) => setOrg(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
