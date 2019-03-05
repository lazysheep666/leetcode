/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
let convert = function(s, numRows) {
  if (numRows <= 1 || numRows >= s.length) {
    return s
  }
  let ret = ''
  let interval = 2 * numRows - 2
  for (let i = 0; i < numRows; i++) {
    for (let j = i; j < s.length; j += interval) {
      ret += s[j]
      let step = interval - 2 * i
      if (step > 0 && step < interval && step + j < s.length) {
        ret += s[step + j]
      }
    }
  }
  return ret
}
convert()
