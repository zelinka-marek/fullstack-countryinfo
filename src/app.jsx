import { useState } from "react";
import { SearchForm } from "./components/search-form";
import { SearchResults } from "./components/search-results";
import { getCountryList } from "./services/country";

export function App() {
  const [countryList, setCountryList] = useState(null);

  const search = (country) => {
    getCountryList(country).then(setCountryList);
    console.log(`Searching for ${country} info`);
  };

  return (
    <div className="app">
      <main>
        <h1>Country Info</h1>
        <h2>Search by name</h2>
        <SearchForm onSubmit={search} />
        <h2>Results</h2>
        <SearchResults list={countryList} />
      </main>
      <footer>
        <i>CountryInfo &copy; 2023 Marek Zelinka</i>
      </footer>
    </div>
  );
}
