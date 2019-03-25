/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function(prices) {
  let profit = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i - 1] < prices[i]) {
      profit += prices[i] - prices[i - 1]
    }
  }
  return profit
}
