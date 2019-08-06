
function computerPlay(Comp_output) {

   var comp_choice  = Math.floor(Math.random() * 3);

   

    if(comp_choice == 0) {

        return Comp_output = "rock"

    } else if (comp_choice == 1) {

        return Comp_output = "scissors"

    } else {

        return Comp_output = "paper"
    }


}

const playerSelection = prompt("Enter Rock,Paper or scissors");
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {

    

if (playerSelection === "paper" && computerSelection === "rock") {

    

    return "Congrats you won a point"

} else if (playerSelection === "scissors" && computerSelection === "paper") {

    

    return "Congrats you won a point"

} else if (playerSelection === "rock" && computerSelection === "scissors")  {

   

    return "Congrats you won a point" 

} else if (playerSelection === "paper" && computerSelection === "scissors") {

    return "unlucky, you lost a point" 

} else if (playerSelection === "rock" && computerSelection === "paper") {

    return "unlucky, you lost a point"

} else if (playerSelection === "scissors" && computerSelection === "rock") {

    return "unlucky, you lost a point"
}



    if (playerSelection === "scissors" && computerSelection === "scissors") {

        return "this was a draw";
    }
    if (playerSelection === "rock" && computerSelection === "rock") {

        return "this was a draw";
    }
    if (playerSelection === "paper" && computerSelection === "paper") {

        return "this was a draw";
    }

}


console.log("You chose " + playerSelection + " and the computer chose " + computerSelection);

console.log(playRound(playerSelection, computerSelection));
