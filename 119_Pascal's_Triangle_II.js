/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let res = []
  let prevRow = []
  for (let i = 0; i < rowIndex + 1; i++) {
    if (i === 0) {
      res.push(1)
    } else {
      res = []
      res.push(1)
      for (let j = 1; j < i; j++) {
        res[j] = prevRow[j - 1] + prevRow[j]
      }
      res.push(1)
    }
    prevRow = res
  }
  return res
}
