/**
 * @param {number} n
 * @return {string[]}
 */
let generateParenthesis = function(n) {
  let res = []
  explore(n, '', 0, 0, res)
  return res
}

let explore = function(n, parentheses, open, close, res) {
  if (parentheses.length === n * 2) {
    res.push(parentheses)
  }
  if (open < n) {
    explore(n, parentheses + '(', open + 1, close, res)
  }
  if (open > close) {
    explore(n, parentheses + ')', open, close + 1, res)
  }
}
