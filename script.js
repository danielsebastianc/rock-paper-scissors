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
    return alert(`The score is You: ${humanScore}, Me: ${computerScore}`)
};

function playRound(humanSelection, computerSelection){
    if (humanSelection === computerSelection){
        alert(`You Pick: ${humanSelection}\nMy Pick: ${computerSelection}\nIt's a tie! No one wins`);
        return "tie"
    }else if (humanSelection === "rock" && computerSelection === "scissors" ){
        alert(`You Pick: ${humanSelection}\nMy Pick: ${computerSelection}\nYou Won! Rock beats Scissors`);
        return "human"
    }else if (humanSelection === "rock" && computerSelection === "paper"){
        alert(`You Pick: ${humanSelection}\nMy Pick: ${computerSelection}\nYou Lose! Paper beats Rock`);
        return "comp"
    }else if (humanSelection === "scissors" && computerSelection === "paper"){
        alert(`You Pick: ${humanSelection}\nMy Pick: ${computerSelection}\nYou Won! Scissors beats Paper`);
        return "human"
    }else if (humanSelection === "scissors" && computerSelection === "rock"){
        alert(`You Pick: ${humanSelection}\nMy Pick: ${computerSelection}\nYou Lose! Rock beats Scissors`);
        return "comp"
    }else if (humanSelection === "paper" && computerSelection === "rock"){
        alert(`You Won! Paper beats Rock`);
        return "human"
    }else if (humanSelection === "paper" && computerSelection === "scissors"){
        alert(`You Pick: ${humanSelection}\nMy Pick: ${computerSelection}\nYou Lose! Scissors beats Paper`);
        return "comp"
    }
};
