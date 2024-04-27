#!/usr/bin/env/node

import inquirer from "inquirer"



const   answer  :
{
    sentence :  string
}=
await   inquirer.prompt
(
    [
        {
            name    :   "sentence" ,
            type    :   "name",
            mesaage :   "Enter Your sentence to count the word",
        }
    ]
)
const   words   = answer.sentence.trim().split(" ")
console.log (words)
console.log(`Your sentence word count is ${words.length}`);
