// Dependencies
const inquirer = require("inquirer");

const prompt = inquirer.createPromptModule();

let game = [
  [null, null, "x"],
  [null, "x", null],
  ["x", null, null]
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

const checkWin = () => {
  if (game[0].every(i => i !== null && i === game[0][0])) {
    console.log(game[0][0] + "'s wins");
  } else if (game[1].every(i => i !== null && i === game[1][0])) {
    console.log(game[1][0] + "'s wins");
  } else if (game[2].every(i => i !== null && i === game[2][0])) {
    console.log(game[2][0] + "'s wins");
  } else if (game[0][0] === game[0][1] && game[0][1] === game[0][2]) {
    console.log(game[0][0] + "'s wins");
  } else if (game[1][0] === game[1][0] && game[1][1] === game[1][2]) {
    console.log(game[1][0] + "'s wins");
  } else if (game[2][0] === game[2][0] && game[2][1] === game[2][2]) {
    console.log(game[2][0] + "'s wins");
  } else if (game[0][0] === game[1][1] && game[0][0] === game[2][2]) {
    console.log(game[0][0] + "'s wins");
  } else if (game[2][2] === game[1][1] && game[2][2] === game[2][0]) {
    console.log(game[0][0] + "'s wins");
  }
};

const displayBoard = () => {
  console.log(game[0]);
  console.log(game[1]);
  console.log(game[2]);
};

// askForMove();
displayBoard();
checkWin();
