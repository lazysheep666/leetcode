/**
 * @param {number} n
 * @return {string[][]}
 */
let solveNQueens = function(n) {
  let res = []
  let board = []
  for (let i = 0; i < n; i++) {
    let temp = ''
    for (let j = 0; j < n; j++) {
      temp = temp.concat('.')
    }
    board.push(temp)
  }
  if (n > 0) {
    explore(board, 0, res)
  }
  return res
}

let explore = function(board, row, res) {
  if (row === board.length) {
    res.push(board)
  }
  for (let i = 0; i < board.length; i++) {
    if (check(board)) {
      board[row][i] = 'Q'
      explore(board, row + 1, i, res)
      board[row][i] = '.'
    }
  }
}

let check = function(board) {

}
