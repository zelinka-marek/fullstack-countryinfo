export function SearchResults(props) {
  const { list } = props;

  return (
    <div>
      {!list ? (
        <i>Try searching for your favorite country first</i>
      ) : list.length > 10 ? (
        <i>Too many matches, specify your search</i>
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
