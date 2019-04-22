/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
let solve = function(board) {
  if (board === null || board.length === 0 || board[0].length === 0) {
    return
  }
  let cols = board[0].length
  let rows = board.length
  let visited = []
  for (let i = 0; i < rows; i++) {
    visited.push([])
  }
  for (let i = 0; i < cols; i++) {
    if (board[0][i] === 'O' && !visited[0][i]) {
      helper(0, i, board, visited)
    }
    if (board[rows - 1][i] === 'O' && !visited[rows - 1][i]) {
      helper(rows - 1, i, board, visited)
    }
  }
  for (let j = 0; j < rows; j++) {
    if (board[j][0] === 'O' && !visited[j][0]) {
      helper(j, 0, board, visited)
    }
    if (board[j][cols - 1] === 'O' && !visited[j][cols - 1]) {
      helper(j, cols - 1, board, visited)
    }
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === '#') {
        board[i][j] = 'O'
      } else if (board[i][j] === 'O') {
        board[i][j] = 'X'
      }
    }
  }
}

let helper = function(row, col, board, visited) {
  if (row < 0 || col < 0 || row > board.length - 1 || col > board[0].length - 1 || board[row][col] === 'X' || visited[row][col]) {
    return
  }
  visited[row][col] = true
  if (board[row][col] === 'O') {
    board[row][col] = '#'
  }
  helper(row - 1, col, board, visited)
  helper(row + 1, col, board, visited)
  helper(row, col - 1, board, visited)
  helper(row, col + 1, board, visited)
}
