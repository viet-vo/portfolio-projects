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
      choices: [
        "topLeft",
        "topMiddle",
        "topRight",
        "middleLeft",
        "middleMiddle",
        "middleRight",
        "bottomLeft",
        "bottomMiddle",
        "bottomRight"
      ]
    }
  ]).then(choice => {
    switch (choice.choice1) {
      case "topLeft":
        game[0][0] === "x";
        break;
      case "topMiddle":
        game[0][1] === "x";
        break;
      case "topRight":
        game[0][2] === "x";
        break;
      case "middleLeft":
        game[1][0] === "x";
        break;
      case "middleMiddle":
        game[1][1] === "x";
        break;
      case "middleRight":
        game[1][2] === "x";
        break;
      case "bottomLeft":
        game[2][0] === "x";
        break;
      case "bottomMiddle":
        game[2][1] === "x";
        break;
      case "bottomRight":
        game[2][2] === "x";
        break;
    }
  });
};

const checkWin = () => {
  if (game[0].every(i => i !== null && i === game[0][0])) {
    console.log(game[0][0] + "'s wins");
    return true;
  } else if (game[1].every(i => i !== null && i === game[1][0])) {
    console.log(game[1][0] + "'s wins");
    return true;
  } else if (game[2].every(i => i !== null && i === game[2][0])) {
    console.log(game[2][0] + "'s wins");
    return true;
  } else if (game[0][0] === i !== null && game[0][1] && game[0][1] === game[0][2]) {
    console.log(game[0][0] + "'s wins");
    return true;
  } else if (game[1][0] === i !== null && game[1][0] && game[1][1] === game[1][2]) {
    console.log(game[1][0] + "'s wins");
    return true;
  } else if (game[2][0] === i !== null && game[2][0] && game[2][1] === game[2][2]) {
    console.log(game[2][0] + "'s wins");
    return true;
  } else if (game[0][0] === i !== null && game[1][1] && game[0][0] === game[2][2]) {
    console.log(game[0][0] + "'s wins");
    return true;
  } else if (game[2][2] === i !== null && game[1][1] && game[2][2] === game[2][0]) {
    console.log(game[0][0] + "'s wins");
    return true;
  } else return false;
};

const displayBoard = () => {
  console.log(game[0]);
  console.log(game[1]);
  console.log(game[2]);
};

do {
  displayBoard();
  askForMove();
} while (checkWin() !== true);
