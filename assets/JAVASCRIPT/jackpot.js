//CONSTANTS
//slot assignment
const continentSlot = document.getElementById("continentImg");
const countrySlot = document.getElementById("countryImg");
const citySlot = document.getElementById("cityImg");
const spinButton = document.getElementById("play-button");
const results = document.getElementById("resultsDisplay");
const orgValResults = results.innerHTML;
//Array of continent images
const continentArr = [
    "assets/images/Africa.png",
    "assets/images/Asia.png",
    "assets/images/Europe.png",
    "assets/images/NorthAmerica.png",
    "assets/images/Oceania.png",
    "assets/images/SouthAmerica.png"
];
//Array of continent names
const contValArr = [
    "africa",
    "asia",
    "europe",
    "americas",
    "oceania",
    "americas"
];

//Global variables (iterators & counters)
let i = 0,
    j = 0,
    k = 0;

//Set up the array of flags, just to spin through
flagArr = [
    "assets/images/countryslot/Zimbabwe.svg",
    "assets/images/countryslot/Japan.svg",
    "assets/images/countryslot/Belgium.svg",
    "assets/images/countryslot/USA.svg",
    "assets/images/countryslot/Australia.svg",
    "assets/images/countryslot/Colombia.svg",
    "assets/images/countryslot/Ethiopia.svg",
    "assets/images/countryslot/China.svg",
    "assets/images/countryslot/Netherlands.svg",
    "assets/images/countryslot/Canada.svg",
    "assets/images/countryslot/NZ.svg",
    "assets/images/countryslot/Venezuela.svg"
];
//Set up the array of city images, just to spin through
cityArr = [
    "assets/images/cityslot/harare.jpg",
    "assets/images/cityslot/tokyo.jpg",
    "assets/images/cityslot/brussels.jpg",
    "assets/images/cityslot/newyork.jpg",
    "assets/images/cityslot/melbourne.jpg",
    "assets/images/cityslot/bogota.jpg",
    "assets/images/cityslot/addisabbea.jpg",
    "assets/images/cityslot/beijing.jpg",
    "assets/images/cityslot/amsterdam.jpg",
    "assets/images/cityslot/montreal.jpg",
    "assets/images/cityslot/nz.jpg",
    "assets/images/cityslot/caracas.jpg"
];

//"Spin" through the continents
function continentSpin() {
    if (i < continentArr.length-1) {
        i++;
        continentSlot.setAttribute("value", contValArr[i]);
        continentSlot.src = continentArr[i];
    } else if (i === continentArr.length-1) {
        i = 0; //reset i
        continentSlot.setAttribute("value", contValArr[i]);
        continentSlot.src = continentArr[i];
    }
}

//"Spin" through the countries
function countrySpin() {
    if (j < flagArr.length-1) {
        j++;
        countrySlot.src = flagArr[j];
    } else if (j === flagArr.length-1) {
        j = 0;
        countrySlot.src = flagArr[j];
    }
}

//"Spin" through the cities
function citySpin() {
    if (k < cityArr.length-1) {
        k++;
        citySlot.src = cityArr[j];
    } else if (k === cityArr.length-1) {
        k = 0;
        citySlot.src = cityArr[k];
    }
}

//Run upon clicking of the SPIN button
spinButton.addEventListener("click", function () {
    if (spinButton.innerText === "START SPINNING!") {
        results.innerHTML = orgValResults;
        document.getElementById("continent-text").innerText = "CONTINENT";
        document.getElementById("country-text").innerText = "COUNTRY";
        document.getElementById("city-text").innerText = "CITY";

        stopAnimation();

        continentSlotInterval = setInterval(continentSpin, 100);
        countrySlotInterval = setInterval(countrySpin, 100);
        citySlotInterval = setInterval(citySpin, 100);
        spinButton.innerText = "STOP SPINNING!";
    } else if(spinButton.innerText === "STOP SPINNING!") {
        stopSpinner(continentSlotInterval);

        slotAnimation();

        fetchCountry(continentSlot.getAttribute("value"));
        document.getElementById("continent-text").innerText = (continentSlot.getAttribute("value")).toUpperCase();
        stopSpinner(countrySlotInterval);
        stopSpinner(citySlotInterval);
        spinButton.innerText = "START SPINNING!";
    }
});

//Stops the spinning of a slot by clearing the interval
function stopSpinner (interval) {
    clearInterval(interval);
}

//Starts the slot animation (blinking through the animation class)
function slotAnimation() {
    document.querySelectorAll(".rectangle")[0].setAttribute("class", "rectangle animation");
    document.querySelectorAll(".rectangle")[1].setAttribute("class", "rectangle animation");
    document.querySelectorAll(".rectangle")[2].setAttribute("class", "rectangle animation");
}

//Stops the slot animation (blinking through the animation class)
function stopAnimation() {
    document.querySelectorAll(".rectangle")[0].setAttribute("class", "rectangle");
    document.querySelectorAll(".rectangle")[1].setAttribute("class", "rectangle");
    document.querySelectorAll(".rectangle")[2].setAttribute("class", "rectangle");
}