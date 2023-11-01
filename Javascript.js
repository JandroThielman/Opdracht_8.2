function duplicate(){
    var d = Getal1 * Getal2;
    Getal1 = document.getElementById("Getal1").value;
    Getal2 = document.getElementById("Getal2").value;

    if (d <= 0) {
        document.getElementById("bereken").innerHTML = "Het getaal is te laag";
    } else {
        document.getElementById("bereken").innerHTML = d;
    }
}

function min(){
    var m = Getal1 - Getal2;
    Getal1 = document.getElementById("Getal1").value;
    Getal2 = document.getElementById("Getal2").value;

    if (m <= 0) {
        document.getElementById("bereken").innerHTML = "Het getaal is te laag";
    } else {
        document.getElementById("bereken").innerHTML = m;
    }
}

function plus(){
    var sum = Number(Getal1) + Number(Getal2);
    Getal1 = document.getElementById("Getal1").value;
    Getal2 = document.getElementById("Getal2").value;

    if (sum <= 0) {
        document.getElementById("bereken").innerHTML = "Het getaal is te laag";
    } else {
        document.getElementById("bereken").innerHTML = sum;
    }
}

function delen(){
    var x = Getal1 / Getal2;
    Getal1 = document.getElementById("Getal1").value;
    Getal2 = document.getElementById("Getal2").value;
    
    if (x <= 0) {
        document.getElementById("bereken").innerHTML = "Het getaal is te laag";
    } else {
        document.getElementById("bereken").innerHTML = x;
    }
}