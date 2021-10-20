let choices = ["paper", "rock", "scissors"]
let i = Math.floor(Math.random() * 3) ;
let ComChoice = choices[i];
let UserPoints = 0;
let ComPoints = 0;

function score(){
    let score_div = document.querySelector("#score").innerHTML = `${UserPoints} - ${ComPoints}`;
}

setInterval(score, 50);

function convert(word){
    if(word == "rock") return '<img src="assets/images/rocha.png">';
    if(word == "paper") return '<img src="assets/images/papel.png">';
    return '<img src="assets/images/tesoura.png">';
}

function game(userChoice){
    let box = document.querySelector(".challenge")
    box.style.display = "inline-flex";
    let userDiv = document.querySelector(".YourObject");
    userDiv.innerHTML = convert(userChoice);
    let comDiv = document.querySelector(".ComObject");
    comDiv.innerHTML = convert(ComChoice);

    if(userChoice === "paper" && ComChoice === "rock" || userChoice == "rock" && ComChoice === "scissors" || userChoice === "scissors" && ComChoice === "paper"){
        win(userChoice);
    }else if(userChoice === ComChoice){
        draw(userChoice);
    }else{
        lose(userChoice);
    }

    function continuGame(){
        i = Math.floor(Math.random() * 3);
        ComChoice = choices[i];
        box.style.display = "none";
    }
    setTimeout(continuGame, 1200);

}

function win(btn){
    UserPoints++;
    document.getElementById("who").innerHTML = "Você Ganhou";
    var btn = document.getElementById(btn);
    btn.classList.remove("btn");
    btn.classList.add("green");
    setTimeout(() =>{
        btn.classList.add("btn");
        btn.classList.remove("green");
    }, 1200);
}

function draw(btn){
    document.getElementById("who").innerHTML = "Empate";
    var btn = document.getElementById(btn);
    btn.classList.remove("btn");
    btn.classList.add("gray");
    setTimeout(() =>{
        btn.classList.add("btn");
        btn.classList.remove("gray");
    }, 1200);
}

function lose(btn){
    ComPoints++;
    document.getElementById("who").innerHTML = "Você Perdeu";
    var btn = document.getElementById(btn);
    btn.classList.remove("btn");
    btn.classList.add("red");
    setTimeout(() =>{
        btn.classList.add("btn");
        btn.classList.remove("red");
    }, 1200);
}