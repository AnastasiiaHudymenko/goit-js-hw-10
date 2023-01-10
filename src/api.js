export const fetchCountries = async countryName => {
  const countries = await fetch(
    `https://restcountries.com/v2/name/${countryName}?fields=name,capital,population,flags,languages`
  );
  if (!countries.ok) {
    throw Error(countries.statusText);
  } else {
    return await countries.json();
  }

  // return fetch(
  //   `https://restcountries.com/v2/name/${countryName}?fields=name,capital,population,flags,languages`
  // ).then(response => {
  //   if (!response.ok) {
  //     throw Error(response.statusText);
  //   }
  //   return response.json();
  // });
};
