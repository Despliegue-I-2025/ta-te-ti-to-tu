function getBotMove(board) {
  let winningMove = findWinningMove(board, 2); 
  if (winningMove !== -1) return winningMove;

  let blockingMove = findWinningMove(board, 1);
  if (blockingMove !== -1) return blockingMove;

  let forkMove = findForkMove(board, 2);
  if (forkMove !== -1) return forkMove;

  let cornerMove = getEmptyCorner(board);
  if (cornerMove !== -1) return cornerMove;

  let oppositeCornerMove = getOppositeCorner(board);
  if (oppositeCornerMove !== -1) return oppositeCornerMove;

  if (board[4] === 0) return 4;

  let sideMove = getEmptySide(board);
  if (sideMove !== -1) return sideMove;

  return -1;
}

module.exports = { getBotMove };

// Funciones auxiliares
function findWinningMove(board, playerValue) {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (const combo of winningCombinations) {
    let count = 0;
    let emptySlot = -1;
    for (const index of combo) {
      if (board[index] === playerValue) {
        count++;
      } else if (board[index] === 0) {
        emptySlot = index;
      }
    }
    if (count === 2 && emptySlot !== -1) {
      return emptySlot;
    }
  }
  return -1;
}

function findForkMove(board, playerValue) {
  const emptySpaces = board.map((val, idx) => val === 0 ? idx : -1).filter(idx => idx !== -1);
  for (const emptySpace of emptySpaces) {
    let potentialForks = 0;
    board[emptySpace] = playerValue;
    if (findWinningMove(board, playerValue) !== -1) {
      potentialForks++;
    }
    board[emptySpace] = 0;
    if (potentialForks >= 2) return emptySpace;
  }
  return -1;
}

function getEmptyCorner(board) {
  const corners = [0, 2, 6, 8];
  for (const corner of corners) {
    if (board[corner] === 0) return corner;
  }
  return -1;
}

function getOppositeCorner(board) {
  const corners = [0, 2, 6, 8];
  const oppositeCorners = [8, 6, 2, 0];
  for (let i = 0; i < corners.length; i++) {
    if (board[corners[i]] === 1 && board[oppositeCorners[i]] === 0) {
      return oppositeCorners[i];
    }
  }
  return -1;
}

function getEmptySide(board) {
  const sides = [1, 3, 5, 7];
  for (const side of sides) {
    if (board[side] === 0) return side;
  }
  return -1;
}
