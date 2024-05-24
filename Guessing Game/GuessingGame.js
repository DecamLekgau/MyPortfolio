let secret = Math.floor(Math.random() * 20) + 1;
let guess;
let tries = 5;

while (tries > 0) {
    guess = prompt("Please guess the secret number (1-20).\nYou have " + tries + " tries!");

   
    if (guess === null) {
        alert("Sorry to see you leaving.\nThe answer was " + secret);
        break;
    }

    guess = parseInt(guess);

    if (isNaN(guess)) {
        alert("Please enter a valid number!");
    } else if (guess > secret) {
        alert("Incorrect guess. Number too high!");
        tries--;
    } else if (guess < secret) {
        alert("Incorrect guess. Number too low!");
        tries--;
    } else {
        alert("Congratulations!\nYou guessed correctly.\nThe answer is: " + secret + "!");
        break;
    }
}

if (tries === 0) {
    alert("You ran out of tries.\nThe correct number was " + secret + "!");
}