const continentSlot = document.getElementById("continentImg");
const countrySlot = document.getElementById("countryImg");
const citySlot = document.getElementById("cityImg");

let continentArr = [
    "assets/images/Africa.png",
    "assets/images/Asia.png",
    "assets/images/Europe.png",
    "assets/images/NorthAmerica.png",
    "assets/images/Oceania.png",
    "assets/images/SouthAmerica.png"
];

let contValArr = [
    "africa",
    "asia",
    "europe",
    "americas",
    "oceania",
    "americas"
];

let i = 0;
function continentSpin() {
    //console.log(continentArr[i]);
    if (i < continentArr.length-1) {
        i++;
        continentSlot.setAttribute("value", contValArr[i]);
        continentSlot.src = continentArr[i];
    } else if (i === continentArr.length-1) {
        i = 0;
        continentSlot.setAttribute("value", contValArr[i]);
        continentSlot.src = continentArr[i];
    }
}

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

let j=0;
function countrySpin() {
    if (j < flagArr.length-1) {
        j++;
        countrySlot.src = flagArr[j];
    } else if (j === flagArr.length-1) {
        j = 0;
        countrySlot.src = flagArr[j];
    }
}

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

let k=0;
function citySpin() {
    if (k < cityArr.length-1) {
        k++;
        citySlot.src = cityArr[j];
    } else if (k === cityArr.length-1) {
        k = 0;
        citySlot.src = cityArr[k];
    }
}



let spinButton = document.getElementById("play-button");
let results = document.getElementById("resultsDisplay");
const orgValResults = results.innerHTML;
spinButton.addEventListener("click", function () {
    if (spinButton.innerText === "START SPINNING!") {
        results.innerHTML = orgValResults;
        continentSlotInterval = setInterval(continentSpin, 100);
        countrySlotInterval = setInterval(countrySpin, 100);
        citySlotInterval = setInterval(citySpin, 100);
        spinButton.innerText = "STOP SPINNING!";
    } else if(spinButton.innerText === "STOP SPINNING!") {
        stopSpinner(continentSlotInterval);
        fetchCountry(continentSlot.getAttribute("value"));
        stopSpinner(countrySlotInterval);
        stopSpinner(citySlotInterval);
        spinButton.innerText = "START SPINNING!";
    }
});

function stopSpinner (interval) {
    clearInterval(interval);
}

/*function slotAnimation {
    document.querySelectorAll("div #rectangle").setAttribute(class = "rectangle animation")
}*/