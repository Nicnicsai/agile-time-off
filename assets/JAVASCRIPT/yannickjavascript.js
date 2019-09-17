let dropDownInput = "europe";

fetch("https://restcountries.eu/rest/v2/region/" + dropDownInput + "?fields=name;alpha2Code")
    .then(function (response) {
        return response.json();
    })
    .then(function (countryCodes) {
        let randomCountry = countryCodes[Math.floor((Math.random() * countryCodes.length))];
        console.log(randomCountry);
        console.log(randomCountry.alpha2Code);
        console.log(randomCountry.name);
        return fetch("https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles="+ randomCountry.name)
            .then(function (wikiresponse) {
                return wikiresponse.json();
            })
            .then(function (wikiSummary) {
                document.getElementById("countryinfo").innerHTML = wikiSummary;
            })
    });