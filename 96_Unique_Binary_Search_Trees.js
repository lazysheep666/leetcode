/**
 * @param {number} n
 * @return {number}
 */
let dp = []
let numTrees = function(n) {
  if (dp[n]) {
    return dp[n]
  }
  if (n === 0) {
    return 1
  }
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum += numTrees(i - 1) * numTrees(n - i)
  }
  dp[n] = sum
  return sum
}

let numTrees = function(n) {
  let dp = []
  dp[0] = 1
  for (let i = 1; i <= n; i++) {
    let sum = 0
    for (let j = 1; j <= i; j++) {
      sum = sum + dp[j - 1] * dp[i - j]
    }
    dp[i] = sum
  }
  return dp[n]
}
