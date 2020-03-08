// Dependencies
const inquirer = require("inquirer");

// Creating inquirer pronpts
const prompt = inquirer.createPromptModule();

// Game and player variable
let game = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];
let player = "x";

// Recursive function that ask for player's choice until there is a winner
const askForMove = () => {
  prompt([
    {
      type: "list",
      name: "choice1",
      message: "Choose between: ",
      // TODO Need to remove choices after they are chosen
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
        game[0][0] = player;
        break;
      case "topMiddle":
        game[0][1] = player;
        break;
      case "topRight":
        game[0][2] = player;
        break;
      case "middleLeft":
        game[1][0] = player;
        break;
      case "middleMiddle":
        game[1][1] = player;
        break;
      case "middleRight":
        game[1][2] = player;
        break;
      case "bottomLeft":
        game[2][0] = player;
        break;
      case "bottomMiddle":
        game[2][1] = player;
        break;
      case "bottomRight":
        game[2][2] = player;
        break;
    }
    displayBoard();
    // Checks to see if there is a winner before recursive call
    // TODO There needs to be a check for a washed game
    if (checkWin() === false) {
      askForMove();
    }
  });
};

// Function that checks for a winner
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
  } else if (
    game[0][0] !== null &&
    game[0][0] === game[0][1] &&
    game[0][1] === game[0][2]
  ) {
    console.log(game[0][0] + "'s wins");
    return true;
  } else if (
    game[1][0] !== null &&
    game[1][0] === game[1][0] &&
    game[1][1] === game[1][2]
  ) {
    console.log(game[1][0] + "'s wins");
    return true;
  } else if (
    game[2][0] !== null &&
    game[2][0] === game[2][0] &&
    game[2][1] === game[2][2]
  ) {
    console.log(game[2][0] + "'s wins");
    return true;
  } else if (
    game[0][0] !== null &&
    game[0][0] === game[1][1] &&
    game[0][0] === game[2][2]
  ) {
    console.log(game[0][0] + "'s wins");
    return true;
  } else if (
    game[2][2] !== null &&
    game[2][2] === game[1][1] &&
    game[2][2] === game[2][0]
  ) {
    console.log(game[0][0] + "'s wins");
    return true;
  } else return false;
};

// Fucntion that displays the game board
const displayBoard = () => {
  console.log(game[0]);
  console.log(game[1]);
  console.log(game[2]);
};

// Runs the function that ask for a players move.
askForMove();
