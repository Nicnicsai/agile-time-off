//CONSTANTS
const FETCH_STRING_PREPEND = "http://api.opentripmap.com/0.1/en/places/"; //prepend to the openTripMap related fetches
const ACTIVITIES_RADIUS = 5000; // radius from origin point in which to search for activities (culture, restaurants, sports, ...)
const RATING = 2; //minimal rating of PoI, range from 1 (lowest) - 3 (highest), possible to limit to heritage PoI by using 1h - 3h
const MAX_RESULTS = 2; //the maximum amount of returned results
const IMG_URL_PREPEND = "https://api-gateway-becode.herokuapp.com/?goto=";
//const IMG_URL_PT1 = "https://";
const IMG_URL_PT2 = ".wikipedia.org/w/api.php?action=query&format=json&formatversion=2&utf8=&prop=pageimages|pageterms&piprop=original&titles=";
const IMG_URL_PT1_LENGTH = "https://fr".length;
const IMG_URL_PT3_NEGATIVE_LENGTH = "https://fr.wikipedia.org/wiki/".length;

//ACTIVITY TYPES
let kinds = "&kinds=cultural"; //setting of kinds
kinds = ""; //resetting of kinds

//FUNCTIONS

//Placeholder inputs
//let cities = ["Antwerpen", "Chicago", "Capetown"];
//let testXid = "R4156906";
//let lon = 4.40346;
//let lat = 51.21989;
//let dropDownInput = "europe";

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

/*
//deprecated
function getCity(cities) {
    return cities[Math.round(Math.random()*(cities.length-1))];
}*/
//console.log(getCity(cities));

function getFunStuff(city) {
    let fetchString = `${FETCH_STRING_PREPEND}geoname?name=${city}&apikey=${API_KEY}`;
    fetchCoordinates(fetchString);
}

function fetchCoordinates(fetchString){
    fetch(fetchString)
        .then(function (response) {
            return response.json();
        })
        .then(function (city) {
            console.log(city);//show city
            let lon = city.lon;
            let lat = city.lat;
            fetchActivities(lon, lat);
        })
}

function fetchActivities(lon, lat){
    let fetchString = `${FETCH_STRING_PREPEND}radius?radius=${ACTIVITIES_RADIUS}&lon=${lon.toString()}&lat=${lat.toString()}${kinds}&rate=${RATING}&limit=${MAX_RESULTS}&apikey=${API_KEY}`;

    fetch(fetchString)
        .then(function (response) {
            return response.json();
        })
        .then(function (activities) {
            //console.log(activities);//show generated list of activities
            activities.features.forEach(function (activity) {
                //console.log(activity.properties.kinds);//show kinds of activity
                //console.log(activity.properties.xid);//show xid of the activity
                getActivityInfo(activity.properties.xid)

            })
        })
}

function getActivityInfo(activityXid){
    let fetchString = `${FETCH_STRING_PREPEND}xid/${activityXid}?apikey=${API_KEY}`;
    fetch(fetchString)
        .then(function (response) {
            return response.json();
        })
        .then(function (activity) {
            /*console.log("NEW ACTIVITY");
            console.log(activity);
            console.log(activity.name);
            console.log(activity.image);
            console.log(activity.url);
            console.log(activity.wikipedia_extracts.title);
            console.log(activity.wikipedia_extracts.text);*/

            getWikiImgLink(activity);

            //fillTemplate(activity.name, activity.image, activity.wikipedia_extracts.text, activity.url)
        })
}
function getWikiImgLink(activity) {
    //console.log("wiki link");
    //console.log(activity.wikipedia);
    let imgUrlPt1 = activity.wikipedia.substr(0,IMG_URL_PT1_LENGTH);
    let imgUrlPt3 = activity.wikipedia.substr(IMG_URL_PT3_NEGATIVE_LENGTH, activity.wikipedia.length-IMG_URL_PT3_NEGATIVE_LENGTH);
    let fetchString = IMG_URL_PREPEND + encodeURIComponent(imgUrlPt1 + IMG_URL_PT2 + imgUrlPt3);
    //console.log(fetchString);

    fetch(fetchString)
        .then(function (response) {
            return response.json();
        })
        .then(function (wiki) {
            let imgUrl = wiki.query.pages[0].original.source;

            console.log("NEW ACTIVITY");
            console.log(activity.name);
            console.log(imgUrl);
            fillTemplate(activity.name, imgUrl, activity.wikipedia_extracts.text, activity.url)
        })

}

function fillTemplate(title, imgUrl, description, url) {
    let template = document.querySelector("#tpl-slotmachine");
    let placementLocation = document.querySelector("#resultsDisplay");
    //Need to prepend img link with : https://api-gateway-becode.herokuapp.com/?goto=
    //In order to prevent CORB warnings / conflicts
    //let adjustedImgUrl = IMG_URL_PREPEND.concat(encodeURI(imgUrl));
    //let adjustedImgUrl = imgUrl;
    //console.log(adjustedImgUrl);

    template.content.querySelector(".title-activity").innerText = title;
    template.content.querySelector(".img-activity").setAttribute("src", imgUrl);
    template.content.querySelector(".description").innerText = description;

    if (url !== undefined && url !== null) {
        template.content.querySelector(".link").setAttribute("href", url);
        template.content.querySelector(".link").innerText = url;
    } else {
        template.content.querySelector(".link").setAttribute("href", "");
        template.content.querySelector(".link").innerText = "";
    }

    let clone = template.content.cloneNode(true);
    placementLocation.appendChild(clone);
}

/*getCapital(dropDownInput)
    .then(capital => {
        console.log(capital);
        getCoordinates(capital)
    });*/