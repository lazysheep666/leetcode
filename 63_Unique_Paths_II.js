/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
let uniquePathsWithObstacles = function(obstacleGrid) {
  let dp = new Array(obstacleGrid.length).fill([].ca)
  return helper(obstacleGrid, obstacleGrid.length - 1, obstacleGrid[0].length - 1, dp)
}

let helper = function(grid, m, n, dp) {
  if (m < 0 || n < 0 || grid[m][n] === 1) {
    return 0
  }
  if (m === 0 && n === 0) {
    return 1
  }
  if (dp[m][n]) {
    return dp[m][n]
  }
  let paths = helper(grid, m - 1, n, dp) + helper(grid, m, n - 1, dp)
  dp[m][n] = paths
  return paths
}
uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0], [0, 0, 0]])
