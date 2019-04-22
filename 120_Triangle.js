/**
 * @param {number[][]} triangle
 * @return {number}
 */
let minimumTotal = function(triangle) {
  if (triangle.length === 0) {
    return null
  }
  let dp = [[triangle[0][0]], []]
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[1][j] = triangle[i][j] + Math.min(dp[0][j - 1] !== undefined ? dp[0][j - 1] : Number.POSITIVE_INFINITY, dp[0][j] !== undefined ? dp[0][j] : Number.POSITIVE_INFINITY)
    }
    dp[0] = dp[1].concat()
  }
  let minTotal = Number.POSITIVE_INFINITY
  for (let i = 0; i < dp[0].length; i++) {
    minTotal = Math.min(minTotal, dp[0][i])
  }
  return minTotal
}
