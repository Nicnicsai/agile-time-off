const API_KEY = "5ae2e3f221c38a28845f05b62c7b6f58f7f833c338751dfdba82444e";
let cities = ["Antwerpen", "Chicago", "Capetown"];
let testXid = "R4156906";
let lon = 4.40346;
let lat = 51.21989;
let fetchString = `http://api.opentripmap.com/0.1/en/places/geoname?name=${getCity(cities)}&apikey=${API_KEY}`;
//let fetchString = `http://api.opentripmap.com/0.1/en/places/bbox?lon_min=51.1657&lat_min=10.4515&lon_max=53.1657&lat_max=12.4515&kinds=islands&format=geojson&apikey=${API_KEY}`;
//let fetchString = `http://api.opentripmap.com/0.1/en/places/xid/${testXid}?apikey=${API_KEY}`;
//let fetchString = `http://api.opentripmap.com/0.1/en/places/xid/Q372040?apikey=${API_KEY}`;
//let fetchString = `http://api.opentripmap.com/0.1/en/places/radius?radius=50&lon=${lon.toString()}&lat=${lat.toString()}&apikey=${API_KEY}`;

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

fetchData(fetchString);