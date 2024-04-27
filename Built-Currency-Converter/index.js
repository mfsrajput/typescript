import inquirer from "inquirer";
import chalk from "chalk";
//Define the list of currencies and their exchange rates
let exchangeRate = {
    USD: 1, //Base Currency
    EUR: 0.9, //European Currency(Euro)
    GBP: 0.8, //British Currency(Pound)
    INR: 80, //Indian Currency(Rupee)
    CNY: 65, //Chinese Currency(Yuan)
    JPY: 110, //Japanese Currency(Yen)
    CZK: 25, //Czech Currency(Koruna)
    DKK: 6, //Danish Currency(Krone)
    CAD: 1.3, //Canadian Currency(Dollar)
    CHF: 1.1, //Swiss Currency(Franc)
    SEK: 8, //Swedish Currency(Krona)
    AUD: 1.2, //Australian Currency(Dollar)
    HKD: 7, //Hong Kong Currency(Dollar)
    SGD: 1.3, //Singapore Currency(Dollar)
    MXN: 20, //Mexican Currency(Peso)
    NZD: 1.1, //New Zealand Currency(Dollar)
    BRL: 5, //Brazilian Currency(Real)
    PKR: 220, //Pakistani Currency(Rupee)
    //Add more currencies and their exchange rates here
};
//prompt the user to enter the base currency and the target currency.
let user_Answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.yellow("Select the currency to convert from:"),
        choices: [
            "USD",
            "EUR",
            "GBP",
            "INR",
            "CNY",
            "JPY",
            "CZK",
            "DKK",
            "CAD",
            "CHF",
            "SEK",
            "AUD",
            "HKD",
            "SGD",
            "MXN",
            "NZD",
            "BRL",
            "PKR",
        ],
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.green("Select the currency to convert into:"),
        choices: [
            "USD",
            "EUR",
            "GBP",
            "INR",
            "CNY",
            "JPY",
            "CZK",
            "DKK",
            "CAD",
            "CHF",
            "SEK",
            "AUD",
            "HKD",
            "SGD",
            "MXN",
            "NZD",
            "BRL",
            "PKR",
        ],
    },
    {
        name: "amount",
        type: "number",
        message: chalk.blue("Enter the amount to convert:"),
    },
]);
//Perform currency conversion by using formula
let from_amount = exchangeRate[user_Answer.from_currency];
let to_amount = exchangeRate[user_Answer.to_currency];
let amount = user_Answer.amount;
//Formula for currency conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//Display the Converted Amount
console.log(`Converted Amount : = ${chalk.cyan(converted_amount.toFixed(2))}`);
