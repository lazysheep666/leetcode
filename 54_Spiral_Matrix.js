/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
let spiralOrder = function(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return []
  }
  let T = 0
  let B = matrix.length - 1
  let L = 0
  let R = matrix[0].length - 1
  let dir = 0
  let res = []
  while (B >= T && R >= L) {
    if (dir === 0) {
      for (let i = L; i <= R; i++) { res.push(matrix[T][i]) }
      T++
    } else if (dir === 1) {
      for (let i = T; i <= B; i++) { res.push(matrix[i][R]) }
      R--
    } else if (dir === 2) {
      for (let i = R; i >= L; i--) { res.push(matrix[B][i]) }
      B--
    } else if (dir === 3) {
      for (let i = B; i >= T; i--) { res.push(matrix[i][L]) }
      L++
    }
    dir = (dir + 1) % 4
  }
  return res
}
