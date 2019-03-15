/**
 * 解决办法
 * 回溯
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
const KEYS = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz' ]

let letterCombinations = function(digits) {
  let res = []
  if (digits.length > 0) {
    combination(digits, 0, '', res)
  }
  return res
}

let combination = function(digits, offset, letters, res) {
  if (offset === digits.length) {
    res.push(letters)
    return
  }
  for (let i = 0; i < KEYS[parseInt(digits[offset])].length; i++) {
    combination(digits, offset + 1, letters + KEYS[parseInt(digits[offset])][i], res)
  }
}
