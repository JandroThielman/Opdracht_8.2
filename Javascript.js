var d;
var m;
var sum;
var d;

function duplicate(){
    var d = Getal1 * Getal2;
    Getal1 = document.getElementById("Getal1").value;
    Getal2 = document.getElementById("Getal2").value;
    document.getElementById("bereken").innerHTML = d;
}

function min(){
    var m = Getal1 - Getal2;
    Getal1 = document.getElementById("Getal1").value;
    Getal2 = document.getElementById("Getal2").value;
    document.getElementById("bereken").innerHTML = m;
}

function plus(){
    var sum = Number(Getal1) + Number(Getal2);
    Getal1 = document.getElementById("Getal1").value;
    Getal2 = document.getElementById("Getal2").value;
    document.getElementById("bereken").innerHTML = sum;
}

function delen(){
    var d = Getal1 / Getal2;
    Getal1 = document.getElementById("Getal1").value;
    Getal2 = document.getElementById("Getal2").value;
    document.getElementById("bereken").innerHTML = d;
}