document.addEventListener("DOMContentLoaded", function() {
    const player1Element = document.getElementById("player1");
    const player2Element = document.getElementById("player2");
    const board = document.getElementById("board");
  
    // Retrieve players' names from local storage
    const player1Name = localStorage.getItem("name") || "Player 1";
    const player2Name = localStorage.getItem("name2") || "Player 2";
    player1Element.textContent = player1Name;
    player2Element.textContent = player2Name;
  
    // Create the game board
    const numRows = 6;
    const numCols = 7;
    const boardArray = [];
    let currentPlayer = 1;
    let winner = null;
  
    // nested loop iterates each cell in the board
    for (let row = 0; row < numRows; row++) { 
      const rowArray = [];
      for (let col = 0; col < numCols; col++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.dataset.row = row;
        cell.dataset.col = col;
        board.appendChild(cell);
        rowArray.push(0);
  
        cell.addEventListener("click", () => handleCellClick(col));
      }
      boardArray.push(rowArray);
    } 

    // game functions
    function handleCellClick(col) {
      music2.play()
      if (winner) return; // Don't allow moves after the game is winning the game
  
      for (let row = numRows - 1; row >= 0; row--) { // pushes the coin from the bottom row to the first row
        if (boardArray[row][col] === 0) {  // while checking the loop current cell empty shows by 0
          boardArray[row][col] = currentPlayer;  // to shows the player2 options available to click
          const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`); // storing the clicked cell with row & col
          cell.classList.add(`player${currentPlayer}`);
          checkForWin(row, col);
          currentPlayer = currentPlayer === 1 ? 2 : 1; // switching turns
          break;
        }
      }
    }
    
    // searching winner 
    function checkForWin(row, col) {
      const directions = [
        [1, 0], // Vertical
        [0, 1], // Horizontal
        [1, 1], // Diagonal down-right
        [-1, 1], // Diagonal up-right
      ];
  
      const player = boardArray[row][col]; // retrives the turns of the player from boardArray
  
      for (const [dr, dc] of directions) {
        let count = 1;
        // Check in both directions
        for (let i = 1; i <= 3; i++) {  // checks both directions in the specified direction both +ve & -ve directions
          const newRow1 = row + i * dr;
          const newCol1 = col + i * dc;
          if (
            newRow1 >= 0 &&
            newRow1 < numRows &&
            newCol1 >= 0 &&
            newCol1 < numCols &&
            boardArray[newRow1][newCol1] === player
          ) {
            count++;
          } else {
            break; // No need to check further in this direction
          }
        }
  
        for (let i = 1; i <= 3; i++) {
          const newRow2 = row - i * dr;
          const newCol2 = col - i * dc;
          if (
            newRow2 >= 0 &&
            newRow2 < numRows &&
            newCol2 >= 0 &&
            newCol2 < numCols &&
            boardArray[newRow2][newCol2] === player
          ) {
            count++;
          } else {
            break; // No need to check further in this direction
          }
        }
  
        if (count >= 4) {
          winner = `player${player}`;
          handleGameResult(winner);
          return;
        }
      }
  
      // Check for a tie if all cells are filled
      if (boardArray.every(row => row.every(cell => cell !== 0))) {
        winner = "tie";
        handleGameResult(winner);
      }
    }
    
    // Displaying result
    function handleGameResult(result) {
      let winnerName;
      if (result === "tie") {
        winnerName = "TIE";
      } else if (result === "player1") {
        winnerName = player1Name;
      } else if (result === "player2") {
        winnerName = player2Name;
      }
  
      // Store the winner in local storage
      localStorage.setItem("winner", winnerName);
  
      // Redirect to the result page
      window.location.href = "result.html";
    }
  
  
  });
  
  var music = new Audio("./assets/a1.mp3")
  var music2 = new Audio("./assets/a2.mp3")
  music.play()
  music.loop=true;
  
