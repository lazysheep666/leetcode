/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
let exist = function(board, word) {
  const rows = board.length
  const columns = (board[0] && board[0].length) || 0
  let explored = new Map()
  let cache = {}
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (helper(board, i, j, 0, word, explored, cache)) {
        return true
      }
    }
  }
  return false
}

let helper = function(board, row, column, step, word, explored, cache) {
  // base case
  if (step === word.length) {
    return true
  }
  let exploredItem = row + '#' + column
  // memorization
  if (cache[step] && cache[step][exploredItem]) {
    return cache[step][exploredItem]
  }
  // restriction
  if (row < 0 ||
    column < 0 ||
    row === board.length ||
    column === board[0].length ||
    explored.has(exploredItem)
  ) {
    if (cache[step]) {
      cache[step][exploredItem] = false
    } else {
      cache[step] = {
        [exploredItem]: false
      }
    }
    return false
  }
  if (board[row][column] !== word[step]) {
    if (cache[step]) {
      cache[step][exploredItem] = false
    } else {
      cache[step] = {
        [exploredItem]: false
      }
    }
    return false
  }
  // explore choices
  explored.set(exploredItem, true)
  let flag = helper(board, row - 1, column, step + 1, word, explored, cache) ||
      helper(board, row + 1, column, step + 1, word, explored, cache) ||
      helper(board, row, column + 1, step + 1, word, explored, cache) ||
      helper(board, row, column - 1, step + 1, word, explored, cache)
  explored.delete(exploredItem)
  if (flag) {
    if (cache[step]) {
      cache[step][exploredItem] = true
    } else {
      cache[step] = {
        [exploredItem]: true
      }
    }
  }
  return flag
}

exist([['A', 'B', 'C', 'E', 'F']], 'ABCE')
