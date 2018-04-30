document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells : [
    { row: 0, col: 0, isMarked: false, isMine: false, hidden: true },
    { row: 2, col: 0, isMarked: false, isMine: false, hidden: true }, 
    { row: 1, col: 2, isMarked: false, isMine: false, hidden: true }, 
    { row: 0, col: 1, isMarked: false, isMine: false, hidden: true }, 
    { row: 0, col: 2, isMarked: false, isMine: true, hidden: true }, 	
    { row: 1, col: 0, isMarked: false, isMine: true, hidden: true }, 	
    { row: 1, col: 1, isMarked: false, isMine: false, hidden: true }, 	
    { row: 2, col: 1, isMarked: false, isMine: false, hidden: true }, 	
    { row: 2, col: 2, isMarked: false, isMine: false, hidden: true } 
  ]
   
};
function startGame () {
 
  // Looping through the contents of the board cells....
  for (var i=0; i<board['cells'].length; i++){

    // console.log(board.cells[i].row)
    countSurroundingMines(board.cells[i]);
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }
  document.addEventListener('click', checkForWin);
  
  document.addEventListener('contextmenu', checkForWin);
  lib.initBoard()
}

// Define this function to look for a win condition:
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // looping through the contents of board.cells:
  for (var i = 0; i < board.cells.length; i++) {

      if (board.cells[i].isMine && !board.cells[i].isMarked) { // ...if any mine still exists that isn't marked...

        return

      } else if (!board.cells[i].isMine && board.cells[i].hidden) { // ...if anything that isn't a mine is still hidden...

        return

      } 

    }

    lib.displayMessage('You win!')

  }
// You can use this function call to declare a winner (once you've
// detected that they've won, that is!)
//   lib.displayMessage('You win!')

function restartGame(){
function clearBoard(){
    for (var i = 0; i < board.cells.length; i++){
      document.getElementsByClassName('board')[0].innerHTML = '';
    }
  };
  clearBoard();
  startGame();
};


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {

  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col)

  var count = 0 // initialising a counter 

  for (var i = 0; i < surroundingCells.length; i++) {

    if (surroundingCells[i].isMine === true) { // iterating through the surroundingCells and checking the isMine property...
      count++
    }

  }

  return count

}










