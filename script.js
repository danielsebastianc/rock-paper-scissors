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

function getHumanChoice(){
    const choice = prompt(
        "Let's play rock paper scissors! Please type in what hand do you want to play with"
    )
    return choice.toLowerCase();
};

function displayScore(humanScore, computerScore){
    return console.log(`The score is You: ${humanScore}, Me: ${computerScore}`)
};

function playRound(humanSelection, computerSelection){
    console.log(`You Pick: ${humanSelection}`);
    console.log(`My Pick: ${computerSelection}`);

    if (humanSelection === computerSelection){
        console.log("It's a tie! No one wins");
        return "tie"
    }else if (humanSelection === "rock" && computerSelection === "scissors" ){
        console.log("You Won! Rock beats Scissors");
        return "human"
    }else if (humanSelection === "rock" && computerSelection === "paper"){
        console.log("You Lose! Paper beats Rock");
        return "comp"
    }else if (humanSelection === "scissors" && computerSelection === "paper"){
        console.log("You Won! Scissors beats Paper");
        return "human"
    }else if (humanSelection === "scissors" && computerSelection === "rock"){
        console.log("You Lose! Rock beats Scissors");
        return "comp"
    }else if (humanSelection === "paper" && computerSelection === "rock"){
        console.log("You Won! Paper beats Rock");
        return "human"
    }else if (humanSelection === "paper" && computerSelection === "scissors"){
        console.log("You Lose! Scissors beats Paper");
        return "comp"
    }
};

function playGame(rounds){
    let humanScore = 0;
    let computerScore = 0;
    let round = 1
    
    do{
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
    
        if(result === "human"){
            humanScore += 1;
        }else if(result === "comp"){
            computerScore += 1;
        }
        
        displayScore(humanScore, computerScore);
        round ++;
    }while(round <= rounds);

    console.log(`Game Ends! Final Score is You: ${humanScore}, Me: ${computerScore}`)
}


playGame(5)