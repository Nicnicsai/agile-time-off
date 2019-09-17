const API_KEY = "5ae2e3f221c38a28845f05b62c7b6f58f7f833c338751dfdba82444e";

//let dropDownInput = "europe";
function fetchCountry(dropDownInput) {
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
            /*return fetch("https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles="+ randomCountry.name)
                .then(function (wikiresponse) {
                    return wikiresponse.json();
                })
                .then(function (wikiSummary) {
                    document.getElementById("countryinfo").innerHTML = wikiSummary;
                })*/
        });
}
