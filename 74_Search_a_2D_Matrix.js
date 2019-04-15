/**
 * 思路：
 * 解决办法1：
 * brute force, 遍历整个2D 数组 查找
 * 解决办法2：
 * 逐次遍历每一列数组，然后对每一列数组进行二分查找
 * 解决办法3：
 * 先对每一行数组进行二分查找，确定需要查找的数在哪一列
 * 然后再对该列进行二分查找
 * 解决办法4：
 * 把这个2D数组想象成一个一维的数组，然后进行二分查找
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
let searchMatrix = function(matrix, target) {
  if (matrix[0] === undefined) {
    return false
  }
  let row = matrix.length
  let col = matrix[0].length
  let lRow = 0
  let rRow = row - 1
  while (rRow >= lRow) {
    let midRow = lRow + Math.floor((rRow - lRow) / 2)
    if (matrix[midRow][0] > target) {
      rRow = midRow - 1
    } else if (matrix[midRow][col - 1] < target) {
      lRow = midRow + 1
    } else {
      let lCol = 0
      let rCol = col - 1
      while (rCol >= lCol) {
        let midCol = lCol + Math.floor((rCol - lCol) / 2)
        if (matrix[midRow][midCol] === target) {
          return true
        } else if (matrix[midRow][midCol] > target) {
          rCol = midCol - 1
        } else {
          lCol = midCol + 1
        }
      }
      return false
    }
  }
  return false
}

let searchMatrix = function(matrix, target) {
  let rows = matrix.length
  let cols = matrix[0] ? matrix[0].length : 0
  let totalItem = rows * cols
  let l = 0
  let r = totalItem - 1
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2)
    if (matrix[Math.floor(mid / cols)][mid % cols] === target) {
      return true
    } else if (matrix[Math.floor(mid / cols)][mid % cols] > target) {
      r = mid - 1
    } else if (matrix[Math.floor(mid / cols)][mid % cols] < targete) {
      l = mid + 1
    }
  }
  return false
}
