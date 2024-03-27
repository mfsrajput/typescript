#! /usr/bin/env node
import inquirer from "inquirer";

// 1). Computer will generate a random number.-----Done 
// 2). user input for guessing a random number.----Done
// 3). compare computer input with user input.-----Done

const randomNumber = Math.floor(Math.random()*6+1);
// console.log (randomNumber)

const answers = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number between 1 to 6: ",
  },
]);

if (answers.userGuessedNumber === randomNumber){
    console.log("congratulation! you guessed right number.");
} else {
    console.log("you guessed wrong number");
}

