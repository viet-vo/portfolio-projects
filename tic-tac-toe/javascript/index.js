// Dependencies
const inquirer = require("inquirer");

// Creating inquirer pronpts
const prompt = inquirer.createPromptModule();

// Game and player variable
let game = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
];
let choices = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let player = "X";

// Recursive function that ask for player's choice until there is a winner
const askForMove = () => {
  prompt([
    {
      type: "list",
      name: "choice1",
      message: "Choose between: ",
      choices: choices.filter((x) => x !== null),
    },
  ]).then((choice) => {
    switch (choice.choice1) {
      case "1":
        game[0][0] = player;
        choices[0] = null;
        break;
      case "2":
        game[0][1] = player;
        choices[1] = null;
        break;
      case "3":
        game[0][2] = player;
        choices[2] = null;
        break;
      case "4":
        game[1][0] = player;
        choices[3] = null;
        break;
      case "5":
        game[1][1] = player;
        choices[4] = null;
        break;
      case "6":
        game[1][2] = player;
        choices[5] = null;
        break;
      case "7":
        game[2][0] = player;
        choices[6] = null;
        break;
      case "8":
        game[2][1] = player;
        choices[7] = null;
        break;
      case "9":
        game[2][2] = player;
        choices[8] = null;
        break;
    }
    displayBoard();
    // Checks to see if there is a winner before recursive call
    // TODO There needs to be a check for a washed game
    if (player === "X") {
      player = "O";
    } else {
      player = "X";
    }
    if (checkWin() === false) {
      askForMove();
    }
  });
};

// Function that checks for a winner
const checkWin = () => {
  if (game[0].every((i) => i !== null && i === game[0][0])) {
    console.log(game[0][0] + "'s wins SEQ0");
    return true;
  } else if (game[1].every((i) => i !== null && i === game[1][0])) {
    console.log(game[1][0] + "'s wins SEQ1");
    return true;
  } else if (game[2].every((i) => i !== null && i === game[2][0])) {
    console.log(game[2][0] + "'s wins SEQ2");
    return true;
  } else if (
    game[0][0] !== null &&
    game[0][0] === game[1][0] &&
    game[1][0] === game[2][0]
  ) {
    console.log(game[0][0] + "'s wins SEQ3");
    return true;
  } else if (
    game[0][1] !== null &&
    game[0][1] === game[1][1] &&
    game[1][1] === game[2][1]
  ) {
    console.log(game[1][0] + "'s wins SEQ4");
    return true;
  } else if (
    game[0][2] !== null &&
    game[0][2] === game[1][2] &&
    game[1][2] === game[2][2]
  ) {
    console.log(game[2][0] + "'s wins SEQ5");
    return true;
  } else if (
    game[0][0] !== null &&
    game[0][0] === game[1][1] &&
    game[1][1] === game[2][2]
  ) {
    console.log(game[0][0] + "'s wins SEQ6");
    return true;
  } else if (
    game[0][2] !== null &&
    game[0][2] === game[1][1] &&
    game[1][1] === game[2][0]
  ) {
    console.log(game[0][0] + "'s wins SEQ7");
    return true;
  } else if (choices.every((i) => i === null)) {
    console.log("Tie game! SEQ8");
  } else return false;
};

// Fucntion that displays the game board
const displayBoard = () => {
  console.log(game[0]);
  console.log(game[1]);
  console.log(game[2]);
};

// Runs the function displayin initial board recursively ask for a players move until end of game.
displayBoard();
askForMove();
