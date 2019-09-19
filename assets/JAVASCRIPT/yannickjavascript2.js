//let dropDownInput = "europe";

//fetchCountry(dropDownInput);

function fetchCountry(continent) {
    fetch("https://restcountries.eu/rest/v2/region/" + continent + "?fields=name;alpha2Code;capital;flag")
        .then(function (response) {
            return response.json();
        })
        .then(function (countryInfo) {
            randomCountry = countryInfo[Math.floor((Math.random() * countryInfo.length))];
            countrySlot.src = randomCountry.flag;
            fetchCountryDescription(randomCountry.name);
            fetchAttractions(randomCountry.name, randomCountry.capital);
            getFunStuff(randomCountry.capital);
        })
}

function fetchCountryDescription(country) {
    fetch("https://api-gateway-becode.herokuapp.com/?goto=https%3A%2F%2Fen.wikipedia.org%2Fw%2Fapi.php%3Fformat%3Djson%26action%3Dquery%26prop%3Dextracts%26exintro%26explaintext%26redirects%3D1%26titles%3D" + country)
        .then(function (wikiresponse) {
            return wikiresponse.json();
        })
        .then(function (wikiData) {
            let obj = wikiData.query.pages,
                key = Object.keys(obj)[0],
                extract = obj[key].extract;
            console.log(extract);
        })
}

function fetchAttractions(country, capital) {
    fetch("https://api-gateway-becode.herokuapp.com/?goto=https://atlas-obscura-api.herokuapp.com/api/atlas/attractions/" + country + "?city=" + capital + "&limit=10")
        .then(function (obscuraresponse) {
            return obscuraresponse.json();
        })
        .then(function (obscuraData) {
            console.log(obscuraData);
            console.log(obscuraData.Attractions[0].img);
            console.log(obscuraData.Attractions[0].description);

            fillTemplate(obscuraData.Attractions[0].name, obscuraData.Attractions[0].img, obscuraData.Attractions[0].description, null)
        })
}

/*
async function getCapital(dropDownInput){
    let response = await fetch(`https://restcountries.eu/rest/v2/region/${dropDownInput}?fields=name;alpha2Code;capital`);
    let countries = await response.json();
    return countries[Math.floor((Math.random() * countries.length))].capital;
}
*/