/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
let rotate = function(matrix) {
  let dimension = matrix.length
  let totalLevels = Math.floor((dimension) / 2)
  let level = 0
  let last = dimension - 1
  while (level < totalLevels) {
    for (let i = level; i < last; i++) {
      swap(matrix, level, i, i, last)
      swap(matrix, level, i, last, last - i + level)
      swap(matrix, level, i, last - i + level, level)
    }
    level++
    last--
  }
}

let swap = function(matrix, i, j, k, l) {
  let temp = matrix[i][j]
  matrix[i][j] = matrix[k][l]
  matrix[k][l] = temp
}
