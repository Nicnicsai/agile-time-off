//FUNCTIONS
//fetches a country based on the given continent through the restcountries rest api
function fetchCountry(continent) {
    fetch(`https://restcountries.eu/rest/v2/region/${continent}?fields=name;alpha2Code;capital;flag`)
        .then(function (response) {
            return response.json();
        })
        .then(function (countryInfo) {
            let randomCountry = countryInfo[Math.floor((Math.random() * countryInfo.length))];

            countrySlot.src = randomCountry.flag;
            document.getElementById("country-text").innerText = randomCountry.name.toUpperCase();
            document.getElementById("city-text").innerText = randomCountry.capital.toUpperCase();

            //start fetching all the activities
            fetchAttractions(randomCountry.name, randomCountry.capital);
            getFunStuff(randomCountry.capital);
        })
}

//fetches (a lesser known) attraction from the Atlas Obscura api
function fetchAttractions(country, capital) {
    fetch(`https://api-gateway-becode.herokuapp.com/?goto=https://atlas-obscura-api.herokuapp.com/api/atlas/attractions/${country}?city=${capital}&limit=10`)
        .then(function (obscuraresponse) {
            return obscuraresponse.json()
        })
        .then(function (obscuraData) {
            fillTemplate(obscuraData.Attractions[0].name, obscuraData.Attractions[0].img, obscuraData.Attractions[0].description, null)
        })
}