document.write('<div class="card shadow-lg text-center p-5">' +
                '<h1 class="card-title mb-4">Stopwatch</h1>' +
                '<h2 id="x" class="display-4 mb-4 font-monospace">00:00:00:00</h2>' +
                '<div class="d-flex justify-content-center gap-2">' +
                    '<button id="a" class="btn btn-success px-4">Start</button>' +
                    '<button id="b" class="btn btn-danger px-4">Reset</button>' +
                    '<button id="c" class="btn btn-warning px-4">Stop</button>' +
                '</div>' +
                '</div>');

document.title = "Stopwatch";

let interval;
let isrunning = false;
let startTime;

document.getElementById("a").onclick = function(){
    if (!isrunning) {
        isrunning = true;
        startTime = new Date();
        interval = setInterval(update, 10);
    }
}

document.getElementById("b").onclick = function(){
    clearInterval(interval);
    isrunning = false;
    elapsedTime = 0;
    document.getElementById("x").innerHTML = "00:00:00:00";
    startTime = new Date();
}

document.getElementById("c").onclick = function(){
    if (isrunning) {
        clearInterval(interval);
        isrunning = false;
        elapsedTime = new Date(new Date() - startTime);
    }
}

function update(){
    const currentTime = new Date();
    const elapsedTime = new Date(currentTime - startTime);
    let hours = Math.floor(elapsedTime / 3600000);
    let minutes = Math.floor((elapsedTime % 3600000) / 60000);
    let seconds = Math.floor((elapsedTime % 60000) / 1000);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes; 
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;
    document.getElementById("x").innerHTML = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
}