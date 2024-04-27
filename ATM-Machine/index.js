#! /usr/bin/env node
import inquirer from "inquirer";
// import { question } from "readline";
// ATM
// checklist
// 1. pin code ----------------------------------OK
// 2. operation withdraw amount & balance -------OK
// 3. withdraw with list ------------------------OK
// 5. exit---------------------------------------OK
console.log("Welcome to ATM");
let myBalance = 10000; // Dollar
let myPin = 1234;
let pinVerified = false; // Flag to track if the pin is verified
while (!pinVerified) {
    let pinAnswer = await inquirer.prompt([
        {
            name: "pin",
            message: "enter Your pin",
            type: "number",
        }
    ]);
    if (pinAnswer.pin === myPin) {
        console.log("Correct pin code!!!!");
        let operationAns = await inquirer.prompt([
            {
                name: "operation",
                message: "please select option",
                type: "list",
                choices: ["withdraw", "balance"],
            }
        ]);
        if (operationAns.operation === "withdraw") {
            let listsAns = await inquirer.prompt([
                {
                    name: "lists",
                    message: "select option for withdraw",
                    type: "list",
                    choices: ["withdraw amount", "fast cash"],
                }
            ]);
            if (listsAns.lists === "withdraw amount") {
                let amount = await inquirer.prompt([
                    {
                        name: "amount",
                        message: "enter your withdraw amount",
                        type: "number",
                    }
                ]);
                if (amount.amount > myBalance) {
                    console.log("Insufficient balance");
                }
                else if (amount.amount < myBalance) {
                    console.log("Your withdraw amount is: " + amount.amount);
                    let remainingBalance = myBalance - amount.amount;
                    console.log("Your remaining balance is: " + remainingBalance);
                }
            }
            else if (listsAns.lists === "fast cash") {
                let optionAns = await inquirer.prompt([
                    {
                        name: "option",
                        message: "select your amount",
                        type: "list",
                        choices: [500, 1000, 5000, 10000],
                    }
                ]);
                let remainingListbalance = myBalance -= optionAns.option;
                console.log("Your remaining balance is: " + remainingListbalance);
            }
        }
        if (operationAns.operation === "balance") {
            console.log("Your balance is: " + myBalance);
        }
    }
    else {
        console.log("incorrect pin number!!!");
        console.log("please try again");
        console.log("Thank you for using ATM");
    }
}
