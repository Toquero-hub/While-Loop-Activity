"use strict";

const ps = require("prompt-sync");
const prompt = ps();

// Generate a random number between 1 and 10
const correctNumber = Math.floor(Math.random() * 10) + 1;

// Variable to store the user's guess
let userGuess = 0;

// While loop to keep asking for a guess until it's correct
while (userGuess !== correctNumber) {
// Prompt user for their guess
userGuess = parseInt(prompt("Guess a number between 1 and 10:"));

// Check if the guess is too high, too low, or correct
if (userGuess > correctNumber) {
console.log("Too high!");
} else if (userGuess < correctNumber) {
console.log("Too low!");
} else {
console.log("Correct!");
}
}