/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
let levelOrderBottom = function(root) {
  let res = []
  if (root === null) {
    return res
  }
  let queue = []
  queue.push(root)
  while (queue.length > 0) {
    let size = queue.length
    let row = []
    while (size--) {
      let temp = queue.shift()
      row.push(temp.val)
      if (temp.left) {
        queue.push(temp.left)
      }
      if (temp.right) {
        queue.push(temp.right)
      }
    }
    if (row.length > 0) {
      res.unshift(row)
    }
  }
  return res
}
