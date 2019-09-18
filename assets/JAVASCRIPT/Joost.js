//CONSTANTS
const FETCH_STRING_PREPEND = "http://api.opentripmap.com/0.1/en/places/"; //prepend to the openTripMap related fetches
const ACTIVITIES_RADIUS = 500; // radius from origin point in which to search for activities (culture, restaurants, sports, ...)
const RATING = 2; //minimal rating of PoI, range from 1 (lowest) - 3 (highest), possible to limit to heritage PoI by using 1h - 3h

//Placeholder inputs
let kinds = "restaurants,cultural";
let cities = ["Antwerpen", "Chicago", "Capetown"];
let testXid = "R4156906";
//let lon = 4.40346;
//let lat = 51.21989;
let dropDownInput = "europe";

/*
//
//let fetchString = `${FETCH_STRING_PREPEND}geoname?name=${getCity(cities)}&apikey=${API_KEY}`;
//let fetchString = `${FETCH_STRING_PREPEND}bbox?lon_min=4.40346&lat_min=51.21989&lon_max=4.60346&lat_max=51.31989&kinds=restaurants&format=geojson&apikey=${API_KEY}`; //fetches restaurants in bounding box area
//let fetchString = `${FETCH_STRING_PREPEND}xid/${testXid}?apikey=${API_KEY}`;
//let fetchString = `${FETCH_STRING_PREPEND}xid/Q372040?apikey=${API_KEY}`;
//let fetchString = `${FETCH_STRING_PREPEND}radius?radius=500&lon=${lon.toString()}&lat=${lat.toString()}&apikey=${API_KEY}`;
*/
/*
//Basic Fetch Data function
function fetchData(fetchString){
    fetch(fetchString)
        .then(function (response) {
            return response.json();
        })
        .then(function (touristInfo) {
            console.log(touristInfo)
        })
}
//fetchData(fetchString);*/

function getCity(cities) {
    return cities[Math.round(Math.random()*(cities.length-1))];
}
//console.log(getCity(cities));

function getCoordinates(city) {
    let fetchString = `${FETCH_STRING_PREPEND}geoname?name=${city}&apikey=${API_KEY}`;
    fetchCoordinates(fetchString);
}

function fetchCoordinates(fetchString){
    fetch(fetchString)
        .then(function (response) {
            return response.json();
        })
        .then(function (city) {
            console.log(city);
            let lon = city.lon;
            let lat = city.lat;
            fetchActivities(lon, lat);
        })
}

function fetchActivities(lon, lat){
    let fetchString = `${FETCH_STRING_PREPEND}radius?radius=${ACTIVITIES_RADIUS}&lon=${lon.toString()}&lat=${lat.toString()}&kinds=${kinds}&rate=${RATING}&apikey=${API_KEY}`;

    fetch(fetchString)
        .then(function (response) {
            return response.json();
        })
        .then(function (activities) {
            console.log(activities);
            activities.features.forEach(function (activity) {
                console.log(activity.properties.kinds);
                console.log(activity.properties.xid)
            })
        })
}

function getActivityInfo(activity)

getCapital(dropDownInput)
    .then(capital => {
        console.log(capital);
        getCoordinates(capital)
    });