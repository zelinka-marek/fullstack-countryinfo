import { SearchForm } from "./components/search-form";

export function App() {
  const search = (country) => {
    console.log(`Searching for ${country} info`);
  };

  return (
    <div className="app">
      <main>
        <h1>Country Info</h1>
        <h2>Search by name</h2>
        <SearchForm onSubmit={search} />
        <h2>Results</h2>
      </main>
      <footer>
        <i>CountryInfo &copy; 2023 Marek Zelinka</i>
      </footer>
    </div>
  );
}
