#!/usr/env node
import inquirer from "inquirer";
const output = await inquirer.prompt([{ message: "Enter 1st number", type: "number", name: "firstNumber" },
    { message: "Enter 2nd number", type: "number", name: "secondNumber" },
    { message: "Select operator", type: "list", name: "operator", choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// Conditional Statement
if (output.operator === "Addition") {
    console.log(output.firstNumber + output.secondNumber);
}
else if (output.operator === "Subtraction") {
    console.log(output.firstNumber - output.secondNumber);
}
else if (output.operator === "Multiplication") {
    console.log(output.firstNumber * output.secondNumber);
}
else if (output.operator === "Division") {
    console.log(output.firstNumber / output.secondNumber);
}
else {
    console.log("Please select valid operator");
}
