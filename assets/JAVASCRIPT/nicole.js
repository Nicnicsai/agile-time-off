//select template
var temp = document.getElementsByTagName("template")[0];




//show template
var clon = temp.content.cloneNode(true); //clone floats around in memory




// here append clone and therefore becomes element

document.getElementsByClassName("play-button")[0].addEventListener('click', function(){

    document.getElementById("resultsDisplay").appendChild(clon); // template cloned and put here
    //console.log(document.getElementsByClassName("resultsDisplay")[0]);
});


