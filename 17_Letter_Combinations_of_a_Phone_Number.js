/**
 * @param {string} digits
 * @return {string[]}
 */
const KEYS = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz' ]

let letterCombinations = function(digits) {
  let res = []
  combination(digits, 0)
  return res
}

let combination = function(digits, offset) {
  let letters = KEYS[digits[digits.length - 1] - '0']
  for (let i = 0; i < letters.length; i++) {
    let str = combination(digits.subString(0, digits.length - 1)) + letters[i]
  }
  if ()
}
