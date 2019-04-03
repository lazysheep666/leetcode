/**
 * @param {number} n
 * @return {string}
 */
let convertToTitle = function(n) {
  let str = ''
  while (n > 0) {
    n--
    str = String.fromCharCode('A'.charCodeAt() + n % 26) + str
    n = Math.floor(n / 26)
  }
  return str
}
