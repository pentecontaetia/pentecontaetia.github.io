let topRed = 0;
let topYellow = 0;
let topGreen = 0;

let bottomRed = 0;
let bottomYellow = 0;
let bottomGreen = 0;

let counter = 1;
let inc = +1;

setInterval(update,1000);

function update() {
    if(counter == 13) {
        inc = -1;
    }
    if(counter == 1) {
        inc = +1;
    }
    if (counter >= 1 && counter <= 5) {
        topRed = 1;
        topYellow = 0.20;
        topGreen = 0.20;
        document.querySelector(".arrow-top").style.display = "block";
        document.querySelector(".arrow-bottom").style.display = "block";

        bottomRed = 0.20;
        bottomYellow = 0.20;
        bottomGreen = 1;
        document.querySelector(".arrow-left").style.display = "none";
        document.querySelector(".arrow-right").style.display = "none";
    }else if(counter == 6 || counter == 7 || counter == 8) {
        topRed = 0.20;
        topYellow = 1;
        topGreen = 0.20;
        document.querySelector(".arrow-top").style.display = "none";
        document.querySelector(".arrow-bottom").style.display = "none";

        bottomRed = 0.20;
        bottomYellow = 1;
        bottomGreen = 0.20;
        document.querySelector(".arrow-left").style.display = "none";
        document.querySelector(".arrow-right").style.display = "none";
    }else {
        topRed = 0.20;
        topYellow = 0.20;
        topGreen = 1;
        document.querySelector(".arrow-top").style.display = "none";
        document.querySelector(".arrow-bottom").style.display = "none";

        bottomRed = 1;
        bottomYellow = 0.20;
        bottomGreen = 0.20;
        document.querySelector(".arrow-left").style.display = "block";
        document.querySelector(".arrow-right").style.display = "block";
    }
    //vertical semaphors
    let reds = document.querySelectorAll(".top-red");
    for (const red of reds) {
        red.style.backgroundColor = `rgba(255,0,0,${topRed})`;
    }
    let yellows = document.querySelectorAll(".top-yellow");
    for (const yellow of yellows) {
        yellow.style.backgroundColor = `rgba(255,255,0,${topYellow})`;
    }
    let greens = document.querySelectorAll(".top-green");
    for (const green of greens) {
        green.style.backgroundColor = `rgba(0,255,0,${topGreen})`;
    }
    
    //horizontal semaphors
    let redsH = document.querySelectorAll(".bottom-red");
    for (const red of redsH) {
        red.style.backgroundColor = `rgba(255,0,0,${bottomRed})`;
    }
    let yellowsH = document.querySelectorAll(".bottom-yellow");
    for (const yellow of yellowsH) {
        yellow.style.backgroundColor = `rgba(255,255,0,${bottomYellow})`;
    }
    let greensH = document.querySelectorAll(".bottom-green");
    for (const green of greensH) {
        green.style.backgroundColor = `rgba(0,255,0,${bottomGreen})`;
    }

    document.querySelector("p").innerHTML = `${counter} red:${topRed} yellow:${topYellow} green:${topGreen}`;
    counter += inc;
}




