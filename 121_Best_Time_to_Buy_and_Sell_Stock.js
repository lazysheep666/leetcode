/**
 * 解决办法：
 * 思路1:
 * bruteforce  O(n^2)
 * 思路2:
 * 遍历数组时记录下最小值，当遇到比最小值大的值时，求出此时的profit，然后与之前求出的profit进行比较
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function(prices) {
  let min = Number.POSITIVE_INFINITY
  let maxProfit = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i]
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - min)
    }
  }
  return maxProfit
}
