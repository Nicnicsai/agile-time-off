let cities = ["Antwerpen", "Chicago", "Capetown"];
let testXid = "R4156906";
let lon = 4.40346;
let lat = 51.21989;
let dropDownInput = "europe";
//let fetchString = `http://api.opentripmap.com/0.1/en/places/geoname?name=${getCity(cities)}&apikey=${API_KEY}`;
//let fetchString = `http://api.opentripmap.com/0.1/en/places/bbox?lon_min=4.40346&lat_min=51.21989&lon_max=4.60346&lat_max=51.31989&kinds=restaurants&format=geojson&apikey=${API_KEY}`;
//let fetchString = `http://api.opentripmap.com/0.1/en/places/xid/${testXid}?apikey=${API_KEY}`;
//let fetchString = `http://api.opentripmap.com/0.1/en/places/xid/Q372040?apikey=${API_KEY}`;
//let fetchString = `http://api.opentripmap.com/0.1/en/places/radius?radius=500&lon=${lon.toString()}&lat=${lat.toString()}&apikey=${API_KEY}`;
//fetchData(fetchString);

function fetchData(fetchString){
    fetch(fetchString)
        .then(function (response) {
            return response.json();
        })
        .then(function (touristInfo) {
            console.log(touristInfo)
        })
}
function getCity(cities) {
    return cities[Math.round(Math.random()*(cities.length-1))];
}

getCapital(dropDownInput)
    .then(capital => {
        console.log(capital);
    });

//console.log(fetchCountry(dropDownInput));

//fetchData(fetchCountry(dropDownInput));