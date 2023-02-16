import { useState } from "react";

export function SearchForm(props) {
  const { onSubmit } = props;
  const [country, setCountry] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (country.trim().length) {
      onSubmit(country);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        required
        value={country}
        onChange={(event) => setCountry(event.target.value)}
        aria-label="Country name"
      />
      <button type="submit">Search</button>
    </form>
  );
}
