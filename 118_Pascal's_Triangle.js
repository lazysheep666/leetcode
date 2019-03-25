/**
 * 思路
 * 解决办法：
 * dynamic programming
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
let generate = function(numRows) {
  let res = []
  for (let i = 0; i < numRows; i++) {
    let row = []
    if (i === 0) {
      row.push(1)
    } else {
      row.push(1)
      for (let j = 1; j < i; j++) {
        row[j] = res[i - 1][j - 1] + res[i - 1][j]
      }
      row.push(1)
    }
    res.push(row)
  }
  return res
}
