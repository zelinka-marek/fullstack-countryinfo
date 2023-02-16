function CountryDetails(props) {
  const { country } = props;

  return (
    <div>
      <h3>{country.name.common}</h3>
      <dl>
        <dt>Capital</dt>
        <dd>{country.capital.join(", ")}</dd>
        <dt>Total area</dt>
        <dd>{country.area}</dd>
      </dl>
      <h4>Languages</h4>
      <ul>
        {Object.keys(country.languages).map((langKey) => (
          <li key={langKey}>{country.languages[langKey]}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} />
    </div>
  );
}

export function SearchResults(props) {
  const { list } = props;

  return (
    <div>
      {list === null ? (
        <i>Try searching for your favorite country first</i>
      ) : list.length === 0 ? (
        <i>No countries found</i>
      ) : list.length === 1 ? (
        <CountryDetails country={list[0]} />
      ) : list.length > 10 ? (
        <i>Too many matches, specify your query</i>
      ) : (
        <ul>
          {list.map((country) => (
            <li key={country.cca2}>{country.name.common}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
