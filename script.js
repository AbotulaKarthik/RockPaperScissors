let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoredisp = document.querySelector("#plyr-score");
const compScoredisp = document.querySelector("#com-score");

const back =document.querySelector(".select");

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log("user choice = ",userChoice);
        playGame(userChoice);
    })
})

const playGame = (userChoice) =>{
    const compChoice = generateComchoice();
    console.log("computer choice = ",compChoice);

    if (userChoice === compChoice){
        matchDraw();
    }else{
        let usrwin = true;
        if(userChoice === "rock"){
            usrwin = compChoice === "paper"?false:true;
        }else if (userChoice === "paper"){
            usrwin = compChoice === "scissors"?false:true;
        }else{
            usrwin = compChoice === "rock"?false:true;
        }
        showWinner(usrwin);
    }
}
const showWinner = (usrwin) =>{
    if (usrwin){
        userScore++;
        userScoredisp.innerText = userScore;
        msg.innerText = "Player WON"
        back.style.backgroundColor = "green";
    }else{
        compScore++;
        compScoredisp.innerText = compScore;
        msg.innerText = "Player LOST"
        back.style.backgroundColor = "red";
    }
}
const generateComchoice = () =>{
    let options = ["rock","paper","scissors"];
    const ranindx = Math.floor(Math.random()*3);
    return options[ranindx]
}
const matchDraw = () =>{
    msg.innerText = "DRAWN !"
    back.style.backgroundColor = "grey"
}
