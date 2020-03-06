// Dependencies
const inquirer = require("inquirer");

const prompt = inquirer.createPromptModule();

let game = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

const askForMove = () => {
  prompt([
    {
      type: "list",
      name: "choice1",
      message: "Choose between: ",
      choices: ["A", "B", "C"]
    }
  ]).then(choice => console.log(choice.choice1));
};

console.log(game[0]);
console.log(game[1]);
console.log(game[2]);

askForMove();
