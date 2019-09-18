
 (function fillTemplate () {
//
     document.getElementById("run").addEventListener("click", function () {
//
//l
//
               document.getElementById('city-img').src = 'https://gocity.com/new-york/sites/g/files/ufrfmb171/files/styles/tile/public/New-York-skyline_0.jpg';
               document.getElementById('city-name').innerText = 'NEW YORK';
               document.getElementById('city-info').innerText = 'I was just trying to sudo apt update and sudo apt upgrade when an error with one of the packages (linux-headers-4.15.0-64-generic) started to appear, saying something about unmet dependencies. After ...';
//
//
    });

 })();

/*
const btn = document.querySelector('#randomizeButton');
const results = {
    machine1: document.querySelector('#machine1Result'),
    machine2: document.querySelector('#machine2Result'),
    machine3: document.querySelector('#machine3Result')
};
const el1 = document.querySelector('#machine1');
const el2 = document.querySelector('#machine2');
const el3 = document.querySelector('#machine3');
const machine1 = new SlotMachine(el1, { active: 0 });
const machine2 = new SlotMachine(el2, { active: 1 });
const machine3 = new SlotMachine(el3, { active: 2 });
function onComplete(active){
    results[this.element.id].innerText = `Index: ${this.active}`;
}
btn.addEventListener('click', () => {
    machine1.shuffle(5, onComplete);
    setTimeout(() => machine2.shuffle(5, onComplete), 500);
    setTimeout(() => machine3.shuffle(5, onComplete), 1000);
});*/