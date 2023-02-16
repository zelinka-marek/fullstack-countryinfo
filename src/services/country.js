export function getCountryList(countryName) {
  return fetch(`https://restcountries.com/v3.1/name/${countryName}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json();
    }
  );
}
