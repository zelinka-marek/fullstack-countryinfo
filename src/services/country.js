export function getCountryList(countryName) {
  return fetch(`https://restcountries.com/v3.1/name/${countryName}`).then(
    (response) => response.json()
  );
}
