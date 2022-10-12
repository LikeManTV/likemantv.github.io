var answer = prompt("Vyberte: 1 (kámen), 2 (nůžky) nebo 3 (papír)");
var game = document.querySelector(".game");

var number = Math.floor(Math.random() * 3) + 1;
if(number === 1){
    botAnswer = "Kámen";
} else if(number === 2){
    botAnswer = "Nůžky";
} else if(number === 3){
    botAnswer = "Papír";
}

if(answer != null){
    if(answer === "1"){
        game.innerHTML = "Vybrali jste: Kámen <br> Počítač vybral: " + botAnswer;
    } else if(answer === "2"){
        game.innerHTML = "Vybrali jste: Nůžky <br> Pocítač vybral: " + botAnswer;
    } else if(answer === "3"){
        game.innerHTML = "Vybrali jste: Papír <br> Počítač vybral: " + botAnswer;
    } else {
        alert("Zadej číslo od 1-3!!");
    }
} else{
    alert("Zadej číslo od 1-3!!");
}

function reload() {
    location.reload();
}