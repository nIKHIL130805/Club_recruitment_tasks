import SearchBar from "./components/SearchBar";

function App() {
  const handleSearch = (orgName) => {
    console.log("Searching for:", orgName);
  };

  return (
    <div>
      <h1>GitHub Organization Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
}

export default App;

