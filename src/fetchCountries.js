export function fetchCoutries(nameCountry) {
    return fetch(`https://restcountries.com/v3.1/name/${nameCountry}?fields=capital,name,population,languages,flags`)
        .then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
            }
        return response.json();
    });
}