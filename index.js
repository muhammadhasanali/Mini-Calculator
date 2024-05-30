#! /usr/bin/env node
import inquirer from 'inquirer';
console.log("\nWelcome to our Mini Calculator\n");
let myLoop = true;
while (myLoop) {
    let userInput = await inquirer.prompt([
        {
            name: "num1",
            type: "number",
            message: "Enter your first number"
        },
        {
            name: "num2",
            type: "number",
            message: "Enter your second number"
        },
        {
            name: "operator",
            type: "list",
            message: "Select your operator",
            choices: ["Addition", "Substraction", "Multiplication", "Division"]
        }
    ]);
    let { num1, num2, operator } = userInput;
    if (operator === "Addition")
        add();
    if (operator === "Substraction")
        sub();
    if (operator === "Multiplication")
        multiply();
    if (operator === "Division")
        divide();
    function add() {
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
    }
    function sub() {
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
    }
    function multiply() {
        console.log(`${num1} x ${num2} = ${num1 * num2}`);
    }
    function divide() {
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
    }
    let moreCal = await inquirer.prompt({
        name: "more",
        type: "confirm",
        message: "Do you want to do more calculations?",
        default: false
    });
    if (moreCal.more == false) {
        console.log("Thank You for using Mini Calculator!");
        myLoop = false;
    }
}
