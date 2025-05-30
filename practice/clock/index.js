document.title = "Clock";
document.writeln('<div class="card w-100 bg-secondary text-white d-flex text-center p-5 shadow-lg">' +
            '<p class="text-white fw-bolder fs-1">CLOCK</p>' +
            '<h1 id="t" class="bg-light text-black rounded p-5 shadow-lg">00:00:00</h1>' +
            '</div>');

function fun(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    if(h < 10){
        h = "0" + h;
    }
    if(m < 10){
        m = "0" + m;
    }
    if(s < 10){
        s = "0" + s;
    }

    document.getElementById("t").innerHTML = h + ":" + m + ":" + s;
}
fun();
setInterval(fun, 1000);