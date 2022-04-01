
import { Util } from "./Util.js";
import { SudokuUtil } from "./SudokuUtil.js";




const charFreq = new Array(26).fill(0);
const Row = 9, Col = 9;
const val = 0;
// updates board size
const board = Array.from(Array(Row), () => Array(Col).fill(val));
// console.log(board);

function isValidPlace(grid, row, column, number ) {
    // console.log()
    let i = 0
    let currentCellRow = grid[i][column];

    for (;i < grid.length; ++i) {
        if (currentCellRow === number) {
          return false;
        }
      }

      let currentCellCol = grid[row][i];

      for (; i < grid.length; ++i) {
        if (currentCellCol === number) {
          return false;
        }
      }

      let localBoxRow = row - (row % 3);
      let localBoxCol = column - (column % 3);
      let j;

      for (i = localBoxRow; i < localBoxRow + 3; ++i) {
        for (j = localBoxCol; j < localBoxCol + 3; ++j) {
          let currentCheck= grid[i][j];

          if (currentCheck === number) {
            return false;
          }
        }
      }
      return true;
    }



function gameSolver(gameBoard) {

    // console.log(gaameBoard.length);

    //row ---------------------------

    // col V

    for (let row = 0; row < gameBoard.length; ++row) {
        for (let col = 0; col < gameBoard.length; ++col) {
            let currentCell = gameBoard[row][col];

          if (currentCell === 0) {
            for (let guess = 1; guess <= gameBoard.length + 1; ++guess) {
              if (isValidPlace(gameBoard, row, col, guess)) {
                gameBoard[row][col] = guess;
                if (gameSolver(gameBoard)) {
                  return true;
                }
                currentCell = 0; // gameBoard[row][col]
              }
            }
            return false;
          }
        }
      }
      return true;
}

function createPuzzle() {
  let puzzle = getRandomSudoku();
  // let puzzle = []
  let solution = gameSolver(puzzle);
  if (solution) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (Math.random() > 0.3) puzzle[i][j] = 0;
      }
    }
  }
  return puzzle;
}

function getRandomSudoku() {
  const randomSudoku = [];
  for (let i = 0; i < 9; i++) {
    randomSudoku[i] = Array(9).fill(0);
  }
  for (let i = 0; i < 8; i++) {
    let number = Math.floor(Math.random() * 8) + 1;
    while (!SudokuUtil.isValidPlace(randomSudoku, 0, i, number)) {
      number = Math.floor(Math.random() * 8) + 1;
    }
    if (SudokuUtil.isValidPlace(randomSudoku, 0, i, number)) {
      randomSudoku[0][i] = number;
    }
  }
  return randomSudoku;
}


// let solution = [];
// Util.copyGrid(board, solution)
let puzzle = createPuzzle()
gameSolver(puzzle)
Util.print2DArray(puzzle)

// gameSolver(board)
// for (let start = 0; start < board.length; ++start){
//     console.log(board[0][0])


// }