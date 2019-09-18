//let dropDownInput = "europe";
/*function fetchCountry(dropDownInput) {
    fetch("https://restcountries.eu/rest/v2/region/" + dropDownInput + "?fields=name;alpha2Code;capital")
        .then(function (response) {
            return response.json();
        })
        .then(function (countryCodes) {
            let randomCountry = countryCodes[Math.floor((Math.random() * countryCodes.length))];
            //console.log(randomCountry);
            //console.log(randomCountry.alpha2Code);
            //console.log(randomCountry.name);
            console.log(randomCountry.capital);
            return randomCountry.capital;
            //return `http://api.opentripmap.com/0.1/en/places/geoname?name=${randomCountry.capital}&apikey=${API_KEY}`;
            *return fetch("https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles="+ randomCountry.name)
                .then(function (wikiresponse) {
                    return wikiresponse.json();
                })
                .then(function (wikiSummary) {
                    document.getElementById("countryinfo").innerHTML = wikiSummary;
                })*
        });
}*/

async function getCapital(dropDownInput){
    let response = await fetch(`https://restcountries.eu/rest/v2/region/${dropDownInput}?fields=name;alpha2Code;capital`);
    let countries = await response.json();
    return countries[Math.floor((Math.random() * countries.length))].capital;
}
