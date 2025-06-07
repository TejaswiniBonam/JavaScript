document.writeln(`<div class=" card bg-dark flex-column justify-content-center align-items-center d-flex p-5">` +

    `<div class=" w-100 d-flex justify-content-around p-5 gap-5">` +
    `<button id="rock" class="btn btn-light rounded-circle p-5 fw-bolder" onclick="solve('rock')">Rock</button>` +
    `<button id="paper" class="btn btn-light rounded-circle p-5 fw-bolder" onclick = "solve('paper')">Paper</button>` +
    `<button id="scissors" class="btn btn-light rounded-circle p-5 fw-bolder" onclick = "solve('scissors')">Scissors</button>` +
    `</div>` +

    `<div class="result">` +
    `<h1 id="moves" class="text-white text-center p-5"> Moves </h1>` +
    `<h1 id="result" class="text-white text-center p-5">Result will be displayed here</h1>` +
    `</div>` +
    `</div>`);

document.title = "Rock Paper Scissors";
//const status1 = JSON.parse(localStorage.getItem('status')) || {
const status1 = JSON.parse(sessionStorage.getItem('status')) || {
    win: 0,
    lose: 0,
    tie: 0
};
// Here OR tends to storw DEFAULT VALU
function solve(us) {

    let comp = "";
    comp = computerMove();
    console.log("User: " + us + "----- Computer: " + comp);
    document.getElementById("moves").innerHTML = "User: " + us + "<br>Computer: " + comp;
    if (us == comp) {
        //alert("It's a tie!");
        document.getElementById("moves").innerHTML += "<br>It's a tie!";
        status1.tie++;
    } else if (us == "rock" && comp == "scissors") {
        //alert("You win! Rock crushes scissors.");
        document.getElementById("moves").innerHTML += "<br>You win!";
        status1.win++;
    } else if (us == "paper" && comp == "rock") {
        //alert("You win! Paper covers rock.");
        document.getElementById("moves").innerHTML += "<br>You win!";
        status1.win++;
    } else if (us == "scissors" && comp == "paper") {
        //alert("You win! Scissors cut paper.");
        document.getElementById("moves").innerHTML += "<br>You win!";
        status1.win++;
    } else {
        //alert("You lose! " + comp + " beats " + us);
        document.getElementById("moves").innerHTML += "<br>You lose! ";
        status1.lose++;
    }
    console.log("Wins: " + status1.win + ", Losses: " + status1.lose + ", Ties: " + status1.tie);
    document.getElementById("result").innerHTML = "Wins: " + status1.win + ", Losses: " + status1.lose + ", Ties: " + status1.tie;
    sessionStorage.setItem('status', JSON.stringify(status1));
    //localStorage.setItem('status', JSON.stringify(status1));

}
function ranNum() {
    let num = Math.floor(Math.random() * 3) + 1;
    return num;
}
function computerMove() {
    num = ranNum();
    if (num == 1) {
        return "rock";
    } else if (num == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}
