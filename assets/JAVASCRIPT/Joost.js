//CONSTANTS
const FETCH_STRING_PREPEND = "http://api.opentripmap.com/0.1/en/places/"; //prepend to the openTripMap related fetches
const ACTIVITIES_RADIUS = 5000; // radius from origin point in which to search for activities (culture, restaurants, sports, ...)
const RATING = 2; //minimal rating of PoI, range from 1 (lowest) - 3 (highest), possible to limit to heritage PoI by using 1h - 3h
const MAX_RESULTS = 2; //the maximum amount of returned results
const IMG_URL_PREPEND = "https://api-gateway-becode.herokuapp.com/?goto=";
const IMG_URL_PT2 = ".wikipedia.org/w/api.php?action=query&format=json&formatversion=2&utf8=&prop=pageimages|pageterms&piprop=original&titles=";
const IMG_URL_PT1_LENGTH = "https://fr".length;
const IMG_URL_PT3_NEGATIVE_LENGTH = "https://fr.wikipedia.org/wiki/".length;

//ACTIVITY TYPES
const KINDS = ""; //setting of kinds, if you want it defined: const KINDS = "&kinds=cultural,food";

//FUNCTIONS //these will all be triggered in a waterfall way from the yannickjavascript2.js file
//Eventually gets te activities in the given city
function getFunStuff(city) {
    let fetchString = `${FETCH_STRING_PREPEND}geoname?name=${city}&apikey=${API_KEY}`;
    fetchCoordinates(fetchString);
}

//Gets the longitude and latitude of the given city
function fetchCoordinates(fetchString){
    fetch(fetchString)
        .then(function (response) {
            return response.json();
        })
        .then(function (city) {
            let lon = city.lon;
            let lat = city.lat;
            fetchActivities(lon, lat);
        })
}

//Fetches the activity XID, a unique specifier given through the OpenTripMap api
function fetchActivities(lon, lat){
    let fetchString = `${FETCH_STRING_PREPEND}radius?radius=${ACTIVITIES_RADIUS}&lon=${lon.toString()}&lat=${lat.toString()}${KINDS}&rate=${RATING}&limit=${MAX_RESULTS}&apikey=${API_KEY}`;

    fetch(fetchString)
        .then(function (response) {
            return response.json();
        })
        .then(function (activities) {
            activities.features.forEach(function (activity) {
                getActivityInfo(activity.properties.xid)
            })
        })
}

//Fetches the actual activity info (activity is a JSON object containing all the required info of said activity)
function getActivityInfo(activityXid){
    let fetchString = `${FETCH_STRING_PREPEND}xid/${activityXid}?apikey=${API_KEY}`;
    fetch(fetchString)
        .then(function (response) {
            return response.json();
        })
        .then(function (activity) {
            getWikiImgLink(activity);
        })
}

//Fetches the image from the wikipedia article belonging to the activity
function getWikiImgLink(activity) {
    //compiles the fetch string for the wikipedia rest api
    let imgUrlPt1 = activity.wikipedia.substr(0, IMG_URL_PT1_LENGTH);
    let imgUrlPt3 = activity.wikipedia.substr(IMG_URL_PT3_NEGATIVE_LENGTH, activity.wikipedia.length-IMG_URL_PT3_NEGATIVE_LENGTH);
    let fetchString = IMG_URL_PREPEND + encodeURIComponent(imgUrlPt1 + IMG_URL_PT2 + imgUrlPt3);

    fetch(fetchString)
        .then(function (response) {
            return response.json();
        })
        .then(function (wiki) {
            let imgUrl = wiki.query.pages[0].original.source;
            citySlot.src = imgUrl;
            fillTemplate(activity.name, imgUrl, activity.wikipedia_extracts.text, activity.url)
        })
}

//Function to fill up the template in the HTML file
function fillTemplate(title, imgUrl, description, url) {
    const TEMPLATE = document.querySelector("#tpl-slotmachine");
    const PLACEMENT_LOCATION = document.querySelector("#resultsDisplay");

    TEMPLATE.content.querySelector(".title-activity").innerText = title;
    TEMPLATE.content.querySelector(".img-activity").setAttribute("src", imgUrl);
    TEMPLATE.content.querySelector(".description").innerText = description;

    if (url !== undefined && url !== null) {
        TEMPLATE.content.querySelector(".link").setAttribute("href", url);
        TEMPLATE.content.querySelector(".link").innerText = url;
    } else {
        TEMPLATE.content.querySelector(".link").setAttribute("href", "");
        TEMPLATE.content.querySelector(".link").innerText = "";
    }

    let clone = TEMPLATE.content.cloneNode(true);
    PLACEMENT_LOCATION.appendChild(clone);
}