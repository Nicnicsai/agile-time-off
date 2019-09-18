let dropDownInput = "europe";

function fetchCountry(continent) {
    fetch("https://restcountries.eu/rest/v2/region/" + continent + "?fields=name;alpha2Code;capital")
        .then(function (response) {
            return response.json();
        })
        .then(function (countryInfo) {
            randomCountry = countryInfo[Math.floor((Math.random() * countryInfo.length))];
            countryName = randomCountry.name;
            countryCapital = randomCountry.capital;
            alpha2Code = randomCountry.alpha2Code;
            console.log("Country = " + countryName + ". City = " + countryCapital + ". Country code = " + alpha2Code);
            })}

fetchCountry(dropDownInput);

function fetchAttractions(country, capital) {
    fetch("https://api-gateway-becode.herokuapp.com/?goto=https://atlas-obscura-api.herokuapp.com/api/atlas/attractions/"+ country + "?city=" + capital)
        .then(function (wikiresponse) {
            return wikiresponse.json();
        })
        .then(function (obscuraData) {
            console.log(obscuraData);
            console.log(obscuraData.Attractions[0].img);
            console.log(obscuraData.Attractions[0].description);
        })
}

fetchAttractions(countryName, countryCapital);

/*
async function getCapital(dropDownInput){
    let response = await fetch(`https://restcountries.eu/rest/v2/region/${dropDownInput}?fields=name;alpha2Code;capital`);
    let countries = await response.json();
    return countries[Math.floor((Math.random() * countries.length))].capital;
}
*/