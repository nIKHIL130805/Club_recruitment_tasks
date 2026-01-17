import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { fetchOrgRepos } from "./api/github";

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (orgName) => {
    setLoading(true);
    setHasSearched(true);
    setError("");
    setRepos([]);

    try {
      const data = await fetchOrgRepos(orgName);
      setRepos(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>GitHub Organization Dashboard</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading repositories...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && hasSearched && repos.length === 0 && (
        <p>No repositories found.</p>
      )}

      {!loading && !error && hasSearched && repos.length > 0 && (
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
      )}

    </div>
  );
}

export default App;

