/**
 * 思路: 这里主要是要判断是否有重复，通过储存已访问的数据就可以让查询变得O(1)
 * 解决办法1：
 * bit manupulation:
 * 用一个长度为9位的二进制来表示已经访问过的数字，如访问过2，则这个二进制数则为100，
 * 访问过了2 跟 4 则为 1010，如果进行比特或运算那么如果这个二进制数为0 则表示 这个位还未访问，
 * 每次通过比特与运算储存结果。
 * 解决办法2：
 * 用二维数组储存访问过的数字，如果已经访问过的话则将二维数组中对应的值置为1
 *
*/
/**
 * @param {character[][]} board
 * @return {boolean}
 */
let isValidSudoku = function(board) {
  let rows = new Array(9).fill(0)
  let cols = new Array(9).fill(0)
  let squares = new Array(9).fill(0)
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === '.') {
        continue
      }
      let val = 1 << Number.parseInt(board[i][j]) - '1'
      if ((rows[i] & val) > 0) {
        return false
      }
      if ((cols[j] & val) > 0) {
        return false
      }
      if ((squares[3 * Math.floor(i / 3) + Math.floor(j / 3)] & val) > 0) {
        return false
      }
      rows[i] |= val
      cols[j] |= val
      squares[3 * Math.floor(i / 3) + Math.floor(j / 3)] |= val
    }
  }
  return true
}

isValidSudoku = function(board) {

}
