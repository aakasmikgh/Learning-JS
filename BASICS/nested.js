// nested if else


//guessing number game

//prompt() takes input only as a string

let winningNumber = 18;
let userGuess = +prompt("Guess a number");

// console.log(userGuess);

if(userGuess === winningNumber){
    console.log("Your guess is right!!!");
}else {
    if(userGuess < winningNumber){
        console.log("Your guess is low");
    }
    else {
        console.log("Your guess is high");
    }
}
