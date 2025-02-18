function getComputerChoice(){
    const number = Math.floor(Math.random() * 3)
    if (number == 0){
        return "rock";
    }else if (number == 1){
        return "paper";
    }else{
        return "scissors";
    }
};

function playRound(humanSelection, computerSelection){
    const result = document.querySelector(".result")
    if (humanSelection === computerSelection){
        result.innerHTML = `You Pick: ${humanSelection}<br>My Pick: ${computerSelection}<br>It's a tie! No one wins`
        return "tie"
    }else if (humanSelection === "rock" && computerSelection === "scissors" ){
        result.innerHTML = `You Pick: ${humanSelection}<br>My Pick: ${computerSelection}<br>You Won! Rock beats Scissors`
        return "human"
    }else if (humanSelection === "rock" && computerSelection === "paper"){
        result.innerHTML = `You Pick: ${humanSelection}<br>My Pick: ${computerSelection}<br>You Lose! Paper beats Rock`
        return "comp"
    }else if (humanSelection === "scissors" && computerSelection === "paper"){
        result.innerHTML = `You Pick: ${humanSelection}<br>My Pick: ${computerSelection}<br>You Won! Scissors beats Paper`
        return "human"
    }else if (humanSelection === "scissors" && computerSelection === "rock"){
        result.innerHTML = `You Pick: ${humanSelection}<br>My Pick: ${computerSelection}<br>You Lose! Rock beats Scissors`
        return "comp"
    }else if (humanSelection === "paper" && computerSelection === "rock"){
        result.innerHTML = `You Pick: ${humanSelection}<br>My Pick: ${computerSelection}<br>You Won! Paper beats Rock`
        return "human"
    }else if (humanSelection === "paper" && computerSelection === "scissors"){
        result.innerHTML = `You Pick: ${humanSelection}<br>My Pick: ${computerSelection}<br>You Lose! Scissors beats Paper`
        return "comp"
    }
};

const buttons = document.querySelectorAll("button")
const score = document.querySelector(".score")
const winner = document.querySelector(".winner")
let humanScore = 0
let compScore = 0
buttons.forEach( button => {
    button.addEventListener("click", ()=>{
        winner.textContent = ""
        const computerChoice = getComputerChoice()
        const result = playRound( button.value, computerChoice)
        if(result === "comp"){
            compScore++
        }else if(result === "human"){
            humanScore++
        }
        score.textContent = `You: ${humanScore} Me: ${compScore}`

        if(humanScore == 5 || compScore == 5){
            if(humanScore == 5){
                winner.textContent = `YOU WON! LETS PLAY AGAIN!`
            }else{
                winner.textContent = `I WON! LETS PLAY AGAIN!`
            }
            humanScore = 0
            compScore = 0
        }
    })
});
