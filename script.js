let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
// let userSc=document.querySelector("#user-score");
// let compSc=document.querySelector("#Comp-score");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#Comp-score");


const drawgame=()=>{
    console.log("game is draw.");
    msg.innerText="Game is draw.Play Again";
    msg.style.backgroundColor="#081b31";
}
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
}
const showWinner =(userWin,userChoice,compChoice)=>{
    if(userWin) {
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win!");
        msg.innerText=`Win!Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="Green";
    }
    else {
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose!");
        msg.innerText=`Lose, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="Red";
    }
}


const playgame=(userChoice)=> {
    console.log("user choice=",userChoice);
    //generate computer choice
    const compChoice=genCompChoice();
    console.log("Comp Choice=",compChoice);
    if(userChoice===compChoice) {
        //draw game
        drawgame();
    }

    else{
        let userWin=true;
        if(userChoice==="rock") {
            //comp - scissors,paper
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper") {
            //comp - rock scissors
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            //user-scissor
            //comp-rock,paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("Choice was clicked",userChoice);
        playgame(userChoice);
    });
});
