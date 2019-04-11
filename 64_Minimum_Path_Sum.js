/**
 * @param {number[][]} grid
 * @return {number}
 */

// dynamic programming
let minPathSum = function(grid) {
  let dp = []
  for (let i = 0; i < grid.length; i++) {
    dp.push([])
  }
  return helper(grid, dp, grid.length - 1, grid[0].length - 1)
}

let helper = function(grid, dp, m, n) {
  if (m < 0 || n < 0) {
    return Number.POSITIVE_INFINITY
  }
  if (dp[m][n]) {
    return dp[m][n]
  }
  if (m === 0 && n === 0) {
    return grid[m][n]
  }
  let minPath = Math.min(helper(grid, dp, m - 1, n) + grid[m][n],
    helper(grid, dp, m, n - 1) + grid[m][n])
  dp[m][n] = minPath
  return minPath
}

// bottom-up dynamic programming

let minPathSum = function(grid) {
  let dp = [[], []]
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (i === 0 && j === 0) {
        dp[1][0] = grid[i][j]
      } else {
        let m = dp[0][j] !== undefined ? dp[0][j] : Number.POSITIVE_INFINITY
        let n = dp[1][j - 1] !== undefined ? dp[1][j - 1] : Number.POSITIVE_INFINITY
        dp[1][j] = Math.min(m, n) + grid[i][j]
      }
    }
    dp[0] = dp[1]
  }
  return dp[0][grid[0].length - 1]
}

minPathSum([[1, 2, 3], [2, 3, 2]])
